export function formatDatePt(dateISO: string) {
  const d = new Date(dateISO);
  return d.toLocaleDateString("pt-PT", { day: "2-digit", month: "long", year: "numeric" });
}
