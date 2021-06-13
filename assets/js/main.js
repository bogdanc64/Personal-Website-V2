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

/*==================== DARK MODE BUTTON ====================*/

const options = {
  bottom: '32px', // default: '32px'
  right: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

/*==================== ACCORDION SKILLS ====================*/



/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/
