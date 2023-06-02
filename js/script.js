const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.main-nav');

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('main-nav-open');
    burgerBtn.classList.toggle('burger-btn-close');
})