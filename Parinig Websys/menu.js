const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuContent = document.getElementById('menuContent');

hamburgerMenu.addEventListener('click', () => {
    menuContent.classList.toggle('open');
});

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', () => {
    menuContent.classList.remove('open');
});

const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownButton.addEventListener('click', () => {
    dropdownButton.parentElement.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!dropdownButton.parentElement.contains(e.target)) {
        dropdownButton.parentElement.classList.remove('open');
    }
});
