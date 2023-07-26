
document.getElementById("event").addEventListener("change", generateInputs);

        function generateInputs() {
            const ch=document.getElementById("event").value;
            let numOfInputs = 0;
            let addnumOfInputs = 0;
            if(ch=="Quiz"){
                numOfInputs = 3;
            } else if (ch=="Cosplay"){
                numOfInputs = 2;
                addnumOfInputs = 1;
            } else if (ch=="Science Show"){
                numOfInputs = 2;
            }else if (ch=="Expression"){
                numOfInputs = 6;
                addnumOfInputs = 4;
            }else if (ch=="Video Making"){
                numOfInputs = 2;
            }else if (ch=="Famelab"){
                numOfInputs = 2;
            }else if (ch=="Math Puzzle"){
                numOfInputs = 2;
            }else if (ch=="Gaming"){
                numOfInputs = 5;
            }else if (ch=="Photography"){
                numOfInputs = 1;
            }else if (ch=="Logo Making"){
                numOfInputs = 2;
            }else if (ch=="Crime Detection"){
                numOfInputs = 3;
            }else if (ch=="Event X"){
                numOfInputs = 3;
            }
            
            const inputContainer = document.getElementById("inputContainer");
            inputContainer.innerHTML = ""; 

            for (let i = 1; i <= numOfInputs+addnumOfInputs; i++) {
                
                const label1 = document.createElement("label");
                const label2 = document.createElement("label");
                const label3 = document.createElement("label");
                const inputPair = document.createElement("div");
                const labelPair = document.createElement("div");
                inputPair.classList.add("input-pair");

                const input1 = document.createElement("input");
                input1.type = "text";
                input1.name = `input_${i}_1`;
                

                const input2 = document.createElement("input");
                input2.type = "text";
                input2.name = `input_${i}_2`;

                const input3 = document.createElement("input");
                input3.type = "text";
                input3.name = `input_${i}_3`;
                if(i>numOfInputs){
                    label1.textContent = `Team Member ${i} (Optional)`;
                    input1.placeholder = `Enter Name (Optional)`;
                    input1.value="";
                    label2.textContent = `Mobile Number (Optional)`;
                    input2.placeholder = `Mobile Number (Optional)`;
                    input2.value="";
                    label3.textContent = `Email (Optional)`;
                    input3.placeholder = `Email (Optional)`;
                    input3.value="";
                }
                else{
                    label1.textContent = `Team Member ${i}`;
                    input1.placeholder = `Enter Name`;
                    input1.required = true;
                    label2.textContent = `Mobile Number `;
                    input2.placeholder = `Mobile Number `;
                    input2.required = true;
                    label3.textContent = `Email `;
                    input3.placeholder = `Email `;
                    input3.required = true;
                }

                inputPair.appendChild(label1);
                inputPair.appendChild(input1);
                inputPair.appendChild(label2);
                inputPair.appendChild(input2);
                inputPair.appendChild(label3);
                inputPair.appendChild(input3);
                inputContainer.appendChild(labelPair);
                inputContainer.appendChild(inputPair);

                if(i==numOfInputs+addnumOfInputs){
                    
                    const label4 = document.createElement("label");
                    const input4 = document.createElement("input");
                    input4.type = "text";
                    input4.name = `team`;
                    label4.textContent = `Team Name`;
                    input4.placeholder = `Team College Name`;
                    input4.required = true;
                    inputContainer.appendChild(label4);
                    inputContainer.appendChild(input4);

                    const label5 = document.createElement("label");
                    const input5 = document.createElement("input");
                    input5.type = "text";
                    input5.name = `college`;
                    label5.textContent = `College Name`;
                    input5.placeholder = `Enter College Name`;
                    input5.required = true;
                    inputContainer.appendChild(label5);
                    inputContainer.appendChild(input5);
                    
                    const input6 = document.createElement("input");
                    const input7 = document.createElement("input");
                    input6.type = "hidden";
                    input6.name = "Inputs";
                    input6.value = numOfInputs;
                    inputContainer.appendChild(input6);
                    input7.type = "hidden";
                    input7.name = "addInputs";
                    input7.value = addnumOfInputs;
                    inputContainer.appendChild(input7);
                }
            }
        }

        

        document.getElementById("myForm").addEventListener("submit", function (event) {
            event.preventDefault();
        });

        function submitForm() {
            document.getElementById("loadingModal").style.display = "block";
            const form = document.getElementById("myForm");
            const formData = new FormData(form);
            fetch('submit.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                window.location.href='success.html';
            })
            .catch(error => {
                window.location.href='fail.php';
            });
        }

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

    
    /*-------------------------------------
    Tooltips
    -------------------------------------*/
    headerNsliderResize();
    var priceSlider = document.getElementById('price-range-filter');
    if (priceSlider) {
        noUiSlider.create(priceSlider, {
            start: [20, 80],
            connect: true,
            /*tooltips: true,*/
            range: {
                'min': 0,
                'max': 100
            },
            format: wNumb({
                decimals: 0
            }),
        });
        var marginMin = document.getElementById('price-range-min'),
            marginMax = document.getElementById('price-range-max');
        priceSlider.noUiSlider.on('update', function(values, handle) {
            if (handle) {
                marginMax.innerHTML = "$" + values[handle];
            } else {
                marginMin.innerHTML = "$" + values[handle];
            }
        });
    }

    // Tooltips
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

    /*-------------------------------------
    Current Day and Date
    -------------------------------------*/
    if($("#current_date").length) {
        document.getElementById("current_date").innerHTML = formatAMPM();
    }
    function formatAMPM() {
    var d = new Date(),
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[d.getDay()]+' , '+months[d.getMonth()]+' '+d.getDate()+' , '+d.getFullYear();
    }
    
    /*-------------------------------------
    IE Fixing
    -------------------------------------*/
    function isIE() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1 || myNav.indexOf('trident') != -1) ? true : false;
    }

    if (isIE()) {
        $('body').addClass('ie');
    }

    /*-------------------------------------
    Popup
    -------------------------------------*/
    var yPopup = $(".popup-youtube");
    if (yPopup.length) {
        yPopup.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
    if ($('.zoom-gallery').length) {
        $('.zoom-gallery').each(function () { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a.ne-zoom', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    }

    

    /*-------------------------------------
    On click loadmore functionality 
    -------------------------------------*/
    $('.loadmore-four-item').on('click', function (e) {
        e.preventDefault();
        var _this = $(this),
            _parent = _this.parents('.menu-list-wrapper'),
            _target = _parent.find('.menu-list'),
            _set = _target.find('.menu-item.hidden').slice(0, 4);
        if (_set.length) {
            _set.animate({
                opacity: 0
            });
            _set.promise().done(function () {
                _set.removeClass('hidden');
                _set.show().animate({
                    opacity: 1
                }, 1000);
            });
        } else {
            _this.text('No more item to display');
        }
        return false;
    });
    /*********************************/
    $('.loadmore-one-item').on('click', function (e) {
        e.preventDefault();
        var _this = $(this),
            _parent = _this.parents('.menu-list-wrapper'),
            _target = _parent.find('.menu-list'),
            _set = _target.find('.menu-item.hidden').slice(0, 1);
        if (_set.length) {
            _set.animate({
                opacity: 0
            });
            _set.promise().done(function () {
                _set.removeClass('hidden');
                _set.show().animate({
                    opacity: 1
                }, 1000);
            });
        } else {
            _this.text('No more item to display');
        }
        return false;
    });
    /*********************************/
    $('.loadmore-three-item').on('click', function (e) {
        e.preventDefault();
        var _this = $(this),
            _parent = _this.parents('.menu-list-wrapper'),
            _target = _parent.find('.menu-list'),
            _set = _target.find('.menu-item.hidden').slice(0, 3);
        if (_set.length) {
            _set.animate({
                opacity: 0
            });
            _set.promise().done(function () {
                _set.removeClass('hidden');
                _set.show().animate({
                    opacity: 1
                }, 1000);
            });
        } else {
            _this.text('No more item to display');
        }
        return false;
    });

    /*-------------------------------------
     jQuery MeanMenu activation code
     --------------------------------------*/
    $('nav#dropdown').meanmenu({
        siteLogo: "<div class='mobile-menu-nav-back'><a href='index.html'><img src='img/logo.png'/></a></div>"
    });

    /*-------------------------------------
    // jquery zoom activation code
    -------------------------------------*/
    var ecomZoom = $('.ex1');
    if (ecomZoom.length) {
        $('.ex1').zoom();
    }

    /*-------------------------------------
     Jquery Scollup
     -------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i><p>TOP</p>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*-------------------------------------
    Offcanvas Menu activation code
    -------------------------------------*/
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

    /*-------------------------------------
    Select2 activation code
    -------------------------------------*/
    if ($('#archive-search select.select2').length) {
        $('#archive-search select.select2').select2({
            theme: 'classic',
            dropdownAutoWidth: true,
            width: '100%'
        });
    }

    /*-------------------------------------
     Window load function
     -------------------------------------*/
    $(window).on('load', function () {

        /*-------------------------------------
        Masonry
        -------------------------------------*/
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

        /*-------------------------------------
        Page Preloader
        -------------------------------------*/
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });

        /*-------------------------------------
         jQuery for Isotope initialization
         -------------------------------------*/
        var iso_container = $('.ne-isotope');
        if (iso_container.length > 0) {

            iso_container.each(function () {
                var $container = $(this),
                    selector = $container.find('.isotope-classes-tab a.current').attr('data-filter');
                // Isotope initialization
                var $isotope = $container.find('.featuredContainer').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                // Isotope filter
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

        /*-------------------------------------
         Countdown activation code
        -------------------------------------*/
        var eventCounter = $('#countdown');
        if (eventCounter.length) {
            eventCounter.countdown('2019/08/27', function(e) {
                $(this).html(e.strftime("<div class='countdown-section'><h2>%D</h2> <h3>day%!D</h3> </div><div class='countdown-section'><h2>%H</h2> <h3>Hour%!H</h3> </div><div class='countdown-section'><h2>%M</h2> <h3>Minutes</h3> </div><div class='countdown-section'><h2>%S</h2> <h3>Second</h3> </div>"))

            });
        }

        /*-------------------------------------
         jQuery for Isotope initialization
         -------------------------------------*/
        var $container = $('.ne-isotope-all');
        if ($container.length > 0) {

            var selector = $container.find('.isotope-classes-tab a.current').attr('data-filter');
            console.log(selector);
            // Isotope initialization
            var $isotope = $container.find('.featuredContainer').isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            // Isotope filter
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

    /*-------------------------------------
     Accordion
     -------------------------------------*/
    var accordion = $('#accordion');
    accordion.children('.panel').children('.panel-collapse').each(function () {
        if ($(this).hasClass('in')) {
            $(this).parent('.panel').children('.panel-heading').addClass('active');
        }
    });
    accordion.on('show.bs.collapse', function (e) {
        $(e.target).prev('.panel-heading').addClass('active');
    }).on('hide.bs.collapse', function (e) {
        $(e.target).prev('.panel-heading').removeClass('active');
    });

    
    /*-------------------------------------
     Window onLoad and onResize event trigger
     -------------------------------------*/
    $(window).on('load resize', function () {
        var wHeight = $(window).height(),
            mLogoH = $('a.logo-mobile').outerHeight();
        wHeight = wHeight - 50;
        $('.mean-nav > ul').css('height', wHeight + 'px');

        /* add top margin */
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

    /*-------------------------------------
     Jquery Stiky Menu at window Load
     -------------------------------------*/
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

    /*-------------------------------------
     Masonry
     -------------------------------------*/
     if($('.masonry-items').length){
        $('.masonry-items').masonry({
            itemSelector: '.masonry-item',
            columnWidth: '.masonry-item',
        });
     }
    
    /*-------------------------------------
     Input Quantity Up & Down activation code
     -------------------------------------*/
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