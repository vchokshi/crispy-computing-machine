/* active-menu.js | https://www.indonez.com | Indonez | MIT License */
function activeMenu(options) {
    'use strict';

    // Default settings
    const defaults = {
        activeClass: 'uk-active',                   // active class css name
        navbarClass: 'uk-navbar-nav',               // navbar class name in your HTML
        dropdownClass: 'uk-navbar-dropdown'         // dropdown class name in your HTML
    };

    // Merge user options into defaults
    const settings = Object.assign({}, defaults, options);

    // Check if element exist
    if (document.querySelector(`.${settings.navbarClass}`) !== null) {
        // Required variables
        const path = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
        const navbar = document.querySelector(`.${settings.navbarClass}`).querySelectorAll('li');
        const dropdown = document.querySelectorAll(`.${settings.dropdownClass}`);

        // Set of functions
        const activeMenuMethods = {
            addActive: function (navbarParam) {
                location.pathname[location.pathname.length - 1] == '/' ?
                    navbarParam[0].classList.add(settings.activeClass) :
                    navbarParam.forEach(e => {
                        if (e.children[0].attributes[0].value == path) e.classList.add(settings.activeClass)
                    })
            },
            addActiveParent: function (dropdownParam) {
                dropdownParam.forEach(e => {
                    if (e.querySelector(`.${settings.activeClass}`) !== null) e.parentElement.classList.add(settings.activeClass)
                })
            },
            init: function () {
                activeMenuMethods.addActive(navbar);
                activeMenuMethods.addActiveParent(dropdown);
            }
        };
        activeMenuMethods.init();
    }
};
activeMenu();
