"use strict";

new fullpage('#fullpage', {
  anchors: ['page1', 'page2', 'page3', 'page4'],
  navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
  css3: true,
  scrollingSpeed: 1000,
  navigation: true,
  slidesNavigation: true,
  responsiveHeight: 330,
  dragAndMove: true,
  dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
  controlArrows: false
});

// var hamburger = document.querySelector(".hamburger");
// // var navMain = document.querySelector('.header-nav__list');


// hamburger.addEventListener('click', function() {
//   if (hamburger.classList.contains('open')) {
//     hamburger.classList.remove('open');
//     // navMain.classList.remove('header-nav__list--active');
//   } else {
//     hamburger.classList.add('open');
//     // navMain.classList.add('header-nav__list--active');
//   }
// });
