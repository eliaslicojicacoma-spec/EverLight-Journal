export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9\s-]/g, "") // remove símbolos
    .replace(/\s+/g, "-") // espaços -> hífen
    .replace(/-+/g, "-"); // remove hífens duplicados
}

export function unslugify(input: string): string {
  // só deixa a tag “apresentável” na UI
  return input.replace(/-/g, " ").trim();
}
