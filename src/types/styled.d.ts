import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    red: string;
    blue: string;
    grey: string;
    pink1: string;
    pink2: string;

    // TOAST
    info: string;
    success: string;
    error: string;

    // Input
    inputBackground: string;
    inputBorder: string;
    inputDisabled: string;
    inputText: string;

    // Button
    buttonText: string;

    // Text
    text: string;
    textFocusLight: string;
    textLabel: string;
    textDisable: string;
    warning: string;

    // Table
    tableLineBorder: string;
    paginatorBorder: string;
    tableAddButton: string;

    // Header
    separator: string;

    // Menu
    menu: string;

    // Background
    backgroundLighter: string;
    backgroundDarker: string;
  }
}
