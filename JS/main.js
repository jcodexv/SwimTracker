const navToggler = document.querySelector('.nav-toggler');
const navList = document.querySelector('.nav-list');
const joinBtn = document.querySelector('#join-btn');

navToggler.addEventListener('click', () => {
    navList.classList.toggle("active");
    joinBtn.classList.toggle("noblur");
});
