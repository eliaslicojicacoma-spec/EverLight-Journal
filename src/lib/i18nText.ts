export type LocalizedText = string | { pt?: string; en?: string };

export function t(value: LocalizedText, locale: string) {
  if (typeof value === "string") return value;
  if (!value) return "";
  const loc = locale === "en" ? "en" : "pt";
  return value[loc] ?? value.pt ?? value.en ?? "";
}
