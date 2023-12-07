'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

/*
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
*/

// ce e mai sus e corect, dar ca sa nu incalcam principiul "don't repeat yourself" , vom face in felul urmator- facem un function expression called openModal si o vom chema in interiorul eventListener- ului:

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModal);

/*

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
})

*/

// ce e mai sus e corect, dar ca sa nu incalcam principiul "don't repeat yourself" , vom face in felul urmator- facem un function expression called closeModal si o vom chema in interiorul eventListener- ului:

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Implementing "Esc" Keypress Event

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
