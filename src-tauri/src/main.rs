// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

pub mod error;
pub mod file_utils;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![file_utils::replace_text])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
