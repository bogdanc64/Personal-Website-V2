/*==================== PARTICLES ====================*/

particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});


/*==================== NAV JS ====================*/

/*==================== ADD CURSOR ====================*/

/* new kursor({
    type: 4,
    removeDefaultCursor: true,
    color: "#8a8a8a"
})
 */
/*==================== REMOVE MENU ====================*/

/*==================== DARK MODE BUTTON ====================*/

/* const options = {
    bottom: '32px', // default: '32px'
    right: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#EFF1F3', // default: '#fff'
    backgroundColor: '#EFF1F3', // default: '#fff'
    buttonColorDark: '#222', // default: '#100f2c'
    buttonColorLight: '#EFF1F3', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget(); */

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

            return `Why do Java programmers have to wear glasses?  Because they don't C#. :)`
        },
    },
    // ...more commands
}
var shell = new TermlyPrompt('#terminal', { commands: customCommands })
shell.run('help')

/*==================== ACCORDION SKILLS ====================*/



/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== ABOUT US SWIPER  ====================*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/