const navToggler = document.querySelector('#open-btn');
const navCloser = document.querySelector('#close-btn');
const navList = document.querySelector('.nav-list');
const brand = document.querySelector('.brand');
const navLinks = document.querySelectorAll('.nav-list a');

function toggleNav(isOpen) {
    navList.classList.toggle("active", isOpen);
    navCloser.classList.toggle("active", isOpen);
    navToggler.classList.toggle("unactive", isOpen);
    brand.classList.toggle("hidden", isOpen);
}

navLinks.forEach(link => {
    link.addEventListener('click', () => toggleNav(false));
});

navToggler.addEventListener('click', () => toggleNav(true));
navCloser.addEventListener('click', () => toggleNav(false));
