export const setLocalStorageItem = (name: string, item: Record<string, unknown> | string) => {
  const modifiedItem = typeof item === "object" ? JSON.stringify(item) : item;
  window.localStorage.setItem(name, modifiedItem);
};

export const getLocalStorageItem = (name: string) => {
  const item = window.localStorage.getItem(name) ?? "";
  return item;
};

export const removeLocalStorageItem = (name: string) => {
  window.localStorage.removeItem(name);
};
