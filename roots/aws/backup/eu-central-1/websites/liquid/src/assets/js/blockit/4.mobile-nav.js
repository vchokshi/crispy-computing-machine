/* mobile-nav.js | https://www.indonez.com | Indonez | MIT License */
function mobileNav(options) {
    'use strict';

    // Default settings
    const defaults = {
        addonButtons: true,                 // options to use addon buttons, set it "false" if you won't use addon buttons
        buttons: [
            {
                name: '',                   // button name
                url: '',                    // button url
                type: 'primary',            // button type (default, primary, secondary, danger, text)
                icon: 'sign-in-alt'         // button icon, you can use all icons from here : https://fontawesome.com/icons?d=gallery&s=solid&m=free
            },
        ]
    };

    // Merge user options into defaults
    const settings = Object.assign({}, defaults, options);

    // Check if element exist
    if (document.querySelector('.uk-navbar-nav') !== null) {
        // Required variables
        const navbar = document.querySelector('.uk-navbar-nav');
        const mobileNavbar = navbar.cloneNode(true);
        const mobileNavbarChild = mobileNavbar.querySelectorAll('ul.uk-nav');
        const optionalNav = document.querySelector('.in-optional-nav');

        // Set of functions
        const mobileNavMethods = {
            createMobileNav: function () {
                // Remove the current class in main navigation
                mobileNavbar.classList.remove('uk-navbar-nav', 'uk-visible@m');
                mobileNavbar.classList.add('uk-nav-default', 'uk-nav-parent-icon');
                mobileNavbar.setAttribute('data-uk-nav', '');

                // Add uk-parent class to li that have children
                Array.from(mobileNavbar.children).forEach(function (e) {
                    if (e.children.length == 2) {
                        e.classList.add('uk-parent');
                        e.querySelectorAll('.fa-chevron-down')[0].remove();
                    }
                });

                // Remove parent wrapper function
                const unwrap = node => node.replaceWith(...node.childNodes);

                // Remove the parent wrapper if have dropdown
                mobileNavbarChild.forEach(function (e) {
                    e.classList.remove('uk-nav', 'uk-navbar-dropdown-nav');
                    e.classList.add('uk-nav-sub');
                    unwrap(e.parentElement);

                    if (e.querySelector('a.uk-disabled') !== null) {
                        unwrap(e.parentElement.parentElement);
                        unwrap(e.parentElement);
                        e.querySelector('a.uk-disabled').parentElement.parentElement.remove();
                    }
                });
            },
            createMobileBtn: function () {
                const mobileBtn = document.createElement('div');
                const modalFull = document.createElement('div');

                // Mobile button element
                mobileBtn.classList.add('uk-navbar-item', 'in-mobile-nav', 'uk-hidden@m');
                mobileBtn.innerHTML = '<a class="uk-button" href="#modal-full" data-uk-toggle><i class="fas fa-bars"></i></a>';

                // Modal navigation element
                modalFull.id = 'modal-full';
                modalFull.classList.add('uk-modal-full');
                modalFull.setAttribute('data-uk-modal', '');
                modalFull.innerHTML = `
                <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport>
                    <a class="uk-modal-close-full uk-button"><i class="fas fa-times"></i></a>
                    <div class="uk-width-large uk-padding-large">
                        ${mobileNavbar.outerHTML}
                        ${mobileNavMethods.createAddonBtn()}
                    </div>
                </div>`

                // Clean previous mobile button if exist and insert after that
                navbar.parentElement.removeChild(navbar.parentElement.lastChild);
                navbar.parentElement.appendChild(mobileBtn).appendChild(modalFull);
            },
            createAddonBtn: function () {
                let signinBtn = '';
                if (settings.addonButtons && optionalNav !== null && optionalNav.children.length > 0) {
                    settings.buttons.forEach(function (e) {
                        signinBtn += `<a href="${mobileNavMethods.addonBtnUrl(e)}" class="uk-button uk-button-${e.type} uk-border-rounded uk-align-center" style="margin-bottom : -12px">${mobileNavMethods.addonBtnName(e)}${mobileNavMethods.addonBtnIcon(e)}</a>`;
                    })
                }
                return signinBtn;
            },
            addonBtnName: function (data) {
                let nameValue;
                data.name.length > 0 ?
                    nameValue = data.name :
                    nameValue = optionalNav.querySelector('a').innerText;
                return nameValue;
            },
            addonBtnUrl: function (data) {
                let urlValue;
                data.url.length > 0 ?
                    urlValue = data.url :
                    urlValue = optionalNav.querySelector('a').href;
                return urlValue;
            },
            addonBtnIcon: function (data) {
                let iconValue;
                data.icon !== undefined && data.icon.length > 0 ?
                    iconValue = `<i class="fas fa-${data.icon} uk-margin-small-left"></i>` :
                    iconValue = '';
                return iconValue;
            },
            init: function () {
                mobileNavMethods.createMobileNav();
                mobileNavMethods.createMobileBtn();
            }
        }
        mobileNavMethods.init();
    }
};
mobileNav();
