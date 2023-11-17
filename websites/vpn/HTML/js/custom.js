/**
	* Version: 1.0
	* Author: Farhadur Rahim (webmechanicx)
	* Author URI: https://themeforest.net/user/webmechanicx

	Custom JS

	01. Authfy Panel Activation
	02. Password Mask Toggler
    03. Tab Activation Handler only for Login-05.html
	04. Preloader

**/

(function ($) {
    'use strict';

	var parentDom = $('html, body');
	var pwdMask = $('.pwdMask > .form-control');
    var pwdToggler = $(".pwd-toggle");

	// 01. Authfy Panel Activation

    $('.lnk-toggler').on('click', function(e){
        e.preventDefault();
        var panel = $(this).data("panel");
        $('.authfy-panel.active').removeClass('active');
        $(panel).addClass("active");
    });

    // 02. Password Mask Toggler

    $(pwdToggler).on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("fa-eye-slash fa-eye");
        if($(this).hasClass("fa-eye")) {
            $(pwdMask).attr("type", "text");
        }
        else {
            $(pwdMask).attr("type", "password");
        }
    });

    // 03. Tab Activation Handler only for Login-05.html

    $('#forget-lnk').on("click", function(){
        $('.authfy-login .nav-tabs').find("li").removeClass("active");
    });

	// 04. Preloader

	$(window).on('load', function () {
		$(".square-block").fadeOut();
		$('#preload-block').fadeOut('slow', function () {
			$(this).remove();
		});
	});

})(jQuery);
