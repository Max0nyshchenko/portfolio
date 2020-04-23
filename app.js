// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const bottom_container = document.querySelector('.bottom-container');
const icons = document.querySelectorAll('.special');

// set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    // reset menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    // reset menu state
    showMenu = false;
  }
}

document.addEventListener('scroll', () => {
  bottom_container.style.visibility = 'visible';
  bottom_container.style.opacity = '1';
  bottom_container.style.transform = 'translate(0,0)';
});

icons.forEach((item) => {
  item.style.transition = 'none';
});
