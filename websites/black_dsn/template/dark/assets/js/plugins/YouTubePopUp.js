/*
 Name: YouTubePopUp
 Description: jQuery plugin to display YouTube or Vimeo video in PopUp, responsive and retina, easy to use.
 Version: 1.0.1
 Plugin URL: http://wp-time.com/youtube-popup-jquery-plugin/
 Written By: Qassim Hassan
 Twitter: @QQQHZ
 Websites: wp-time.com | qass.im | wp-plugins.in
 Dual licensed under the MIT and GPL licenses:
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html
 Copyright (c) 2016 - Qassim Hassan
 */

(function ($) {
    jQuery.fn.YouTubePopUp = function (options) {

        let YouTubePopUpOptions = $.extend({
            autoplay: 1
        }, options);
        $(this).off('click');
        $(this).on('click', function (e) {
            e.preventDefault();

            let youtubeLink = $(this).attr("href");
            let split_c, split_n, videoEmbedLink;
            if (youtubeLink.match(/(youtube.com)/)) {
                split_c = "v=";
                split_n = 1;
            }

            if (youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(vimeo.com\/)+[0-9]/)) {
                split_c = "/";
                split_n = 3;
            }

            if (youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/)) {
                split_c = "/";
                split_n = 5;
            }

            let getYouTubeVideoID = youtubeLink.split(split_c)[split_n];

            let cleanVideoID = getYouTubeVideoID.replace(/(&)+(.*)/, "");

            if (youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(youtube.com)/)) {
                videoEmbedLink = "https://www.youtube.com/embed/" + cleanVideoID + "?autoplay=" + YouTubePopUpOptions.autoplay + "";
            }

            if (youtubeLink.match(/(vimeo.com\/)+[0-9]/) || youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/)) {
                videoEmbedLink = "https://player.vimeo.com/video/" + cleanVideoID + "?autoplay=" + YouTubePopUpOptions.autoplay + "";
            }

            let popupWrap = $('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"></div>');
            let popupContent = $('<div class="YouTubePopUp-Content"></div>');
            popupContent.append('<span class="YouTubePopUp-Close"></span>');
            popupContent.append('<iframe src="' + videoEmbedLink + '" allowfullscreen></iframe>');
            popupWrap.append(popupContent);
            TweenLite.set(popupWrap, {autoAlpha: 0, animationName: 'none'});
            TweenLite.set(popupContent, {autoAlpha: 0, y: '30%'});


            $("body").append(popupWrap);
            let tl = new TimelineLite({
                onReverseComplete: function () {
                    $('.YouTubePopUp-Wrap').remove();
                    tl = null;
                }
            })
                .to('.YouTubePopUp-Wrap', 0.5, {autoAlpha: 1})
                .to('.YouTubePopUp-Content', 1, {autoAlpha: 1, y: '0%', ease: Back.easeOut.config(4)});


            $(".YouTubePopUp-Wrap, .YouTubePopUp-Close").on('click', function () {
                tl.reverse();
            });

            popupContent = popupWrap = cleanVideoID = getYouTubeVideoID = videoEmbedLink = split_n = split_c = youtubeLink = null;


        });


    };

})(jQuery);

