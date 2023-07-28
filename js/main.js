


        

function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  window.onload = function() {
    openModal();
  };
  
(function ($) {
    "use strict";

    $(document).on('mouseover', '.speaker-img-tooltip',
        function () {
            var self = $(this),
                tips = self.attr('data-tips');
            $tooltip = '<div class="eventalk-tooltip">' +
                '<div class="eventalk-tooltip-content">' + tips + '</div>' +
                '<div class="eventalk-tooltip-bottom"></div>' +
                '</div>';
            $('body').append($tooltip);
            var $tooltip = $('body > .eventalk-tooltip');
            var tHeight = $tooltip.outerHeight();
            var tBottomHeight = $tooltip.find('.eventalk-tooltip-bottom').outerHeight();
            var tWidth = $tooltip.outerWidth();
            var tHolderWidth = self.outerWidth();
            var top = self.offset().top - (tHeight + tBottomHeight);
            var left = self.offset().left;
            $tooltip.css({
                'top': top + 'px',
                'left': left + 'px',
                'opacity': 1
            }).show();
            if (tWidth <= tHolderWidth) {
                var itemLeft = (tHolderWidth - tWidth) / 2;
                left = left + itemLeft;
                $tooltip.css('left', left + 'px');
            } else {
                var itemLeft = (tWidth - tHolderWidth) / 2;
                left = left - itemLeft;
                if (left < 0) {
                    left = 0;
                }
                $tooltip.css('left', left + 'px');
            }
        })
        .on('mouseout', '.speaker-img-tooltip', function () {
            $('body > .eventalk-tooltip').remove();
        });


    if($("#current_date").length) {
        document.getElementById("current_date").innerHTML = formatAMPM();
    }
    function formatAMPM() {
    var d = new Date(),
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[d.getDay()]+' , '+months[d.getMonth()]+' '+d.getDate()+' , '+d.getFullYear();
    }
    

    function isIE() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1 || myNav.indexOf('trident') != -1) ? true : false;
    }

    if (isIE()) {
        $('body').addClass('ie');
    }


    $('nav#dropdown').meanmenu({
        siteLogo: "<div class='mobile-menu-nav-back'><a href='index.html'><img src='img/logo.png'/></a></div>"
    });


    var ecomZoom = $('.ex1');
    if (ecomZoom.length) {
        $('.ex1').zoom();
    }

    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i><p>TOP</p>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    $('#wrapper').on('click', '#side-menu-trigger a.menu-bar', function (e) {
        e.preventDefault();
        var $this = $(this),
            wrapper = $(this).parents('body').find('>#wrapper'),
            wrapMask = $('<div />').addClass('offcanvas-mask');
        wrapper.addClass('open').append(wrapMask);
        $this.addClass('open');
        $this.next('.menu-times').removeClass('close');
        document.getElementById('offcanvas-body-wrapper').style.right = '0';
        return false;
    });
    $('#wrapper').on('click', '#side-menu-trigger a.menu-times', function (e) {
        e.preventDefault();
        var $this = $(this);
        $("#offcanvas-body-wrapper").attr('style', '');
        $this.prev('.menu-bar').removeClass('open');
        $this.addClass('close');
        closeSideMenu();
        return false;
    });
    $('#wrapper').on('click', '#offcanvas-nav-close a', function (e) {
        closeSideMenu();
        return false;
    });
    $(document).on('click', '#wrapper.open .offcanvas-mask', function () {
        closeSideMenu();
    });
    $(document).on('keyup', function (event) {
        if (event.which === 27) {
            event.preventDefault();
            closeSideMenu();
        }
    });

    function closeSideMenu() {
        var wrapper = $('body').find('>#wrapper'),
            $this = $('#side-menu-trigger a.menu-times');
        wrapper.removeClass('open').find('.offcanvas-mask').remove();
        $("#offcanvas-body-wrapper").attr('style', '');
        $this.prev('.menu-bar').removeClass('open');
        $this.addClass('close');
    }

    if ($('#archive-search select.select2').length) {
        $('#archive-search select.select2').select2({
            theme: 'classic',
            dropdownAutoWidth: true,
            width: '100%'
        });
    }

    $(window).on('load', function () {

        var galleryIsoContainer = $('#no-equal-gallery');
        if (galleryIsoContainer.length) {
            var blogGallerIso = galleryIsoContainer.imagesLoaded(function() {
                blogGallerIso.isotope({
                    itemSelector: '.no-equal-item',
                    masonry: {
                        columnWidth: '.no-equal-item'
                    }
                });
            });
        }

        var iso_container = $('.ne-isotope');
        if (iso_container.length > 0) {

            iso_container.each(function () {
                var $container = $(this),
                    selector = $container.find('.isotope-classes-tab a.current').attr('data-filter');
                var $isotope = $container.find('.featuredContainer').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                $container.find('.isotope-classes-tab').on('click', 'a', function () {

                    var $this = $(this);
                    $this.parent('.isotope-classes-tab').find('a').removeClass('current');
                    $this.addClass('current');
                    var selector = $this.attr('data-filter');
                    $isotope.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    return false;

                });

            });
        }

        var eventCounter = $('#countdown');
        if (eventCounter.length) {
            eventCounter.countdown('2019/08/27', function(e) {
                $(this).html(e.strftime("<div class='countdown-section'><h2>%D</h2> <h3>day%!D</h3> </div><div class='countdown-section'><h2>%H</h2> <h3>Hour%!H</h3> </div><div class='countdown-section'><h2>%M</h2> <h3>Minutes</h3> </div><div class='countdown-section'><h2>%S</h2> <h3>Second</h3> </div>"))

            });
        }

        var $container = $('.ne-isotope-all');
        if ($container.length > 0) {

            var selector = $container.find('.isotope-classes-tab a.current').attr('data-filter');
            console.log(selector);
            var $isotope = $container.find('.featuredContainer').isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $container.find('.isotope-classes-tab').on('click', 'a', function () {

                var $this = $(this);
                $this.parent('.isotope-classes-tab').find('a').removeClass('current');
                $this.addClass('current');
                var selector = $this.attr('data-filter');
                $isotope.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;

            });
        }
    });


    $(window).on('load resize', function () {
        var wHeight = $(window).height(),
            mLogoH = $('a.logo-mobile').outerHeight();
        wHeight = wHeight - 50;
        $('.mean-nav > ul').css('height', wHeight + 'px');

        var target = $(".add-top-margin"),
            mHeight = $(".header-menu-fixed").outerHeight();
        target.css({
            "margin-top": mHeight + 'px'
        });
        var windowWidth = $(window).width();
        if (windowWidth < 991) {
            $('body.mean-container').css('margin-top', 0);
        }

    });

    $(window).on('scroll', function() {
        var s = $('#sticker'),
            w = $('body'),
            h = s.outerHeight(),
            windowpos = $(window).scrollTop(),
            windowWidth = $(window).width(),
            h1 = s.parent('#header-one'),
            h2 = s.parent('#header-two'),
            h3 = s.parent('#header-three'),
            h3H = h3.find('.header-top-bar').outerHeight(),
            topBar = s.prev('.header-top-bar'),
            tempMenu;
        if (windowWidth > 991) {
            w.css('padding-top', '');
            var topBarH, mBottom = 0;
            if (h1.length) {
                topBarH = h = 1;
                mBottom = 0;
            } else if (h2.length) {
                mBottom = h2.find('.main-menu-area').outerHeight();
                topBarH = w.find("#top-slider").outerHeight();
                topBarH = mBottom + topBarH;
            } else if (h3.length) {
                topBarH = topBar.outerHeight();
                if (windowpos <= topBarH) {
                    if (h3.hasClass('header-fixed')) {
                        h3.css('top', '-' + windowpos + 'px');
                    }
                }
            }
            if (windowpos >= topBarH) {
                if (h3.length || h1.length) {
                    s.addClass('stick');
                }
                if (h3.length) {
                    if (h3.hasClass('header-fixed')) {
                        h3.css('top', '-' + topBarH + 'px');
                    } else {
                        w.css('padding-top', h + 'px');
                    }
                } else if (h2.length) {
                    h2.addClass('hide-menu');
                    tempMenu = h2.find('.main-menu-area').clone();
                    tempMenu.addClass('temp-main-menu stick').attr("id", '');
                    tempMenu.css({ opacity: 0 });
                    if (h2.find('.temp-main-menu.stick').length == 0) {
                        h2.append(tempMenu);
                        h2.find('.temp-main-menu.stick').animate({ opacity: 1 }, 100);
                    }
                    if (h2.find('.temp-main-menu.stick').length > 1) {
                        h2.find('.temp-main-menu.stick').last().remove();
                    }
                }
            } else {
                s.removeClass('stick');
                if (h3.length) {
                    w.css('padding-top', 0);
                } else if (h2.length) {
                    h2.removeClass('hide-menu');
                    h2.find('.stick.temp-main-menu').remove();
                }
            }
        }
    });

    function headerNsliderResize() {
        var Hh3 = $('#header-one'),
            wWidth = $(window).width(),
            Hh3slider = Hh3.parents('#wrapper').find("#fixed-type-slider"),
            mHeight = Hh3.outerHeight();
        if (wWidth < 992) {
            mHeight = $('body > .mean-bar').outerHeight();
            $("#downFromTop").css("margin-top", mHeight + 'px');
        }
        Hh3slider.css("margin-top", mHeight + 'px');
    }

     if($('.masonry-items').length){
        $('.masonry-items').masonry({
            itemSelector: '.masonry-item',
            columnWidth: '.masonry-item',
        });
     }
    
    $('#quantity-holder,#quantity-holder2').on('click', '.quantity-plus', function() {

        var $holder = $(this).parents('.quantity-holder');
        var $target = $holder.find('input.quantity-input');
        var $quantity = parseInt($target.val(), 10);
        if ($.isNumeric($quantity) && $quantity > 0) {
            $quantity = $quantity + 1;
            $target.val($quantity);
        } else {
            $target.val($quantity);
        }

    }).on('click', '.quantity-minus', function() {

        var $holder = $(this).parents('.quantity-holder');
        var $target = $holder.find('input.quantity-input');
        var $quantity = parseInt($target.val(), 10);
        if ($.isNumeric($quantity) && $quantity >= 2) {
            $quantity = $quantity - 1;
            $target.val($quantity);
        } else {
            $target.val(1);
        }

    });

    $('.menu-trigger').on('click', function() {
        var targetHolder = $('#main-nav-wrap'),
            target = $('#main-nav', targetHolder),
            targetMenu = target.find(' > ul').not('.temp-main-nav'),
            $tempMenu = target.find('ul.temp-main-nav'),
            self = $(this);
        if ($tempMenu.length) {
            self.find('i').removeClass('flaticon-unchecked').addClass('flaticon-menu');
            $tempMenu.animate({ top: '-100%' }, 500, function() {
                $(this).animate({ opacity: 0 }, 200, function() {
                    $(this).remove()
                });
            });
        } else {
            self.find('i').removeClass('flaticon-menu').addClass('flaticon-unchecked');
            var tempMenu = targetMenu.clone();
            tempMenu.css({
                visibility: 'visible',
                position: 'absolute',
                top: '-100%',
                left: 0,
                opacity: 0,
                width: targetMenu.outerWidth()
            }).addClass('temp-main-nav');
            target.append(tempMenu);
            tempMenu.animate({ opacity: 1 }, 200, function() {
                $(this).animate({ top: 0 }, 500);
            });
        }
    });

})(jQuery);