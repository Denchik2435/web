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

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}


window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (currentScrollPosition + windowHeight >= documentHeight - 10) {
        footer.classList.remove('hidden');
    } else if (currentScrollPosition > lastScrollPosition) {
        footer.classList.add('hidden');
    } else {
        footer.classList.remove('hidden');
    }

    lastScrollPosition = currentScrollPosition;
});
