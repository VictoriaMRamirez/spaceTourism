const navToggle = document.getElementById('button');
const primaryNav = document.getElementById('navigation-list');

navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('active');
})