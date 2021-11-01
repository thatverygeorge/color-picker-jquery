'use strict';

const text = document.querySelector('.text');
const fieldset = document.querySelector('.fieldset');
const radioColor = document.querySelector('.radio--color');
const radioBackgroundColor = document.querySelector('.radio--background-color');

const setColor = () => {
  let red = $('.slider--red').slider('value');
  let green = $('.slider--green').slider('value');
  let blue = $('.slider--blue').slider('value');

  if (radioColor.checked === true) {
    text.style.color = `rgb(${red}, ${green}, ${blue})`;
  }

  if (radioBackgroundColor.checked === true) {
    text.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
};

const resetSliders = () => {
  $('.slider--red').slider('value', 0);
  $('.slider--green').slider('value', 0);
  $('.slider--blue').slider('value', 0);
};

window.addEventListener('load', () => {
  $('.slider--red, .slider--green, .slider--blue').slider({
    range: 'min',
    max: 255,
    step: 1,
    slide: setColor,
  });
});

fieldset.addEventListener('click', (evt) => {
  if(evt.target.matches('.fieldset__radio')) {
    console.log('reset');
    resetSliders();
  }
});