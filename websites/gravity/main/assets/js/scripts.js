/******************************************************************
	
	
	@ Item          Gravity // Coming Soon - Under Construction
	@ Version       3.6
	@ Author		Avanzare
	@ Website		http://themeforest.net/user/avanzare 
	

 ******************************************************************/
 
 
 /******************************************************************


	------------------------
	-- TABLE OF CONTENTS --
	------------------------
	
	--  1. Base
	--  2. Overlay
	--  3. Ajax - Subscribe
	--  4. Ajax - Contact
	--  5. Google Analytics
 
 
 ******************************************************************/




/** 1. Base
*******************************************************************/

var blockProcess = true;
prevent_class_removal = true;
$(".hero .container-mid").addClass("block-overflow");

jQuery(window).on('load', function() {
	"use strict";	
	
	
	
	setTimeout(function() {		
		$("#page-loader").addClass("hide-this");
		$('#cycle').cycle("goto","0");

		setTimeout(function() {	
			$(".hero .background-content.page-enter-animated").addClass("show");

			setTimeout(function() {	
				$(".hero .front-content.page-enter-animated").addClass("show");
				
				setTimeout(function() {	
					blockProcess = false;
					$(".grcs_bullet_nav").addClass("init");

					setTimeout(function() {	
						if(prevent_class_removal == true) { $(".hero .container-mid").removeClass("block-overflow"); }
						
					}, 1000);
					
				}, 1000);

			}, 600);

			$(".social-icons li a").tooltip({
				container: 'body',
				delay: { "show": 150, "hide": 0 }
			});

		}, 200);
		
	}, 600);
	
	
	
});

