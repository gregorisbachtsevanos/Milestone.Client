export const themeOptions = [
  { value: "system", label: "System" },
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
];

export const langOptions = [
  { value: "system", label: "System" },
  { value: "english", label: "English" },
  { value: "greek", label: "Greek" },
];

export const MAX_FILE_SIZE: number = 102400;

export const validFileExtensions: { [key: string]: string[] } = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};
