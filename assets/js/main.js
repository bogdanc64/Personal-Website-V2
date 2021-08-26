/*==================== PARTICLES ====================*/

particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

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

/*==================== PARALLAX ====================*/

/* var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene); */


/*==================== PORTFOLIO FILTER ====================*/

$(document).ready(function() {
    $('.portfolio-item').isotope(function() {
        itemSelector: '.item'
    });



    $('.portfolio-menu ul li').click(function() {
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');


        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter: selector
        })
        return false;
    });
});

/*==================== SERVICES MODAL ====================*/


/*==================== ABOUT US SWIPER  ====================*/

/* var swiper = new Swiper(".mySwiper", {
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
 */

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/