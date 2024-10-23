import { LanguageOptions, ThemeOptions } from "./types";

export const themeOptions = [
  { value: "system", label: ThemeOptions.System },
  { value: "dark", label: ThemeOptions.Dark },
  { value: "light", label: ThemeOptions.Light },
];

export const langOptions = [
  { value: "system", label: LanguageOptions.System },
  { value: "english", label: LanguageOptions.English },
  { value: "greek", label: LanguageOptions.Greek },
];

export const MAX_FILE_SIZE: number = 102400;

export const validFileExtensions: { [key: string]: string[] } = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};
