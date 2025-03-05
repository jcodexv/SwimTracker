const navToggler = document.querySelector('#open-btn');
const navCloser = document.querySelector('#close-btn');
const navList = document.querySelector('.nav-list');

function toggleNav(isOpen) {
    navList.classList.toggle("active", isOpen);
    navCloser.classList.toggle("active", isOpen);
    navToggler.classList.toggle("unactive", isOpen);
}

navToggler.addEventListener('click', () => toggleNav(true));
navCloser.addEventListener('click', () => toggleNav(false));
