export const formatToOptions = <T>(data: T[], labelKey: keyof T, valueKey: keyof T) =>
  data.map((entry) => ({ label: entry[labelKey], value: entry[valueKey] }));

export const formatToDecimalPlaces = (value: string | number, places: number) => {
  if (typeof value === "number") return parseFloat(value?.toFixed(places))?.toString();
  return parseFloat(parseFloat(value)?.toFixed(places))?.toString();
};

export const calculateCTR = (clicks: number, impressions: number) => {
  const rate = (clicks / impressions) * 100;
  return `${formatToDecimalPlaces(rate, 2)}%`;
};
