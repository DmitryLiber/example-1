import { addClass, removeClass } from '../../js/partials/utils';
// import { maskPhone } from '../../assets/js/partials/mask';

let lastTrigger;
const DELAY_DISABLED = 200;

const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
const changeBodyOffset = (isOpened = false) =>
  document.body.style.setProperty(
    '--scrollbar-width',
    isOpened ? `${scrollbarWidth}px` : 0
  );

const onCloseModal = () => {
  const activeModal = document.querySelector('.modal.is-open');

  activeModal
    .querySelector('.js-close')
    .removeEventListener('click', onCloseModal);

  if (activeModal.querySelector('form')) {
    activeModal.querySelector('form').reset();
  }

  // if (activeModal.querySelector('.form [class*="error"')) {
  //   removeAllErrors('.modal .form', validateForms().settings);
  // }

  if (lastTrigger) {
    lastTrigger.setAttribute('aria-expanded', 'false');
  }

  removeClass(activeModal, 'is-open');

  setTimeout(() => {
    removeClass(document.body, 'modal-open');
    changeBodyOffset();
  }, DELAY_DISABLED);

  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', onEscPress);
};

function onEscPress(evt) {
  if (evt.code === 'Escape') {
    onCloseModal();
  }
}

const onOpenModal = (modal) => {
  addClass(modal, 'is-open');
  modal.querySelector('.close').addEventListener('click', onCloseModal);
  document.addEventListener('keydown', onEscPress);
};

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('js-modal')) return;

  e.preventDefault();

  e.target.setAttribute('aria-expanded', 'true');
  lastTrigger = e.target;

  const findModal = document.querySelector(
    `.modal[data-id="${lastTrigger.dataset.id}"]`
  );

  let targetModal;

  if (!findModal) {
    targetModal = document.querySelector(`#${e.target.dataset.id}`).content
      .firstElementChild;

    document.body.appendChild(targetModal);
  } else {
    targetModal = findModal;
  }

  setTimeout(() => {
    changeBodyOffset(true);
    addClass(document.body, 'modal-open');

    setTimeout(() => {
      onOpenModal(targetModal, e);
      addClass(targetModal, 'is-open');
    }, DELAY_DISABLED);
  }, 0);
});
