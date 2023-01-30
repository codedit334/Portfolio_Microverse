const ham = document.querySelector('.nav-btn-ham');
const x = document.querySelector('.nav-btn-x');
const navMenu = document.querySelector('.nav-menu');

ham.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
x.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-menu-list').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}));