// Mobile Detect Variable
var isMobile = {
    Android:function(){return navigator.userAgent.match(/Android/i);},
    BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i);},
    iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera:function(){return navigator.userAgent.match(/Opera Mini/i);},
    Windows:function(){return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

// Add Class To Body When Mobile
if(isMobile.any()) {
    jQuery("body").addClass("is-mobile");
}




/**	2. OVERLAY
*****************************************************/

$(document).ready(function(){
	"use strict";	
	
	
	
	function overlaySystem(sectionContainerPT,sectionsPT,frontpagePT,frontpageContainerPT) {
		
		// VARIABLES
		var sectionContainer = $(sectionContainerPT),
			sections = $(sectionContainerPT + ">" + sectionsPT),
			clickedSectionIndex = 0,
            bulletNavEvent = false,
			upBtn = $(".go-up"),
			downBtn = $(".go-down"),
			
			frontpage = $(frontpagePT),
			frontpageContainer = $(frontpageContainerPT),
			
			amountOfSections = sections.length,
			currentSection = 0,
			currentSectionSelector;


		function mobileSections(){
            
			if(option_overlay_merge_sections_on_mobile == "on"){
				jQuery("body").addClass("merge-true");
				amountOfSections = 1;
				$(".social_icons li .go-down").parent().remove();
			}
				
		} if(isMobile.any()) { mobileSections(); };
		
		
		function hideFrontPage() {

			prevent_class_removal = false;

			$(".hero .container-mid").addClass("block-overflow");
			frontpageContainer.children().css("transition","all 1000ms 500ms");
			frontpage.addClass("overlay-active");
			frontpage.removeClass("show");
			frontpage.find("div.controls").removeClass("show");
			
			$('#cycle').cycle('pause');
			
		}
		
		function showFrontPage() {

			prevent_class_removal = true;
			
			frontpageContainer.children().css("transition","all 800ms 200ms");
			frontpage.removeClass("overlay-active");
			frontpage.addClass("show");

			if (option_hero_background_mode === "youtube") {

				setTimeout(function() {
					frontpage.find("div.controls").addClass("show");	
				}, 200);	

			}

			setTimeout(function() {
				if(prevent_class_removal == true) { $(".hero .container-mid").removeClass("block-overflow"); }
            }, 1300);

			setTimeout(function() {
				$('#cycle').cycle('resume');
			}, 1400);
			
		}
		
		function nextOverlay() {

            if ( currentSection == amountOfSections || blockProcess === true ) {
                return false;
			}
			
			blockProcess = true;
			sectionContainer.addClass("movement-in-progress");

            if( currentSection === 0 ){
                
                hideFrontPage();
                
                setTimeout(function() {
                    sectionContainer.addClass("open");
                }, 200);	

            }
            
            
            if(bulletNavEvent == false) {
                
                currentSection = currentSection + 1;
                
            } else {
                
                currentSection = clickedSectionIndex; 
                bulletNavEvent = false;
                
            }
            
            sections.removeClass("active");
            currentSectionSelector = sections.eq((currentSection - 1));
            $(".social-icons li a").tooltip('hide');
            
            setTimeout(function() {
                
                currentSectionSelector.addClass("active");
                updateBulletNav();

                setTimeout(function() {

                    upBtn.addClass("active");

                    setTimeout(function() {
						blockProcess = false;
						sectionContainer.removeClass("movement-in-progress");
                    }, 800);

                }, 400);

            }, 1000);

        }

        function prevOverlay() {

            if ( currentSection === 0 || blockProcess === true ) {
                return false;
            }
            
			blockProcess = true;
			sectionContainer.addClass("movement-in-progress");
            
            if(bulletNavEvent == false) {
                currentSection = currentSection - 1;
            } else {
                currentSection = clickedSectionIndex; 
                bulletNavEvent = false;
            }
            
            sections.removeClass("active");
            currentSectionSelector = sections.eq((currentSection - 1));

            setTimeout(function() {

                currentSectionSelector.addClass("active");
                updateBulletNav();

                setTimeout(function() {
					blockProcess = false;
					sectionContainer.removeClass("movement-in-progress");
                }, 800);

            }, 800);

            if( currentSection === 0 ){

                upBtn.removeClass("active");

                setTimeout(function() {
                    
                    showFrontPage();
                    sectionContainer.removeClass("open");
                    
                }, 800);

            }

        }
		
		function updateBulletNav() {
            if( option_overlay_bullet_navigation === "on" && !$(".hero").hasClass("error-404") ) {
                $(".grcs_bullet_nav .nav_dots").removeClass("active");
                $(".grcs_bullet_nav .nav_dots").eq(currentSection).addClass("active");
            }
        }
        
        function clickBulletNav() {
            
            $('.grcs_bullet_nav .nav_dots').click(function(){
                
                clickedSectionIndex = $('.grcs_bullet_nav .nav_dots').index(this);

                if( clickedSectionIndex != currentSection ) {
                    if( clickedSectionIndex < currentSection  ) {
                        
                        bulletNavEvent = true;
                        prevOverlay();
                        
                    } else {
                        
                        bulletNavEvent = true;
                        nextOverlay();
                        
                    }
                }
            
            });

        }
        
        function createBulletNav() {
            
            $("body").append('<div class="grcs_bullet_nav"></div>');
            
            for (var i = 0; i < (amountOfSections + 1); i++) { 
                $(".grcs_bullet_nav").append('<div class="nav_dots"></div>');
            }
            
            updateBulletNav();
            clickBulletNav();
            
        } 
        
        if( option_overlay_bullet_navigation === "on" && !$(".hero").hasClass("error-404") ) {
            createBulletNav();
        }
		
			
			
		// EVENT - ON DOWN BUTTON CLICK
		downBtn.click(function() {
			nextOverlay();
		});

		// EVENT - ON UP BUTTON CLICK
		upBtn.click(function() {
			prevOverlay();
		});

		// EVENT - ON DOWN SCROLL GLOBAL	
		$('html').on('DOMMouseScroll mousewheel', function(e){
			
			var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail*-1;
			
			if(theEvent / 120 < 0) {
				nextOverlay();
			}
			
		});

		// EVENT - ON UP SCROLL GLOBAL	
		$('html').on('DOMMouseScroll mousewheel', function(e){
			
			var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail*-1;
			
			if(theEvent / 120 > 0) {
				prevOverlay();
			}
			
		});

		// EVENT - KEYDOWN	
		$(document).keydown(function(e) {
			
			switch(e.which) {
					
				case 37: // left
				break;
				case 38: // up
					prevOverlay();
				break;
				case 39: // right
				break;
				case 40: // down
					nextOverlay();
				break;
				default: return; // exit this handler for other keys
			}
			
			e.preventDefault();
			
		});
			
			
		
		// SKIN CHANGER ( Controlled via Config.js )
		if (option_overlay_skin == "white") {
			$("body").addClass("white");
		}

		// SWITCH ANIMATION OVERLAY ( Controlled via Config.js )
		switch(option_overlay_animation){

			case 'fade':
				sectionContainer.addClass("fade-In");
			break;
			case 'slide':
				sectionContainer.addClass("slide-from-bottom");
			break;
			default:
			   sectionContainer.addClass("fade-In");
			break;

		}

		// SWITCH ANIMATION OVERLAY CONTENT ( Controlled via Config.js )
		switch(option_overlay_content_animation){

			case 'fade':
				sections.addClass("fade-In");
			break;
			case 'slide':
				sections.addClass("slide-from-bottom");
			break;
			default:
				sections.addClass("slide-from-bottom");
			break;

		}
		
	} 
                  
    overlaySystem("#overlay","section.overlay","#hero .front-content","#hero .front-content .container-mid");



	
/**	3. AJAX - SUBSCRIBE
 *****************************************************/
	
	$('.subscribe-form').submit(function() {
		
		  var postdata = $('.subscribe-form').serialize();
		  
		  $.ajax({
			  
			  type: 'POST',
			  url: 'assets/php/subscribe.php',
			  data: postdata,
			  dataType: 'json',
			  success: function(json) {
                  
                  $('.subscribe-form').removeClass("error").removeClass("error-final");
				  
				  if(json.valid === 0) {
					  
					  $('.subscribe-form').addClass("error");
					  $('.subscribe-form input').attr("placeholder", json.message);
					  $('.subscribe-form input').val('');
                      
                      setTimeout(function(){
                          $('.subscribe-form').addClass("error-final");
                      }, 1500);
					  
				  } else {
					  
					  $('.subscribe-form input,.subscribe-form button').val('').prop('disabled', true);
					  $('.subscribe-form input').attr("placeholder",json.message);
					  $('.subscribe-form').addClass("success");
				  }
			  }
			  
			});
			
			return false;
			
		});


	

/**	4. AJAX - CONTACT
 *****************************************************/	
	
		$("#contact-form").submit(function(e) {
			 
			e.preventDefault();
			var postdata = $(this).serialize();
			
			$.ajax({
				
				type: "POST",
				url: "assets/php/contact.php",
				data: postdata,
				dataType: "json",
				success: function(json) {
					 
					$("#contact-form.error input, #contact-form.error textarea").removeClass("active");
					
					setTimeout(function(){
						
						if (json.nameMessage !== "") {
							
							$("#contact-form-name").addClass("active").attr("placeholder",json.nameMessage);
						    $("#contact-form").addClass("error");
							
						}
						
						if (json.emailMessage !== "") {
							
						   $("#contact-form-email").addClass("active").val("").attr("placeholder",json.emailMessage);
						   $("#contact-form").addClass("error");
						   
						}
						
						if (json.messageMessage !== "") {
							
							$("#contact-form-message").addClass("active").attr("placeholder",json.messageMessage);
						    $("#contact-form").addClass("error");
							
						}
						
					}, 50);
						
					if (json.nameMessage === "" && json.emailMessage === "" && json.messageMessage === "") {
						
						$('#contact-form').removeClass("error").addClass("success");
						$('#contact-form textarea, #contact-form input').attr("placeholder","");
						$('#contact-form textarea').attr("placeholder",json.succesMessage);
						$('#contact-form input, #contact-form button, #contact-form textarea').val('').prop('disabled', true);
						
					}
					
				}
				
			});
			
		});

	
	
});
	



/**	5. GOOGLE ANALYTICS
 *****************************************************/	
	
if ( option_analytics_tracking == "on" ) {

	var _gaq = _gaq || [];

	function loadtracking() {
        
			window._gaq.push(['_setAccount', option_analytics_tracking_id]);
			window._gaq.push(['_trackPageview']);
			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
        
	}

	loadtracking();

}



