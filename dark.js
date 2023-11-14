document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const darkModeIcon = document.querySelector(".theme");
    const storedMode = localStorage.getItem('darkMode');

    if (storedMode === 'dark') {
        enableDarkMode();
    }

    document.querySelector(".button").addEventListener('click', ()  => {
        if (body.classList.contains('dark')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add('dark');
        darkModeIcon.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    }

    function disableDarkMode() {
        body.classList.remove('dark');
        darkModeIcon.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }
});