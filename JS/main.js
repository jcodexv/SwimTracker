const navToggler = document.querySelector('#open-btn');
const navCloser = document.querySelector('#close-btn');
const navList = document.querySelector('.nav-list');
const joinBtn = document.querySelector('#join-btn');

function toggleNav(isOpen) {
    navList.classList.toggle("active", isOpen);
    joinBtn.classList.toggle("noblur", isOpen);
    navCloser.classList.toggle("active", isOpen);
    navToggler.classList.toggle("unactive", isOpen);
}

navToggler.addEventListener('click', () => toggleNav(true));
navCloser.addEventListener('click', () => toggleNav(false));
