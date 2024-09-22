export const getRandomValues = (count: number, min: number, max: number) =>
  Array.from({ length: count }, () => Math.random() * (max - min) + min);

export const normalizePathname = (path: string) => path.replace(/^\//, "");
