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
        // autoplay: true,
        // autoplaySpeed: 1000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
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

    $('#filter-2').on('click', function () {
        $('.product .product-pro .product-list .product-item').removeClass('col-lg-3')
        $('.product .product-pro .product-list .product-item').addClass('col-lg-6')
    })

    $('#filter-4').on('click', function () {
        $('.product .product-pro .product-list .product-item').removeClass('col-lg-6')
        $('.product .product-pro .product-list .product-item').addClass('col-lg-3')
    })

});