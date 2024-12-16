const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const footer = document.querySelector('footer');

let lastScrollTop = 0;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Сохранение выбранной темы в localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

// Скрывание футера при прокрутке
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        footer.classList.add('hidden');
    } else {
        footer.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});