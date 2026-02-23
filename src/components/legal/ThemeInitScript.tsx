export default function ThemeInitScript() {
  const code = `
(function () {
  try {
    const key = "everlight_theme";
    const stored = localStorage.getItem(key);
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored || (prefersDark ? "dark" : "light");
    const root = document.documentElement;

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  } catch (e) {}
})();
`.trim();

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
