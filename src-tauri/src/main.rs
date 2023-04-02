// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod csv;
use crate::csv::change_word;
mod error;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![change_word])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
