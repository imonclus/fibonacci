const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
}

// Lógica para Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (darkModeToggle) {
    // Comprobar preferencia guardada
    const currentMode = localStorage.getItem('darkMode');
    if (currentMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.innerText = '☀️';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerText = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.innerText = '🌙';
        }
    });
}
