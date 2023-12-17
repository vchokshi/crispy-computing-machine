"use strict";

const dsnParam = {
  map: {
    marker_icon: "assets/img/map-marker.png",
    api: "AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
  },
  cursor: {
    run: true,
    speed: 0.35,
    speedInner: 0.15
  },
  scrollbar: {
    duration: 1.5,
    smooth: false,
    smoothTouch: false,
    mouseMultiplier: 1
  },
  name: "BLACKDSN"
};

(function ($) {
  "use strict";

  preloader();
  effectBackForward();

  async function reloadAjax($off, $el = $(document)) {
    if (!$off) {
      window.$effectScroll = await effectScroller();
      window.$animate = await dsnGrid.effectAnimate();
    }

    await $('.hidden[data-dsn="bg_section"]').each(function () {
      $(this).next().append($(this));
      $(this).css({
        zIndex: -1
      });
      $(this).removeClass('hidden');
    });
    imgPosition();
    gridGaps();
    await $effectScroll.start();
    await $animate.allInt();
    await loadLazyImage($el, ['bg', 'src']);
    await sliderPortfolio();
    await fancyBox();
    await justifiedGallery($el);
    await compareTowImage();
    await serviceSection($el);
    await scrollBarWidth();
    await menuInit();
    await dropHash();
    await initMap($el);
    await accordion($el);
    await projectSlider().run();
    await Headline($el);
    await tabs($el);
    await contactValidator();
    if (!$off) await Isotope($el);else setTimeout(Isotope, 500);
    if (!$body.hasClass('elementor-editor-active')) dsnAjax() && (await dsnAjax().start());
    await list_project($el);
    await inputNumber($el);
    await mouseCirMove($off);
  }

  function imgPosition() {
    $("[data-dsn-position]").each(function () {
      if (this.nodeName === "IMG") $(this).css("object-position", dsnGrid.getData(this, "position", "center"));else $(this).css("background-position", dsnGrid.getData(this, "position", "center"));
    });
  }

  function gridGaps() {
    $(".d-grid[data-dsn-gap]").each(function () {
      const gap = dsnGrid.getData(this, "gap", "30px 30px");
      const split = gap.split(" ");
      this.style.gridGap = gap;
      this.style.setProperty("--grid-gap", gap);

      if (this.classList.contains('dsn-isotope')) {
        if (split.length > 1) {
          this.style.setProperty("--grid-gap-row", split[0]);
          this.style.setProperty("--grid-gap-col", split[1]);
          this.style.setProperty("--grid-gap", split[1]);
        } else if (split.length) {
          this.style.setProperty("--grid-gap-row", split[0]);
          this.style.setProperty("--grid-gap-col", split[0]);
          this.style.setProperty("--grid-gap", split[0]);
        }
      }
    });
    $("[data-dsn-iconsize]").each(function () {
      this.style.setProperty("--dsn-icon-size", dsnGrid.getData(this, "iconsize"));
    });
  }
  /**
   *
   * servicestab
   *
   */


  function tabs($el) {
    $el.find(".dsn-tabs").each(function () {
      const $this = $(this);
      $this.on("click", ".link-click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $this.find("#" + $(this).attr("id") + "-content").fadeIn(1000).siblings().hide();
      });
      dsnGrid.killAjax(() => {
        $this.off("click", ".link-click");
      });
    });
  }

  function Headline($el) {
    if ($.isFunction($.fn.animatedHeadline)) {
      $el.find('.ah-headline:not(.dsn-active-line)').animatedHeadline();
      $el.find('.ah-headline').addClass('dsn-active-line');
    }
  }

  function accordion($el = $(document)) {
    $el.find(".dsn-accordion").each(function () {
      const $this = $(this),
            acc_q = $this.find(".accordion__question");
      acc_q.on("click", function () {
        const content = $(this).next();
        $this.find(".accordion__answer").not(content).slideUp(400);
        acc_q.not(this).removeClass("expanded");
        $(this).toggleClass("expanded");
        $this.find('.accordion__item').removeClass("active");
        if ($(this).hasClass('expanded')) $(this).parents('.accordion__item').addClass("active");
        content.slideToggle(400);
      });
      dsnGrid.killAjax(function () {
        acc_q.off('click');
      });
    });
  }
  /**
   *
   * @param $el
   */


  function initMap($el = $(document)) {
    const map_id = $el.find(".map-custom"),
          mapScriptId = document.getElementById("map_api");
    if (map_id.length <= 0) return; // Styles a map in night mode.

    if (mapScriptId === null) {
      const GOOGLE_MAP_KEY = dsnParam.map.api,
            script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "map_api";
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAP_KEY;
      document.body.appendChild(script);
    }

    setTimeout(function () {
      try {
        map_id.each(function () {
          let map_att = $(this),
              lat = dsnGrid.getData(this, "lat"),
              leg = dsnGrid.getData(this, "len"),
              zoom = dsnGrid.getData(this, "zoom");
          const letLeng = new google.maps.LatLng(lat, leg),
                map = new google.maps.Map(map_att.get(0), {
            center: {
              lat: lat,
              lng: leg
            },
            mapTypeControl: false,
            scrollwheel: false,
            draggable: true,
            streetViewControl: false,
            navigationControl: false,
            zoom: zoom,
            styles: [{
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{
                "color": "#e9e9e9"
              }, {
                "lightness": 17
              }]
            }, {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [{
                "color": "#f5f5f5"
              }, {
                "lightness": 20
              }]
            }, {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [{
                "color": "#ffffff"
              }, {
                "lightness": 17
              }]
            }, {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [{
                "color": "#ffffff"
              }, {
                "lightness": 29
              }, {
                "weight": 0.2
              }]
            }, {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [{
                "color": "#ffffff"
              }, {
                "lightness": 18
              }]
            }, {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [{
                "color": "#ffffff"
              }, {
                "lightness": 16
              }]
            }, {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{
                "color": "#f5f5f5"
              }, {
                "lightness": 21
              }]
            }, {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [{
                "color": "#dedede"
              }, {
                "lightness": 21
              }]
            }, {
              "elementType": "labels.text.stroke",
              "stylers": [{
                "visibility": "on"
              }, {
                "color": "#ffffff"
              }, {
                "lightness": 16
              }]
            }, {
              "elementType": "labels.text.fill",
              "stylers": [{
                "saturation": 36
              }, {
                "color": "#333333"
              }, {
                "lightness": 40
              }]
            }, {
              "elementType": "labels.icon",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [{
                "color": "#f2f2f2"
              }, {
                "lightness": 19
              }]
            }, {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [{
                "color": "#fefefe"
              }, {
                "lightness": 20
              }]
            }, {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [{
                "color": "#fefefe"
              }, {
                "lightness": 17
              }, {
                "weight": 1.2
              }]
            }]
          });
          google.maps.event.addDomListener(window, "resize", function () {
            let center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
          });
          new google.maps.Marker({
            position: letLeng,
            animation: google.maps.Animation.BOUNCE,
            icon: dsnParam.map.marker_icon,
            title: "ASL",
            map: map
          });
        });
      } catch (e) {
        console.log(e);
      }
    }, 1000);
  }
  /**
   *
   */


  function preloader() {
    const preloader = $("#dsn_preloader");

    if (!preloader.length) {
      window.addEventListener('DOMContentLoaded', function () {
        reloadAjax().catch($err => {
          console.log($err);
        });
      });
      return false;
    }

    $body.css('overflow', 'hidden');
    const progress_number = preloader.find(".loading-count"),
          preloader_progress = preloader.find('.dsn-progress-path'),
          present = {
      value: 0
    };

    const updateVal = (val, isSetVal) => {
      progress_number.text(val.toFixed(0));
      preloader_progress.css("stroke-dashoffset", 300 - val * 3);
      if (isSetVal) present.value = val;
    };

    const timer = dsnGrid.pageLoad({
      startTime: 0,
      endTime: 100,
      duration: 1000,

      onProgress(val) {
        updateVal(val, true);
      }

    });
    window.addEventListener('DOMContentLoaded', function () {
      clearInterval(timer);
      const tl = gsap.timeline();
      tl.to(present, 1, {
        value: 100,

        onUpdate() {
          updateVal(present.value, true);
        }

      }).call(function () {
        reloadAjax().catch($err => {
          console.log($err);
        });
      }).to(preloader.find('> *:not(.bg-load)'), {
        autoAlpha: 0
      }).to(preloader.find('.bg-load'), {
        yPercent: -100,
        ease: Expo.easeInOut,
        duration: 1.5
      }).to(preloader.find('.bg-load .separator__path'), {
        attr: {
          d: dsnGrid.getData(preloader.find('.bg-load .separator__path').get(0), 'to')
        },
        ease: "Power4.easeInOut",
        duration: 1.5
      }, '-=1.5').fromTo("#main_root", 1, {
        y: 400
      }, {
        y: 0,
        clearProps: true,
        ease: Expo.easeInOut
      }, "-=1.2").call(function () {
        preloader.remove();
        ScrollTrigger.update();
        $body.css('overflow', '');
        ScrollTrigger.getAll().forEach($item => {
          $item.refresh();
        });
      });
    });
  }
  /**
   *  -   event will be triggered by doing browser action such as
   *  a click on the back or forward button
   */


  function effectBackForward() {
    $wind.on("popstate", function (e) {
      console.log("sad");

      if (window.location.hash.length) {
        $wind.scrollTop(0);
        dsnGrid.scrollTop(window.location.hash, 1, -100);
        return;
      }

      if (document.location.href.indexOf("#") > -1) {
        return;
      }

      setTimeout(function () {
        dsnAjax().backAnimate(e);
      }, 50);
    });
  }

  function dsnAjax() {
    return dsnGrid.dsnAjax({
      className: 'dsn-ajax-effect',
      beforeSend: () => $body.css('overflow', 'hidden'),

      async success(data) {
        const animate = {
          value: 0
        };
        return gsap.to(animate, 0.2, {
          value: 100,
          delay: 1,

          onStart() {
            reloadAjax(true).catch($err => {
              console.error($err);
            });
          }

        });
      },

      onComplete() {
        setTimeout(() => {
          $body.css('overflow', '');
        }, 500);
        ScrollTrigger.refresh();
      }

    });
  }

  function menuInit() {
    var _targets$toggle4;

    const menu = document.getElementById("site_menu_header");
    if (!menu) return;
    const targets = {
      toggle: menu.querySelector("#navbar_toggle"),
      backgroundMain: menu.querySelector(".bg-load:not(.dsn-svg-transition)"),
      svg: menu.querySelector("svg.bg-load path"),
      subMenu: $(menu).find("li.nav-item.has-sub-menu > a"),
      back: $(menu).find("li.dsn-back"),
      hamburger: menu.classList.contains('dsn-hamburger'),
      scrDown: 0
    };
    const reserved = dsnGrid.useState(false, (newValue, oldValue) => oldValue && removeOpenMenu());
    const typeNav = dsnGrid.useState(targets.hamburger, newValue => newValue ? menu.classList.add("dsn-hamburger") : menu.classList.remove("dsn-hamburger"));

    const removeOpenMenu = () => menu.querySelectorAll('ul').forEach(item => item.classList.remove('open'));

    const TransEnd = () => {
      var _menu$querySelector;

      return reserved.getValue() && ((_menu$querySelector = menu.querySelector('.primary-nav')) === null || _menu$querySelector === void 0 ? void 0 : _menu$querySelector.classList.add('open'));
    };

    const onCompleteAnimate = e => {
      e.classList.toggle('open');
      menu.classList.toggle('dsn-open');
      $body.toggleClass('over-hidden');
      reserved.setValue(!reserved.getValue());
    };

    const handleClick = e => {
      e.preventDefault();
      e.stopPropagation();
      e.currentTarget.closest('.open').classList.remove('open');
    };

    const handleClickSubMenu = function (e) {
      var _e$currentTarget, _e$currentTarget$pare, _e$currentTarget$pare2;

      if (!typeNav.getValue()) return;
      handleClick(e);
      (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : (_e$currentTarget$pare = _e$currentTarget.parentElement) === null || _e$currentTarget$pare === void 0 ? void 0 : (_e$currentTarget$pare2 = _e$currentTarget$pare.querySelector('ul')) === null || _e$currentTarget$pare2 === void 0 ? void 0 : _e$currentTarget$pare2.classList.add("open");
    };

    const handleClickBackMenu = e => {
      handleClick(e);
      e.currentTarget.closest('ul').closest('li').closest('ul').classList.add("open");
    };

    const toggleClick = function () {
      if (!reserved.getValue()) {
        dsnGrid.svgAnimate.up(targets.svg, TransEnd).to("#dsn-scrollbar", {
          y: -200,
          duration: 1,
          ease: 'power4.in'
        }, "top").set(targets.backgroundMain, {
          autoAlpha: 1
        }, "center");
        onCompleteAnimate(this);
      } else dsnGrid.svgAnimate.down(targets.svg, () => onCompleteAnimate(this)).to("#dsn-scrollbar", {
        y: 0,
        clearProps: "y",
        duration: 1,
        ease: 'power4'
      }, "-=1").set(targets.backgroundMain, {
        autoAlpha: 0
      }, "center");
    };

    const resizeNav = function () {
      if (window.innerWidth > 991 && typeNav.getValue()) {
        typeNav.setValue(false);
      } else if (window.innerWidth <= 991 && !typeNav.getValue()) {
        typeNav.setValue(true);
      } else if (dsnGrid.isMobile()) {
        typeNav.setValue(true);
      }
    };

    if (!targets.hamburger) {
      window.addEventListener('resize', resizeNav);
      resizeNav();
    }

    new Promise(resolve => setTimeout(() => resolve(), 300)).then(() => {
      var _targets$toggle;

      return dsnGrid.spltting.Char((_targets$toggle = targets.toggle) === null || _targets$toggle === void 0 ? void 0 : _targets$toggle.querySelector('.text-menu'));
    }).then(() => {
      var _targets$toggle2;

      return dsnGrid.spltting.Char((_targets$toggle2 = targets.toggle) === null || _targets$toggle2 === void 0 ? void 0 : _targets$toggle2.querySelector('.text-open'));
    }).then(() => {
      var _targets$toggle3;

      return dsnGrid.spltting.Char((_targets$toggle3 = targets.toggle) === null || _targets$toggle3 === void 0 ? void 0 : _targets$toggle3.querySelector('.text-close'));
    }).then(() => {
      targets.back.find(".text-toggle-back").each(function ($index) {
        setTimeout(() => dsnGrid.spltting.Char(this), 10 * $index);
      });
    }).then(() => {
      menu.querySelectorAll('ul').forEach((item, index) => {
        item.style.setProperty('--dsn-li-name', "dsn" + index);
        Object.keys(item.children).forEach($key => {
          item.children[$key].style.setProperty('--dsn-li-index', $key);
        });
      });
    }).then(() => {
      gsap.set(menu, {
        yPercent: -100,
        autoAlpha: 0
      });
      menu.classList.remove('d-none');
      gsap.to(menu, {
        yPercent: 0,
        autoAlpha: 0,
        delay: 1,
        clearProps: true
      });
    });
    $effectScroll.getListener(function (e, x, y) {
      if (y > 170) {
        if (targets.scrDown < y) {
          menu.classList.add("nav-bg", "hide-nav");
        } else {
          menu.classList.remove("hide-nav");
        }
      } else {
        menu.classList.remove("nav-bg", "hide-nav");
      }

      targets.scrDown = y;
    });
    (_targets$toggle4 = targets.toggle) === null || _targets$toggle4 === void 0 ? void 0 : _targets$toggle4.addEventListener('click', toggleClick);
    targets.subMenu.on('click', handleClickSubMenu);
    targets.back.on('click', handleClickBackMenu);
    dsnGrid.killAjax(function () {
      var _targets$toggle5;

      (_targets$toggle5 = targets.toggle) === null || _targets$toggle5 === void 0 ? void 0 : _targets$toggle5.removeEventListener('click', toggleClick);
      targets.subMenu.off('click', handleClickSubMenu);
      targets.back.off('click', handleClickBackMenu);
    });
  }

  function dropHash() {
    const linked = {
      hash: $("a[href=\"#\"]"),
      scroll: $("[href*=\"#\"]:not([href=\"#\"]):not(.comment-reply-link):not(#cancel-comment-reply-link):not(.wc-tabs .wc-effect-tab)")
    };
    linked.hash.on("click", function (e) {
      e.preventDefault();
    });
    linked.scroll.on("click", function (e) {
      e.preventDefault();
      let href = $($(this).attr("href"));

      if (!href.length) {
        href = null;
        return false;
      }

      const option = $(this).data('dsn-option');
      dsnGrid.scrollTop(href.get(0).offsetTop, option);
      href = null;
    });

    if (window.location.hash.length) {
      $wind.scrollTop(0);
      dsnGrid.scrollTop(window.location.hash);
    }

    dsnGrid.killAjax(function () {
      linked.hash.off("click");
      linked.scroll.off("click");
    });
  }

  function scrollBarWidth() {
    const scrollDiv = document.createElement("div");
    scrollDiv.style.cssText = "width:100px;height:100px;overflow: scroll;position: absolute;top: -9999px;";
    document.body.appendChild(scrollDiv);
    document.body.style.setProperty('--dsn-width-scroll', scrollDiv.offsetWidth - scrollDiv.clientWidth + "px");
    document.body.removeChild(scrollDiv);
  }

  async function Isotope($el = $(document)) {
    const createIso = async function ($item) {
      if (!$item.length) return;
      $item.addClass('use-filter');
      return $item.isotope({
        itemSelector: '.grid-item'
      });
    };

    await $el.find('.root-posts').each(function () {
      const rootPosts = $(this),
            $filtering = rootPosts.find('.dsn-filtering .filtering'),
            $isoItem = rootPosts.hasClass('has-filter') ? rootPosts.find('.dsn-posts') : rootPosts.find('.dsn-isotope'),
            $buttonAjax = rootPosts.find('.button-load-more');
      if (!$filtering.length && !$isoItem.length && !$buttonAjax.length) return;

      const handleClickFilter = function ($iso) {
        if (!$filtering.length) return $iso;

        const handleClick = function () {
          $(this).addClass('active').siblings().removeClass("active");
          $iso.isotope({
            filter: $(this).attr("data-filter")
          });
        };

        $filtering.find('button').on("click", handleClick);
        return $iso;
      };

      const handleAjax = function ($iso) {
        if (!$buttonAjax.length) return;
        const $option = dsnGrid.getOptionAjax($buttonAjax.get(0));
        dsnGrid.loadMore({
          el: $buttonAjax,
          option: $option,
          isotope: $iso,
          success: function (data) {
            $animate.parallaxHover();
          },
          filtering: $filtering,
          posts: rootPosts.find('.dsn-posts')
        });
        return $iso;
      };

      createIso($isoItem).then(handleClickFilter).then(handleAjax).then(function ($iso) {
        dsnGrid.killAjax(function () {
          $filtering.find('button').off('click');
          if ($iso) $iso.isotope('destroy');
          $buttonAjax.off('click');
        });
      });
    });
    await $el.find(".dsn-isotope:not(.use-filter)").each(function () {
      if ($(this).parent('.root-posts').length) return;
      createIso($(this)).then(function ($iso) {
        dsnGrid.killAjax(function () {
          if ($iso) $iso.isotope('destroy');
        });
      });
    });
  }

  function loadLazyImage($el = $(document), $type, $args = {}) {
    if (typeof $type === 'object') {
      $type.forEach($item => {
        loadLazyImage($el, $item);
      });
    } else {
      const dsnData = $el.find("[data-dsn-" + $type + "]");
      dsnData.each(function ($index) {
        const $args = {};
        if (dsnData.length - 1 === $index && $type === "src") $args.onComplete = () => {
          $('.swiper-container.swiper-initialized').each(function () {
            var _swiper$passedParams;

            const swiper = this.swiper;
            if (!(swiper === null || swiper === void 0 ? void 0 : (_swiper$passedParams = swiper.passedParams) === null || _swiper$passedParams === void 0 ? void 0 : _swiper$passedParams.loop)) return;
            swiper.loopDestroy();
            swiper.loopCreate();
            swiper.update();
            swiper.updateSlides();
          });
          $('.dsn-isotope').each(function () {
            $(this).isotope({
              itemSelector: '.grid-item'
            });
          });
        };else $args.onComplete = () => {
          $('.dsn-isotope').each(function () {
            $(this).isotope({
              itemSelector: '.grid-item'
            });
          });
        };
        setTimeout(() => {
          dsnGrid.loadData(this, $type, $args);
        }, 1000);
      });
    }
  }

  function serviceSection($el = $(document)) {
    if (dsnGrid.isMobile()) return;
    ($el.hasClass("service-with-img") ? $el.find('.dsn-service') : $el.find(".service-with-img")).each(function () {
      const serviceItem = $(this).find(".service-item"),
            onEnter = function () {
        serviceItem.not(this).removeClass('active');
        this.classList.add("active");
        serviceItem.not(this).find('.service_description ').slideUp(400);
        $(this).find('.service_description ').slideDown(400);
      };

      serviceItem.first().addClass("active");
      serviceItem.on('mouseenter', onEnter);
      dsnGrid.killAjax(function () {
        serviceItem.off('mouseenter', onEnter);
      });
    });
  }
  /**
   * t is using translate3d to perform a momentum based scrolling
   * (aka inertial scrolling) on modern browsers.
   *
   */


  function effectScroller() {
    const locked_scroll = "locked-scroll";
    let lenisScroll = null;
    return {
      /**
       *
       * @returns {boolean}
       * Check smooth scroll is enable or not
       */
      isScroller: function () {
        var _dsnParam$scrollbar;

        return dsnParam === null || dsnParam === void 0 ? void 0 : (_dsnParam$scrollbar = dsnParam.scrollbar) === null || _dsnParam$scrollbar === void 0 ? void 0 : _dsnParam$scrollbar.smooth;
      },
      start: function () {
        $body.removeClass(locked_scroll);
        dsnGrid.scrollTop(0, {
          duration: 0.01
        });
        if (!this.isScroller()) return;
        lenisScroll = new Lenis(dsnParam.scrollbar);

        function raf(time) {
          lenisScroll.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      },

      /**
       *  locked smooth scrollbar
       */
      locked: function () {
        var _lenisScroll;

        $body.addClass(locked_scroll);
        this.isScroller() && ((_lenisScroll = lenisScroll) === null || _lenisScroll === void 0 ? void 0 : _lenisScroll.destroy());
      },

      /**
       *
       * @param $id
       * @returns {*}
       * Gets scrollbar on the given element. If no scrollbar instance exists, returns undefined:
       */
      getScrollbar: () => lenisScroll,

      /**
       *
       * @param listener
       * @param $useWin
       *
       * Since scrollbars will not fire a native scroll event
       */
      getListener: function (listener) {
        if (listener === undefined) return;

        const scroll = e => {
          listener(e, window.scrollX, window.scrollY);
        };

        $wind.on("scroll", scroll);
      }
    };
  }

  function compareTowImage($el = $(document)) {
    $el.find('.dsn-compare-container').each(function () {
      const compare = dsnGrid.compareTowImg(this);
      dsnGrid.killAjax(function () {
        compare.destroy();
      });
    });
  }

  function fancyBox() {
    if (!window.Fancybox) return;
    Fancybox.defaults.Hash = false;
    Fancybox.bind(".vid");
    Fancybox.bind("[data-fancybox]");
    Fancybox.bind(".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image  a");
    dsnGrid.killAjax(function () {
      Fancybox.unbind(".vid");
      Fancybox.unbind("[data-fancybox]");
    });
  }
  /**
   *
   * @param $el
   */


  function projectSlider() {
    return {
      swiper: function ($id, $obj) {
        $id = dsnGrid.convertToJQuery($id);
        $obj = $.extend(true, {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 0,
          grabCursor: true,
          speed: 1000,
          parallax: true,
          loop: true,
          // slideToClickedSlide: true,
          pagination: {
            el: $id.find(".swiper-pagination").get(0),
            dynamicBullets: true,
            clickable: true //
            // renderBullet: function (index, className) {
            //     return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="26" height="26" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="6" stroke-width="3"></circle></svg></span>';
            // },

          },
          navigation: {
            nextEl: $id.find(".swiper-next").get(0),
            prevEl: $id.find(".swiper-prev").get(0)
          }
        }, $obj);
        const $s = new Swiper($id.find(".swiper-container").get(0), $obj);
        dsnGrid.killAjax(() => {
          $s.destroy();
        });
      },
      run: function () {
        let $this = this;
        $(".dsn-swiper").each(function () {
          let option = dsnGrid.getData(this, "option", {});
          let syn = $(this).parent().find(dsnGrid.getData(this, "controller"));

          if (syn.length) {
            option['thumbs'] = {
              swiper: {
                el: syn.find('.swiper-container').get(0),
                allowTouchMove: false,
                slidesPerView: 1,
                speed: option.speed || 1000,
                parallax: true,
                autoHeight: true
              }
            };
          }

          option["breakpoints"] = {
            768: {
              slidesPerView: option.slidesPerView > 1 ? option.slidesPerView > 1.5 ? 2 : 1.30 : 1,
              spaceBetween: option.slidesPerView > 1 ? option.spaceBetween > 21 ? 20 : option.spaceBetween : 0
            },
            992: {
              slidesPerView: option.slidesPerView,
              spaceBetween: option.spaceBetween || 0
            },
            575: {
              slidesPerView: 1,
              spaceBetween: 0
            }
          };

          if (syn.length) {
            option['thumbs'] = {
              swiper: {
                el: syn.find('.swiper-container').get(0),
                allowTouchMove: false,
                slidesPerView: 1,
                speed: option.speed || 1000,
                parallax: true,
                autoHeight: true
              }
            };
            option.breakpoints['768'] = {
              slidesPerView: 1,
              spaceBetween: 0
            };
          }

          option['slidesPerView'] = 1;
          option['spaceBetween'] = 0;
          $this.swiper(this, option);
        });
      }
    };
  }
  /**
   *
   *  - Create an high quality justified gallery
   *    of image
   *
   */


  function justifiedGallery($el = $(document)) {
    $el.find(".gallery-portfolio").each(function () {
      if (!window.fjGallery) return;
      const option = dsnGrid.getData(this, 'option') || {};
      const gallery = fjGallery(this, { ...option,
        itemSelector: '.fj-gallery-item',
        onJustify: function () {
          ScrollTrigger.refresh();
        }
      });
      dsnGrid.killAjax(function () {
        fjGallery(gallery, 'destroy');
      });
    });
  }

  function sliderPortfolio($el = $(document)) {
    let tl = gsap.timeline();
    const pagination = {
      next: [],
      prev: []
    };

    const initSlider = async function () {
      const dsnSliderContent = this.querySelector('.dsn-slider-content');
      await this.querySelectorAll('.content-slider .slide-item').forEach(($item, $index) => {
        var _slideContent$querySe, _slideContent$querySe2;

        const slideContent = $item.querySelector('.slide-content');
        $item.setAttribute('data-dsn-id', $index);
        if (!slideContent) return;
        slideContent === null || slideContent === void 0 ? void 0 : slideContent.setAttribute('data-dsn-id', $index);
        if ($index === 0) slideContent === null || slideContent === void 0 ? void 0 : slideContent.classList.add('dsn-active', 'dsn-active-animate');
        pagination.prev.push(`<div class="swiper-slide">
                            <div class="box-content w-100 d-flex align-items-center">
                                <div class="prev-arrow">
                                    <div class="container-inner">
                                        <svg class="arrow v-middle" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 28.214 23.057">
                                            <g fill="none" stroke-linecap="square" stroke-width="1">
                                                <path d="M23.528 11.685h-20M16.685 19.528l8-8-8-8"></path>
                                            </g>
                                        </svg>
                                        <svg class="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g class="circle-wrap" fill="none" stroke-width="1" stroke-linejoin="round"
                                               stroke-miterlimit="10">
                                                <circle cx="12" cy="12" r="10.5"></circle>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div class='box-title'><h6 class='sm-title-block'>${(_slideContent$querySe = slideContent.querySelector('.title')) === null || _slideContent$querySe === void 0 ? void 0 : _slideContent$querySe.innerText}</h6></div>
                            </div>
                        </div>`);
        pagination.next.push(`<div class="swiper-slide">
                            <div class="box-content w-100 d-flex align-items-center justify-content-end">
                                <div class='box-title'><h6 class='sm-title-block'>${(_slideContent$querySe2 = slideContent.querySelector('.title')) === null || _slideContent$querySe2 === void 0 ? void 0 : _slideContent$querySe2.innerText}</h6></div>
                                <div class="next-arrow">
                                    <div class="container-inner">
                                        <svg class="arrow v-middle" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 28.214 23.057">
                                            <g fill="none" stroke-linecap="square" stroke-width="1">
                                                <path d="M23.528 11.685h-20M16.685 19.528l8-8-8-8"></path>
                                            </g>
                                        </svg>
                                        <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24">
                                            <g class="circle-wrap" fill="none" stroke-width="1" stroke-linejoin="round"
                                               stroke-miterlimit="10">
                                                <circle cx="12" cy="12" r="10.5"></circle>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>`);
        dsnSliderContent === null || dsnSliderContent === void 0 ? void 0 : dsnSliderContent.append(slideContent);
      });
      pagination.next.push(pagination.next.shift());
      pagination.prev.unshift(pagination.prev.pop());
      const nextCon = this.querySelector('.next-paginate');
      if (nextCon) nextCon.innerHTML = `<div class="swiper-wrapper">${pagination.next.join(' ')}</div>`;
      const navContainer = this.querySelector('.prev-paginate');
      if (navContainer) navContainer.innerHTML = `<div class="swiper-wrapper">${pagination.prev.join(' ')}</div>`;
      await this.querySelectorAll('.dsn-slider-content .slide-content [data-dsn-split=\"chars\"]').forEach(function ($item) {
        dsnGrid.spltting.Char($item, true);
      });
      await this.querySelectorAll('.dsn-slider-content .head-meta').forEach(function ($item) {
        dsnGrid.spltting.Items($item, "span");
      });
    };

    const init = swiper => {
      swiper.slides.forEach(item => {
        const video = item.querySelector('.swiper-slide:not(.swiper-slide-active) video');
        if (video) video.pause();
      });
    };

    const activeVideo = swiper => {
      const newVideo = swiper.slides[swiper.activeIndex].querySelector('video');
      const oldVideo = swiper.slides[swiper.previousIndex].querySelector('video');
      if (newVideo) newVideo.play();
      if (oldVideo) oldVideo.pause();
    };

    const getContent = (swiper, contentRef) => {
      const oldNum = swiper.slides[swiper.previousIndex].getAttribute("data-dsn-id");
      const newNum = swiper.slides[swiper.activeIndex].getAttribute("data-dsn-id");
      return [newNum, oldNum, contentRef.querySelector('[data-dsn-id="' + newNum + '"]'), contentRef.querySelector('[data-dsn-id="' + oldNum + '"]')];
    };

    function slideChange(swiper) {
      const contentSlider = this.querySelector('.dsn-slider-content');
      if (!contentSlider) return;
      activeVideo(swiper);
      const [newNum, oldNum, newContent, oldContent] = getContent(swiper, contentSlider),
            [newTitle, oldTitle] = [Array.from(newContent.querySelectorAll('.title .char') || []), Array.from(oldContent.querySelectorAll('.title .char') || [])],
            $isRight = oldNum < newNum,
            animate = {
        show: {
          autoAlpha: 1,
          y: 0,
          stagger: {
            amount: 0.3,
            from: "center"
          },
          ease: "back.out(4)",
          rotation: 0,
          scale: 1,
          yoyo: true
        },
        hide: {
          autoAlpha: 0,
          y: !$isRight ? "25%" : "-25%",
          stagger: {
            amount: 0.3,
            from: "center"
          },
          ease: "back.in(4)",
          yoyo: true,
          rotation: 8,
          scale: 1.1
        }
      };
      const current = Number.parseInt(newNum, 10) + 1,
            num = this.querySelector(".slider-current-index");
      if (num) num.innerHTML = current > 9 ? current : '0' + current;
      if (swiper.dsnOnChange) swiper.dsnOnChange(newNum, oldNum, newContent, oldContent);
      tl.progress(1);
      tl = new gsap.timeline();
      oldContent.classList.remove("dsn-active-animate");
      tl.fromTo(oldTitle, 0.4, animate.show, animate.hide).call(function () {
        oldContent.classList.remove("dsn-active");
        newContent.classList.add("dsn-active");
        newContent.classList.add("dsn-active-animate");
      }).fromTo(newTitle, 0.8, animate.hide, animate.show, "-=.005");
    }

    const swiper = function () {
      const option = Object.assign({}, {
        on: {
          init,
          slideChange: slideChange.bind(this)
        }
      }, dsnGrid.getData(this, 'option') || {}, {
        autoHeight: false
      });
      if (window.innerWidth > 767) option.pagination = {
        el: this.querySelector('.swiper-pagination'),
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
        type: 'bullets'
      };
      return new Swiper(this.querySelector(".content-slider .swiper-container"), option);
    };

    const NavSwiper = function (container, swiper) {
      var _swiper$passedParams2, _swiper$passedParams3;

      const navContainer = container.querySelector('.next-paginate');
      setTimeout(function () {
        gsap.to($(container).find('.bg-container'), {
          opacity: 1
        });
      }, 3000);
      if (!navContainer) return false;

      if (window.innerWidth > 575) {
        navContainer.querySelectorAll('h6.sm-title-block').forEach($item => {
          const s = dsnGrid.spltting.Char($item);
          s.chars.forEach(($item, $index) => {
            $index = $index + 5;
            $item.setAttribute('data-swiper-parallax-y', `${$index * 9}%`);
            $item.setAttribute(`data-swiper-parallax-opacity`, '0');
            $item.setAttribute('data-swiper-parallax-duration', $index * 100);
            $item.classList.add('swiper-parallax-transform');

            if (s.chars.length === $index - 4) {
              const arrow = s.el.closest('.box-content').querySelector('.next-arrow');
              if (!arrow) return;
              arrow.setAttribute('data-swiper-parallax-y', `${$index * 3}%`);
              arrow.setAttribute(`data-swiper-parallax-opacity`, '0');
              arrow.setAttribute('data-swiper-parallax-duration', $index * 100);
              arrow.classList.add('swiper-parallax-transform');
            }
          });
        });
      }

      const navSlider = new Swiper(navContainer, {
        speed: ((_swiper$passedParams2 = swiper.passedParams) === null || _swiper$passedParams2 === void 0 ? void 0 : _swiper$passedParams2.speed) || 1000,
        loop: ((_swiper$passedParams3 = swiper.passedParams) === null || _swiper$passedParams3 === void 0 ? void 0 : _swiper$passedParams3.loop) || false,
        touchRatio: 0.2,
        resistanceRatio: 0.65,
        effect: 'fade',
        parallax: true,
        allowTouchMove: false
      });
      swiper.thumbs.swiper = navSlider;
      setTimeout(function () {
        navContainer.classList.remove('d-none');
      }, 3000);
      return navSlider;
    };

    const NavSwiperPrev = function (container, swiper, nav) {
      var _swiper$passedParams4, _swiper$passedParams5;

      const navContainer = container.querySelector('.prev-paginate');
      setTimeout(function () {
        gsap.to($(container).find('.bg-container'), {
          opacity: 1
        });
      }, 3000);
      if (!navContainer) return false;

      if (window.innerWidth > 575) {
        navContainer.querySelectorAll('h6.sm-title-block').forEach($item => {
          const s = dsnGrid.spltting.Char($item);
          s.chars.forEach(($item, $index) => {
            if ($index === 0) {
              $index = $index + 4;
              const arrow = s.el.closest('.box-content').querySelector('.prev-arrow');
              arrow.setAttribute('data-swiper-parallax-y', `${$index * 3}%`);
              arrow.setAttribute(`data-swiper-parallax-opacity`, '0');
              arrow.classList.add('swiper-parallax-transform');
              $index = 0;
            }

            $index = $index + 5;
            $item.setAttribute('data-swiper-parallax-y', `${$index * 9}%`);
            $item.setAttribute(`data-swiper-parallax-opacity`, '0');
            $item.setAttribute('data-swiper-parallax-duration', $index * 100);
            $item.classList.add('swiper-parallax-transform');
          });
        });
      }

      const navSlider = new Swiper(navContainer, {
        speed: ((_swiper$passedParams4 = swiper.passedParams) === null || _swiper$passedParams4 === void 0 ? void 0 : _swiper$passedParams4.speed) || 1000,
        loop: ((_swiper$passedParams5 = swiper.passedParams) === null || _swiper$passedParams5 === void 0 ? void 0 : _swiper$passedParams5.loop) || false,
        touchRatio: 0.2,
        resistanceRatio: 0.65,
        effect: 'fade',
        parallax: true,
        allowTouchMove: false
      });
      nav.thumbs.swiper = navSlider;
      setTimeout(function () {
        navContainer.classList.remove('d-none');
      }, 3000);
      return navSlider;
    };

    const webGelOption = function () {
      const images = [];
      $(this).find(".bg-container .slide-item").each(function () {
        const slide_content = $(this).find('.image-bg'),
              id = $(this).data('dsn-id');

        if (slide_content.find('video').length) {
          images[id] = {
            posters: slide_content.find('video').get(0),
            src: slide_content.find('video').attr("data-dsn-poster"),
            overlay: slide_content.data("overlay")
          };
        } else {
          const img = slide_content.find('img');
          const srcImg = img.data('dsn-src');
          images[id] = {
            src: srcImg !== null && srcImg !== void 0 ? srcImg : img.attr("src"),
            overlay: slide_content.data("overlay")
          };
        }
      });
      if (images.length) $(this).find(".bg-container").attr("data-overlay", images[0].overlay);
      return images;
    };

    $el.find(".main-slider:not(.dsn-swiper-initialized)").each(function () {
      this.classList.add('dsn-swiper-initialized');
      initSlider.bind(this)().then(swiper.bind(this)).then(function (swiper) {
        const handleNext = function () {
          if (tl.isActive()) return;

          if (swiper.slides.length === swiper.activeIndex + 1 && !swiper.passedParams.loop) {
            swiper.slideTo(0);
          } else {
            swiper.slideNext();
          }
        },
              handlePrev = function () {
          if (tl.isActive()) return;

          if (swiper.activeIndex === 0 && !swiper.passedParams.loop) {
            swiper.slideTo(swiper.slides.length);
          } else {
            swiper.slidePrev();
          }
        },
              nextArrow = $(this).find('.next-arrow'),
              prevArrow = $(this).find('.prev-arrow');

        if (nextArrow.length) nextArrow.on('click', handleNext);
        if (prevArrow.length) prevArrow.on('click', handlePrev);
        const nav = NavSwiper(this, swiper);
        const navPrev = NavSwiperPrev(this, swiper, nav);
        let webGel = null;
        if (this.classList.contains('dsn-webgl')) webGel = dsnGrid.WebGLDistortionHoverEffects({
          imgs: webGelOption.bind(this)(),
          ...(dsnGrid.getData(this, 'webgl', {}) || {}),
          direction: swiper.params.direction,
          parent: this.querySelector('.bg-container'),
          swiper,

          onStart({
            parent,
            item
          }) {
            parent.setAttribute('data-overlay', item.overlay);
          }

        });
        dsnGrid.killAjax(function () {
          if (nextArrow.length) nextArrow.off('click', handleNext);
          if (prevArrow.length) prevArrow.off('click', handlePrev);
          tl.kill();
          swiper.destroy();
          webGel.destroy();
          if (nav) nav.destroy();
          if (navPrev) navPrev.destroy();
        });
      }.bind(this));
    });
  }

  function mouseCirMove($off) {
    const $element = $("#dsn_cursor"),
          inner = $("#dsn_cursor_inner");
    if (dsnParam.cursor.run) $body.addClass('dsn-cursor-effect');
    if (!$element.length || dsnGrid.isMobile() || !dsnParam.cursor.run) return;
    const mouseStop = 'dsn-stop-cursor';

    if (!$off) {
      dsnGrid.mouseMove($element, {
        speed: dsnParam.cursor.speed,
        mouseStop,
        inner: {
          el: inner,
          speed: dsnParam.cursor.speedInner
        }
      });
    }

    const defaultEl = $element.css(['opacity', 'width', 'height', 'borderColor', 'background']),
          {
      stop,
      run
    } = {
      stop: () => $body.addClass(mouseStop),
      run: () => $body.removeClass(mouseStop)
    };
    dsnGrid.mouseHover("a:not(> img):not(.vid) , .dsn-button-sidebar,  button , .button-load-more , [data-cursor=\"open\"]", {
      enter: () => gsap.to($element, 0.5, {
        width: 70,
        height: 70,
        opacity: 0.5,
        backgroundColor: defaultEl.borderColor
      }),
      leave: () => gsap.to($element, 0.5, { ...defaultEl
      })
    });
    dsnGrid.mouseHover(".c-hidden , .social-side a , .next-arrow , .prev-arrow , .dsn-btn.vid", {
      enter() {
        stop();
        const {
          x,
          y,
          width,
          height
        } = this.getBoundingClientRect();
        gsap.to($element, 0.5, {
          width,
          height,
          opacity: 0,
          x,
          y,
          xPercent: 0,
          yPercent: 0
        });
        gsap.to(inner, 0.1, {
          opacity: 0
        });
      },

      leave() {
        run();
        gsap.to($element, 0.5, { ...defaultEl,
          xPercent: -50,
          yPercent: -50
        });
        gsap.to(inner, 0.1, {
          opacity: 1
        });
      }

    });
  }

  changeStyle();
  /**
   * Option Style Pages
   */

  function changeStyle() {
    const options = $('#dsn_box_options');
    options.on('click', function () {
      const isDark = $body.hasClass('v-dark'),
            _dark = $('.v-dark'),
            _light = $('.v-light');

      $body.toggleClass('v-dark');

      _dark.removeClass('v-dark').addClass('v-light');

      _light.addClass('v-dark').removeClass('v-light');

      $.ajax({
        url: dsnParam.ajaxStyle,
        type: "post",
        data: {
          color: isDark ? 'v-light' : 'v-dark',
          style: "off"
        }
      });
    });
  }

  function list_project($el = $(document)) {
    function changeState(_active, _remove, $product) {
      if (_active.hasClass('active')) return false;

      _active.addClass('active');

      _remove.removeClass('active');

      $product.fadeOut(300, function () {
        jQuery(this).toggleClass("list").fadeIn(300);
      });
      return false;
    }

    $el.find('.woocommerce').each(($index, $item) => {
      const $grid = $($item).find('.dsn_grid');
      const $list = $($item).find('.dsn_list');
      if (!$grid.length) return;
      const $product = $($item).find('ul.dsn-shop');
      $grid.on('click', function () {
        return changeState($grid, $list, $product);
      });
      $list.on('click', function () {
        return changeState($list, $grid, $product);
      });
      dsnGrid.killAjax(() => {
        $grid.off('click');
        $list.off('click');
      });
    });
  }

  function inputNumber($el = $(document)) {
    $el.find('.quantity').each(function () {
      const $this = $(this),
            input = $this.find('input[type="number"]'),
            btnUp = $this.find('.quantity-up'),
            btnDown = $this.find('.quantity-down'),
            min = input.attr('min') || 1,
            max = input.attr('max') || Number.MAX_VALUE;
      btnUp.off('click');
      btnUp.on('click', ChangeValue.bind(this, true));
      btnDown.off('click');
      btnDown.on('click', ChangeValue.bind(this, false));

      function ChangeValue(_is_plus) {
        const oldValue = parseFloat(input.val());
        let newVal = 0;

        if (_is_plus) {
          if (oldValue >= max) {
            newVal = oldValue;
          } else {
            newVal = oldValue + 1;
          }
        } else {
          if (oldValue <= min) {
            newVal = oldValue;
          } else {
            newVal = oldValue - 1;
          }
        }

        input.val(newVal);
        input.trigger("change");
      }
    });
  }
  /**
   * Validation Contact form
   */


  function contactValidator() {
    const contact_form = $("#contact-form");

    if (contact_form < 1) {
      return;
    }

    contact_form.validator(); // when the form is submitted
    // contact_form.off("submit");

    contact_form.on("submit", function (e) {
      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        // POST values in the background the the script URL
        $.ajax({
          type: "POST",
          url: "contact.php",
          data: $(this).serialize(),
          success: function (data) {
            // data = JSON object that contact.php returns
            // we recieve the type of the message: success x danger and apply it to the
            var messageAlert = "alert-" + data.type;
            var messageText = data.message; // let's compose Bootstrap alert box HTML

            var alertBox = "<div class=\"alert " + messageAlert + " alert-dismissable\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>" + messageText + "</div>"; // If we have messageAlert and messageText

            if (messageAlert && messageText) {
              // inject the alert to .messages div in our form
              contact_form.find(".messages").html(alertBox); // empty the form

              contact_form[0].reset();
            }

            setTimeout(function () {
              contact_form.find(".messages").html("");
            }, 3000);
          },
          error: function (error) {
            console.log(error);
          }
        });
        return false;
      }
    });
  }
})(jQuery);

function sidebarOptions() {
  document.body.classList.toggle('dsn-show-sidebar');
}
//# sourceMappingURL=custom.js.map