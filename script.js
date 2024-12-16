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


window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (currentScrollPosition + windowHeight >= documentHeight - 10) {
        // Пользователь долистал до конца страницы — показать подвал
        footer.classList.remove('hidden');
    } else if (currentScrollPosition > lastScrollPosition) {
        // Прокрутка вниз — скрыть подвал
        footer.classList.add('hidden');
    } else {
        // Прокрутка вверх — показать подвал
        footer.classList.remove('hidden');
    }

    lastScrollPosition = currentScrollPosition;
});