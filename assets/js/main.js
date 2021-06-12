/*==================== PARTICLES ====================*/

particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

/*==================== MENU SHOW Y HIDDEN ====================*/


/*===== HIDE MENU =====*/

var hide = function (elem) {
	elem.style.display = 'none';
};

/*===== SHOW MENU =====*/

var show = function (elem) {
	elem.style.display = 'inline-block';
};

/*==================== ADD CURSOR ====================*/

new kursor({
    type: 4,
    removeDefaultCursor: true,
    color:"#8a8a8a"
})

/*==================== REMOVE MENU ====================*/

var nav = document.getElementById("nav-items");
var menu = document.getElementById("nav-toggle");

menu.addEventListener('click', function(){
  menu.classList.toggle('active');

    // If the element is visible, hide it
  if (window.getComputedStyle(nav).display === 'inline-block') {
    hide(nav);
    return;
  }

  // Otherwise, show it
  show(nav);
  });

/*==================== ACCORDION SKILLS ====================*/



/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/
