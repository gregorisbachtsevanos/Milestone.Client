import { format } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";

export const displayDate = (date: Date, timezoneUtcString: string, countryCode: string) => {
  const dateOnTimezone = formatToTimezone(date, timezoneUtcString);
  const dateFormatOnCountry = formatDateToCountry(dateOnTimezone, countryCode);
  return dateFormatOnCountry;
};

export const formatToTimezone = (date: string | Date, timezoneUtcString: string) =>
  utcToZonedTime(date, timezoneUtcString);

export const formatTimezoneToUtc = (date: string | Date, timezoneUtcString: string) =>
  zonedTimeToUtc(date, timezoneUtcString);

const formatDateToCountry = (date: Date, countryCode: string, includeTime?: boolean) => {
  let dateFormat = "dd/MM/yyy";

  if (includeTime)
    dateFormat =
      countryCode === "US" || countryCode === "CA" ? "MM/dd/yyy hh:mm aa" : "dd/MM/yyy hh:mm aa";
  else dateFormat = countryCode === "US" || countryCode === "CA" ? "MM/dd/yyy" : "dd/MM/yyy";

  return format(new Date(date), dateFormat);
};

export const getCountryDateFormat = (countryCode: string) => {
  const countryCodeWithCapitalLetters = countryCode.toUpperCase();
  const dateFormat =
    countryCodeWithCapitalLetters === "US" || countryCodeWithCapitalLetters === "CA"
      ? "MM/dd/yyy"
      : "dd/MM/yyy";
  const timeFormat = "hh:mm aa";

  return `${dateFormat} ${timeFormat}`;
};
