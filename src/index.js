import markupTemplate from './templates/markup.hbs';
import dataTemplate from './menu.json';


const menuRef = document.querySelector('.js-menu');

function createMenuMarkup(dataTemplate) {
  return dataTemplate.map(markupTemplate).join('')
};

const menuMarkup = createMenuMarkup(dataTemplate);
menuRef.insertAdjacentHTML('beforeend', menuMarkup)