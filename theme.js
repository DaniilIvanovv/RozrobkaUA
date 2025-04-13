const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function updateThemeButtonText() {
    themeToggle.textContent = body.classList.contains('dark-theme') ? 'Денна тема' : 'Нічна тема';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    updateThemeButtonText();
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
}

updateThemeButtonText();
