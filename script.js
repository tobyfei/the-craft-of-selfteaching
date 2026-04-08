const toggle = document.getElementById('themeToggle');
const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (localStorage.theme === 'dark' || (!localStorage.theme && preferDark)) {
  document.body.classList.add('dark');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.theme = isDark ? 'dark' : 'light';
  toggle.textContent = isDark ? '☀️' : '🌙';
});
