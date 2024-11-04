export const setCookie = (name: string, value: string, days = 1) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Strict`;
};

export const getCookie = (name: string) => {
  return document.cookie.split("; ").reduce((acc, current) => {
    const [key, value] = current.split("=");
    return key === name ? decodeURIComponent(value) : acc;
  }, "");
};
