use std::fs::{self, OpenOptions};
use std::io::prelude::*;
use std::path::{Path, PathBuf};

use tauri::Window;

use crate::error::Error;

#[derive(Clone, serde::Serialize)]
struct Payload<'a> {
    processed: &'a Vec<String>,
}

#[tauri::command]
pub async fn replace_text(
    file_paths: Vec<String>,
    find_text: String,
    replace_with: String,
    window: Window,
) -> Result<Vec<String>, Error> {
    let mut result: Vec<String> = Vec::new();
    let mut processed: Vec<String> = Vec::new();

    for file_path in &file_paths {
        let content = fs::read_to_string(file_path)?;
        let new_content = content.replace(&find_text, &replace_with);

        let mut file = OpenOptions::new()
            .write(true)
            .truncate(true)
            .open(file_path)
            .unwrap();
        file.write(new_content.as_bytes()).unwrap();
        file.flush()?;

        result.push(rename_file(&file_path, &replace_with, &find_text)?);
        processed.push(String::from(file_path));

        window
            .emit(
                "FILE_REPLACE_TEXT_PROGRESS",
                Payload {
                    processed: &processed,
                },
            )
            .unwrap();
    }
    Ok(result)
}

fn rename_file(
    file_path: &String,
    find_text: &String,
    replace_with: &String,
) -> Result<String, Error> {
    let path1 = Path::new(file_path);
    let new_name = path1
        .file_name()
        .unwrap()
        .to_str()
        .unwrap()
        .replace(replace_with, find_text);
    let path2 = change_file_name(path1, &new_name);

    fs::rename(&path1, &path2)?;
    Ok(path2.as_path().display().to_string())
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
