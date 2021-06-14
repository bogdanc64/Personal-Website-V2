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

/*==================== TERMINAL ====================*/

var customCommands = {
  help: { // keep it equal to name till I change it
    name: 'help', // keep it equal to the key till I change it
    type: 'builtin', // OPTIONAL default to 'usr' if not passed
    man: "List of available commands.\nType man <command> to have further info.",
    fn: function() {
                return "Commands available: " + Object.keys(customCommands).join(", ") + '.\n Type "man <command>" to have further info.'
    },
  },

  cv: { // keep it equal to name till I change it
    name: 'cv', // keep it equal to the key till I change it
    type: 'builtin', // OPTIONAL default to 'usr' if not passed
    man: 'My CV', // Manual Entry for the command OPTIONAL
    fn: function cv(ARGV) {
      // Here is where the action goes, do what you want and return a value
      // (more on context and arguments below)

      return `Will be available in future.`
    },
  },
  joke: { // keep it equal to name till I change it
    name: 'test', // keep it equal to the key till I change it
    type: 'builtin', // OPTIONAL default to 'usr' if not passed
    man: 'A little joke. I know, it is very bad. :)', // Manual Entry for the command OPTIONAL
    fn: function cv(ARGV) {
      // Here is where the action goes, do what you want and return a value
      // (more on context and arguments below)

      return `John had 2 horses. One was named John and one was at mall.`
    },
  },
  // ...more commands
}
var shell = new TermlyPrompt('#terminal', { commands: customCommands })

/*==================== ACCORDION SKILLS ====================*/



/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/
