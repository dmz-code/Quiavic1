document.addEventListener("DOMContentLoaded",  () => {
  const button = document.getElementById("theme-toggle");

  if (!button) return;

  function setTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
    button.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }

  button.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });
});