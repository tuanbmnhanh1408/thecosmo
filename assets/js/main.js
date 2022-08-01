$(document).ready(function () {
    window.onscroll = () => {

        if (window.scrollY > 60) {
            $(".header").addClass("active");
            $(".header-logo").addClass("active");
            $('.auth-form').removeClass('active');

        } else {
            $(".header").removeClass("active");
            $(".header-logo").removeClass("active");
        }
        $('.close-icon').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('.bars').removeClass('hiden');

        $('.cart').removeClass('active');
        $('.search-box').remove('active');
    };

    $('.image-slider').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
    });

    /// ----------------------------

    const $rootSingle = $('.cSlider--single');
    const $rootNav = $('.cSlider--nav');

    $rootSingle.slick({
        slide: '.cSlider__item',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        autoplay: true,
        autoplaySpeed: 1000,
        // adaptiveHeight: true,
        infinite: true,
        // useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        prevArrow: "<button type='button' class='slick-prev pull-left ml-3'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right mr-3'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });

    $rootNav.on('init', function (event, slick) {
        $(this).find('.slick-slide.slick-current').addClass('is-active');
    })
        .slick({
            vertical: true,
            slide: '.cSlider__item',
            slidesToShow: 8,
            slidesToScroll: 8,
            dots: false,
            arrows: false,
            focusOnSelect: false,
            infinite: false,
            // centerMode: true,
            // responsive: [{
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 6,
            //         slidesToScroll: 6,
            //     }
            // }, {
            //     breakpoint: 640,
            //     settings: {
            //         slidesToShow: 6,
            //         slidesToScroll: 6,
            //     }
            // }, {
            //     breakpoint: 420,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //     }
            // }]
        });

    $rootSingle.on('afterChange', function (event, slick, currentSlide) {
        $rootNav.slick('slickGoTo', currentSlide);
        $rootNav.find('.slick-slide.is-active').removeClass('is-active');
        $rootNav.find('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('is-active');
    });

    $rootNav.on('click', '.slick-slide', function (event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $rootSingle.slick('slickGoTo', goToSingleSlide);
    });

    $('#login').on('click', function () {
        $(".header").removeClass("active");

        $('.auth-form').addClass('active');
    })

    $('#register').on('click', function () {
        $(".header").removeClass("active");

        $('.auth-form').addClass('active');
    })

    $('#close-btn').on('click', function () {
        $('.auth-form').removeClass('active');
    })

    $('#cart-icon').on('click', function () {
        $('.cart').addClass('active');
    })

    $('#cart-close').on('click', function () {
        $('.cart').removeClass('active');
    })
    $('.cart-btn').on('click', function () {
        $('.cart').removeClass('active');
    })

    $('#label-mobile').on('click', function () {
        $('.search-box').toggleClass('active');
    })

    $('#icon-bars').on('click', function () {
        $('.mobile-menu').addClass('active');
        $('.close-icon').addClass('active');
        $('.bars').addClass('hiden');
    })

    $('.close-icon').on('click', function () {
        $('.bars').removeClass('hiden');
        $('.mobile-menu').removeClass('active');
        $('.close-icon').removeClass('active');
    })

    $('.chatbox-btn').on('click', function () {
        $('.chatbox-card').toggleClass('active');
    })

    $('.hiden-chatbox').on('click', function () {
        $('.chatbox-card').removeClass('active');
    })

    $('#filter-2').on('click', function () {
        $('.product .product-pro .product-list .product-item').removeClass('col-lg-3')
        $('.product .product-pro .product-list .product-item').addClass('col-lg-6')
    })

    $('#filter-4').on('click', function () {
        $('.product .product-pro .product-list .product-item').removeClass('col-lg-6')
        $('.product .product-pro .product-list .product-item').addClass('col-lg-3')
    })

    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [0, 500],
            slide: function (event, ui) {
                $("#amount1").val("Từ " + ui.values[0] + "đ");
                $("#amount2").val("Đến " + ui.values[1] + "đ");
            }
        });
        $("#amount1").val("Từ " + $("#slider-range").slider("values", 0) + "đ");
        $("#amount2").val("Đến " + $("#slider-range").slider("values", 1) + "đ");
    });

    $('#filter-viewbox').on('click', function () {
        $('.filter-dialog').toggleClass('filter-box');

    })

    $listColor = document.querySelectorAll('.product-page-detail .form-detail .detail-color .color-list li');
    $listColorLink = document.querySelectorAll('.product-page-detail .form-detail .detail-color .color-list li a');
    $listColor.forEach(color => {
        color.addEventListener('click', () => {
            let colorClassName = color.className;
            if (!color.classList.contains('clicked')) {
                let colorSelect = colorClassName.slice(colorClassName.indexOf('_') + 1, colorClassName.length);
                resetClicked()
                color.classList.add('clicked')
                setNewImage(colorSelect)
            }
        })
    });

    let resetClicked = function () {
        $listColor.forEach(color => {
            color.classList.remove('clicked');
        })
    }

    let setNewImage = function (color) {
        let imageOne = document.querySelector('#product-image-1 img');
        let imageTwo = document.querySelector('#product-image-2 img');

        if (color == 'xanhnhat') {
            imageOne.src = 'https://product.hstatic.net/1000289385/product/mausac_xanh_oliver_8af075ec87674d1b9888ccd053d771c1_1024x1024.jpg';
            imageTwo.src = 'https://product.hstatic.net/1000289385/product/mausac_xanh_oliver1_dce54ba64bb046bea83160fd7a5b7e8e_1024x1024.jpg';
        }
        if (color == 'white') {
            imageOne.src = 'https://product.hstatic.net/1000289385/product/mausac_navy_oliver_db225e3f0f05431aa21d2a22e27b34d4_1024x1024.jpg';
            imageTwo.src = 'https://product.hstatic.net/1000289385/product/mausac_navy_oliver1_c84bb1e3e890456785ad5418640dc8ef_1024x1024.jpg';
        }
        if (color == 'red') {
            imageOne.src = 'https://product.hstatic.net/1000289385/product/mausac_do_oliver_b2459caa42554c96ad30695a45257a9e_1024x1024.jpg';
            imageTwo.src = 'https://product.hstatic.net/1000289385/product/mausac_do_oliver1_8803fa02869d4e139f1d08aba3066983_1024x1024.jpg';
        }
        if (color == 'dark') {
            imageOne.src = 'https://product.hstatic.net/1000289385/product/mausac_xam_oliver_a2177fee481e4880a63a9e65e86954e8_1024x1024.jpg';
            imageTwo.src = 'https://product.hstatic.net/1000289385/product/mausac_xam_oliver1_a2fe4fb54c124118a253bf461a86fcf2_1024x1024.jpg';
        }
        if (color == 'xam') {
            imageOne.src = 'https://product.hstatic.net/1000289385/product/mausac_xamdam_oliver_9d7d6f4640334b9392baff681d81490d_1024x1024.jpg';
            imageTwo.src = 'https://product.hstatic.net/1000289385/product/mausac_xamdam_oliver1_872530917b2a4b25a6f069e246cc38ec_1024x1024.jpg';
        }
    }

    $listSize = $('.product-page-detail .form-detail .detail-size .size-list li');
    $listSize.each(function (i, item) {
        item.addEventListener('click', () => {
            if (!item.classList.contains('clicked')) {
                $listSize.each((i, item) => {
                    item.classList.remove('clicked');
                })
                item.classList.add('clicked')
            }
        })
    })

    $('#guide-size').on('click', () => {
        $('.pop-size').addClass('active')
    })

    $('.pop-size .size-box .close-icon').on('click', () => {
        $('.pop-size').removeClass('active')
    })

    $('.register-btn').on('click', () => {
        $('.register-overlay').addClass('active')
    })

    $('.register-overlay .overlay .cover .content .close-button').on('click', () => {
        $('.register-overlay').removeClass('active')
    })

    $('#forgot-password').on('click', () => {
        $('.forgot-overlay').addClass('active')
    })

    $('.forgot-overlay .overlay .cover .content .close-button').on('click', () => {
        $('.forgot-overlay').removeClass('active')
    })

    $('.mobile-toggle').on('click', function () {
        $('.mobile-text a').text('Hiển thị thông tin đơn hàng');
        $('.mobile-text svg').remove();
        $('.mobile-text').append(
            `<svg width="11" height="6" xmlns="http://www.w3.org/2000/svg" class="order-summary-toggle-dropdown" fill="#000"><path d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z"></path></svg>`
        )
    });
    $('.mobile-toggle').on('click', function () {
        // $className = $('.mobile-toggle').attr('class');
        if ($('.mobile-toggle').hasClass('collapsed')) {
            $('.mobile-text a').text('Ẩn thông tin đơn hàng');
            $('.mobile-text svg').remove();
            $('.mobile-text').append(
                `<svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"
                    class="order-summary-toggle-dropdown" fill="#000">
                    <path
                        d="M6.138.876L5.642.438l-.496.438L.504 4.972l.992 1.124L6.138 2l-.496.436 3.862 3.408.992-1.122L6.138.876z">
                    </path>
                </svg>`
            )
        }
    });

    $('.login-form .form-content .form-box .forgot-pass').on('click', () => {
        $('.form-content .register-box').toggleClass('active');
    })
});
