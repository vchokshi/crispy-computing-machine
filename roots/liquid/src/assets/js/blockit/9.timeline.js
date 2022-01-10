/* timeline.js | https://www.indonez.com | Indonez | MIT License */
(function () {
    if (document.querySelector('.in-timeline-2') !== null) {
        const timelineArray = Array.from(document.querySelector('.in-timeline-2').children)
        const oddElement = timelineArray.filter(function (e, i) {
            return i % 2 == 1;
        });

        oddElement.forEach(function (e) {
            e.children[0].classList.add('right')
        })
    }
})();