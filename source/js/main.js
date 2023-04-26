import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

// Video
const video = document.querySelector('.video');
const link = document.querySelector('.video__link');
const button = document.querySelector('.video__button');
const iframeBlock = video.querySelector('[data-video-container]');
link.removeAttribute('href');

const createIframe = (block) => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('width', 364);
  iframe.setAttribute('height', 228);
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', block.dataset.src);
  return iframe;
};

button.addEventListener('click', () => {
  if (video && iframeBlock) {
    button.remove();
    link.remove();
    const newIframe = createIframe(iframeBlock);
    iframeBlock.append(newIframe);
  }
});

// Tabs
import {initTabs} from './modules/tabs/init-tabs.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initTabs();
  });
});

