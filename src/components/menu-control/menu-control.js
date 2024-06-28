import {
  hasClass,
  removeClass,
  addClass,
  // lockBody,
  // unLockBody,
} from '../../js/partials/utils';

// model
const btn = document.querySelector('.js-menu-control');
const dropbox = document.querySelector('.js-menu-drop');

// view
const openMenu = () => {
  addClass(btn, 'open');
  addClass(dropbox, 'open');
};

const closeMenu = () => {
  if (!hasClass(btn, 'open')) return;
  removeClass(btn, 'open');
  removeClass(dropbox, 'open');
};

// controller
if (document.querySelector('.js-menu-control')) {
  btn.addEventListener('click', () => {
    if (hasClass(btn, 'open')) {
      closeMenu();
      // unLockBody();
      return;
    }

    openMenu();
    // lockBody();
  });
}
