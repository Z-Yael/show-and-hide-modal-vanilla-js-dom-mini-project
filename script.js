'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// console.log(typeof btnShowModal);

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closedModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i].textContent);
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closedModal);

overlay.addEventListener('click', closedModal);

document.addEventListener('keydown', event => {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closedModal();
    console.log('closed by ESC click');
  }
});
