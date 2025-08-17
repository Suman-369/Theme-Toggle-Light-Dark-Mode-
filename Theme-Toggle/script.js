const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const body = document.body;
const themeKey = "theme";
const themeToggle = document.getElementById("themeToggle");
const switchIcon = document.querySelector('.switch-icon');

function applyTheme(theme) {
    body.classList.remove("dark", "light");
    body.classList.add(theme);
    if (themeToggle) {
        themeToggle.checked = theme === "dark";
        // if (switchIcon) switchIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
}

function getSystemTheme() {
    return prefersDark.matches ? "dark" : "light";
}

function setTheme(theme) {
    applyTheme(theme);
    localStorage.setItem(themeKey, theme);
}

setTheme(localStorage.getItem(themeKey) || getSystemTheme());

prefersDark.addEventListener("change", () => {
    if (!localStorage.getItem(themeKey)) {
        setTheme(getSystemTheme());
    }
});

if (themeToggle) {
    themeToggle.addEventListener("change", () => {
        const newTheme = themeToggle.checked ? "dark" : "light";
        setTheme(newTheme);
    });
}

