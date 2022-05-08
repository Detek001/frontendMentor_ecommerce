const fl = require('flickity');

const carouselMain = document.querySelector('.main-carousel');
const carouselScnd = document.querySelector('.second-carousel');

const flkty = new fl( carouselMain, {
  wrapAround: true,
  
})

const flkty2 = new fl( carouselScnd, {
  asNavFor: carouselMain,
  contain: true,
  draggable: false,
  
})