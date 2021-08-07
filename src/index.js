import markupTemplate from './templates/markup.hbs';
import dataTemplate from './menu.json';


const menuRef = document.querySelector('.js-menu');
const switcherThemeRef = document.querySelector('#theme-switch-toggle');

function createMenuMarkup(dataTemplate) {
  return dataTemplate.map(markupTemplate).join('')
};


menuRef.insertAdjacentHTML('beforeend', createMenuMarkup(dataTemplate));


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
setCurrentTheme();
function setCurrentTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === null) {
    return
  }
  if (theme === Theme.DARK) {
    switcherThemeRef.checked = true;
    document.body.classList.add(Theme.DARK);
   }
 }


switcherThemeRef.addEventListener('change', themeSwitcher)

function themeSwitcher(e) {

  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    document.body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
};