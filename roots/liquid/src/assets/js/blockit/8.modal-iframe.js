/* modal-iframe.js | https://www.indonez.com | Indonez | MIT License */
function modalIframe(options) {
    'use strict';

    // Default settings
    const defaults = {
        selector: 'in-iframe',         // element selector that used to find iframe video
        videos: [
            {
                id: '',                // video id (should not be the same as the next video)
                url: ''                // video embed url
            }
        ]
    };

    // Merge user options into defaults
    const settings = Object.assign({}, defaults, options);

    // Check if element exist
    if (document.querySelector(`.${settings.selector}`) !== null) {
        // Required variables
        const mediaquery = window.matchMedia('(max-width: 960px)');
        const iframeElement = document.querySelectorAll(`.${settings.selector}`);
        const videos = settings.videos;

        // Set of functions
        const modalIframeMethods = {
            createIframeVideo: function () {
                const width = window.screen.width / 100 * modalIframeMethods.getAspectRatio();
                const height = width / (16/9);

                iframeElement.forEach(function(e, i) {
                    e.parentElement.setAttribute('id', videos[i].id)
                    e.parentElement.previousElementSibling.children[0].setAttribute('href', `#${videos[i].id}`)

                    const observer = new IntersectionObserver(function(entries) {
                        if (entries[0].isIntersecting && e.children.length === 1) {
                            const iframeTag = document.createElement('iframe');

                            iframeTag.setAttribute('src', videos[i].url);
                            iframeTag.setAttribute('width', width);
                            iframeTag.setAttribute('height', height);
                            iframeTag.setAttribute('data-uk-video', 'automute: true');

                            e.appendChild(iframeTag);
                        }
                    }, { threshold: [0] });
                    observer.observe(e);
                })
            },
            getAspectRatio: function () {
                let adaptiveWidth;
                mediaquery.matches
                    ? adaptiveWidth = 85
                    : adaptiveWidth = 45
                return adaptiveWidth;
            },
            init: function () {
                modalIframeMethods.createIframeVideo();
                modalIframeMethods.getAspectRatio();
            }
        }
        modalIframeMethods.init();
    }
};