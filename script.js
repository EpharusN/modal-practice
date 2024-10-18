'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseOverlay = document.querySelector('.close-overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
  });
