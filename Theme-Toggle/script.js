(() => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const body = document.body;
  const themeKey = "theme";
  const toggle = document.getElementById("themeToggle");

  const applyTheme = theme => {
    body.classList.toggle("dark", theme === "dark");
    body.classList.toggle("light", theme === "light");

    if (toggle) toggle.checked = theme === "dark";
  };

  const getSystemTheme = () => (prefersDark.matches ? "dark" : "light");

  const setTheme = theme => {
    applyTheme(theme);
    localStorage.setItem(themeKey, theme);
  };

  setTheme(localStorage.getItem(themeKey) || getSystemTheme());

  prefersDark.addEventListener("change", () => {
    if (!localStorage.getItem(themeKey)) setTheme(getSystemTheme());
  });

  if (toggle) {
    toggle.addEventListener("change", () =>
      setTheme(toggle.checked ? "dark" : "light")
    );
  }
})();
