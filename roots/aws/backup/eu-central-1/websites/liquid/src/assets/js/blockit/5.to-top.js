/* to-top.js | https://www.indonez.com | Indonez | MIT License */
(function () {
    if (document.querySelector('.in-totop') !== null) {
        const inTotop = document.querySelector('.in-totop');
        window.addEventListener('scroll', function () {
            setTimeout(function () {
                window.scrollY > 300 ? (inTotop.style.opacity = 1, inTotop.classList.add("uk-animation-slide-top")) : (inTotop.style.opacity -= .1, inTotop.classList.remove("uk-animation-slide-top"))
            }, 400)
        });
    }
})();
