use std::fs::{self, OpenOptions};
use std::io::prelude::*;
use std::path::{Path, PathBuf};
use std::{thread, time};

use tauri::Window;

use crate::error::Error;

#[derive(Clone, serde::Serialize)]
struct Payload<'a> {
    processed: &'a Vec<String>,
}

#[tauri::command]
pub async fn change_word(
    file_paths: Vec<String>,
    old_word: String,
    new_word: String,
    window: Window,
) -> Result<Vec<String>, Error> {
    let mut result: Vec<String> = Vec::new();
    let mut processed: Vec<String> = Vec::new();

    for file_path in &file_paths {
        let contents = fs::read_to_string(file_path)?;
        let new = contents.replace(&old_word, &new_word);
        dbg!(&contents, &new);

        let mut file = OpenOptions::new()
            .write(true)
            .truncate(true)
            .open(file_path)
            .unwrap();
        file.write(new.as_bytes()).unwrap();
        file.flush()?;

        println!(
            "file path renamed :: {}",
            file_path.replace(&old_word, &new_word)
        );

        let path1 = Path::new(file_path);

        let new_name = path1
            .file_name()
            .unwrap()
            .to_str()
            .unwrap()
            .replace(&old_word, &new_word);
        let path2 = change_file_name(path1, &new_name);
        dbg!(&path1, &path2);

        result.push(path2.as_path().display().to_string());
        fs::rename(path1, path2)?;

        processed.push(path1.display().to_string());
        window
            .emit(
                "FILE_REPLACE_WORD_PROGRESS",
                Payload {
                    processed: &processed,
                },
            )
            .unwrap();

        let ten_millis = time::Duration::from_secs(1);

        thread::sleep(ten_millis);
    }
    Ok(result)
}

fn change_file_name(path: impl AsRef<Path>, name: &str) -> PathBuf {
    let path = path.as_ref();
    let mut result = path.to_owned();
    result.set_file_name(name);
    if let Some(ext) = path.extension() {
        result.set_extension(ext);
    }
    result
}
