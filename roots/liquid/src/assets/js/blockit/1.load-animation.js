/* load-animation.js | https://www.indonez.com | Indonez | MIT License */
window.addEventListener('load', function () {
    // Default settings
    const defaults = {
        loadAnimation: true,         // set it "false" if you won't use animation on web load
        loadClass: 'loaded'
    };

    if (defaults.loadAnimation) {
        document.querySelector('body').classList.add(defaults.loadClass)
    }
});