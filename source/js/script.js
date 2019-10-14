"use strict";

new fullpage('#fullpage', {
  anchors: ['hero', 'advantages', 'video', 'about', 'benefits', 'packages', 'partners', 'contacts', 'footer'],
  navigation: true,
  // navigationTooltips: ['hero', 'advantages', 'video', 'about', 'benefits'],
  // slidesNavigation: true,
  dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
  scrollOverflow: true,
});



var hamburger = document.querySelector(".hamburger");
// var navMain = document.querySelector('.header-nav__list');

hamburger.addEventListener('click', function() {
  if (hamburger.classList.contains('open')) {
    hamburger.classList.remove('open');
    // navMain.classList.remove('header-nav__list--active');
  } else {
    hamburger.classList.add('open');
    // navMain.classList.add('header-nav__list--active');
  }
});
