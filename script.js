

const toggler = document.querySelector('[data-check-box]');
const displayOne = document.querySelector('[data-disp-1]');
const displayTwo = document.querySelector('[data-disp-2]');
const displayThree = document.querySelector('[data-disp-3]');
const displayFour = document.querySelector('[data-disp-4]');
const displayFive = document.querySelector('[data-disp-5]');
const displaySix = document.querySelector('[data-disp-6]');

toggler.addEventListener('change', ()=>{
    displayOne.classList.toggle('hide');
    displayTwo.classList.toggle('show');
    displayThree.classList.toggle('hide');
    displayFour.classList.toggle('show');
    displayFive.classList.toggle('hide');
    displaySix.classList.toggle('show');
})