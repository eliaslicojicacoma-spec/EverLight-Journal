import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isValidLocale } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = isValidLocale(locale) ? locale : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default
  };
});
