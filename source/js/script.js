"use strict";

$('[data-aos]').each(function(){ $(this).addClass("aos-init"); });

$('#fullpage').fullpage({
  navigation: true,
  scrollOverflow: true,
  responsiveWidth: 767,
  scrollingSpeed: 1200,
  onLeave: function() {
    $('.section [data-aos]').each(function() {
      $(this).removeClass("aos-animate")
    });
  },
  afterLoad: function() {
    $('.section.active [data-aos]').each(function() {
      $(this).addClass("aos-animate")
    });
  }
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



// Define our viewportWidth variable
var viewportWidth;
var sections = document.querySelectorAll('.section');

// my custom function
var removeSectionScroll = function (section) {
  section.classList.add('fp-noscroll');
};

// Set/update the viewportWidth value
var setViewportWidth = function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

// Log the viewport width into the console
var logWidth = function () {
  if (viewportWidth < 768) {
    // my custom code
    for (var i = 0; i < sections.length; i++) {
      removeSectionScroll(sections[i]);
    }
  }
}

// Set our initial width and log it
setViewportWidth();
logWidth();

// On resize events, recalculate and log
window.addEventListener('resize', function () {
  setViewportWidth();
  logWidth();
}, false);
