import './style.scss';
import Menu from './menu-page';
import Contact from './contact-page';
// import { createHeader } from "./create-header";


const page = document.getElementById('content');

const pageHeading = document.createElement('h1');
pageHeading.className = 'page-heading';
pageHeading.innerHTML = 'Welcome to Healthy Eat Food Restaurant';

const menuTitles = ['Delicious Dish', 'Delicious Dish', 'Delicious Dish', 'Delicious Dish', 'Delicious Dish', 'Delicious Dish'];
const menuDes = [
  'Delicious meal from Nigeria',
  'Delicious meal from Nigeria',
  'Delicious meal from Nigeria',
  'Delicious meal from Nigeria',
  'Delicious meal from Nigeria',
  'Delicious meal from Nigeria',
];

const menuBtn = document.createElement('button');
menuBtn.className = 'menu-btn';
menuBtn.innerText = 'Menu';

const contactBtn = document.createElement('button');
contactBtn.className = 'contact-btn';
contactBtn.innerText = 'Contact';


const innerWrap = document.createElement('div');
innerWrap.className = 'menu-wrap';

function tabContent(value) {
  innerWrap.innerHTML = '';
  if (value === 'menu') {
    for (let i = 0; i < menuTitles.length; i += 1) {
      const menu = new Menu(`dish${i + 1} dish-img-wrap`, menuTitles[i], menuDes[i]);
      menu.btn.addEventListener('click', () => {
        tabContent('contact');
      });
      innerWrap.appendChild(menu.content);
    }
  } else if (value === 'contact') {
    innerWrap.appendChild((new Contact('Afang Soup', 'Order this dish now! \n Call: (234)8064717555')).content);
  }
}

menuBtn.addEventListener('click', () => {
  tabContent('menu');
});
contactBtn.addEventListener('click', () => {
  tabContent('contact');
});

window.addEventListener('load', () => {
  page.appendChild(pageHeading);
  page.appendChild(menuBtn);
  page.appendChild(contactBtn);
  tabContent('menu');
  page.appendChild(innerWrap);
});

if (module.hot) {
  module.hot.accept();
}