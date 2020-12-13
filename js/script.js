//search bar
$(document).on('click', '.search', function() {
    $('.search-bar').addClass('search-bar-active');
})
$(document).on('click', '.search-cancle', function() {
        $('.search-bar').removeClass('search-bar-active');
    })
    //login form
$(document).on('click', '.user', function() {
    $('.form').addClass('user-active');
})
$(document).on('click', '.form-cancle', function() {
        $('.form').removeClass('user-active');
        $('.form').removeClass('sign-up-active');
        $('.form').removeClass('forget-active');
    })
    //sign-up form
$(document).on('click', '.sign-up-btn', function() {
    $('.form').addClass('sign-up-active');
    $('.form').removeClass('user-active');
})
$(document).on('click', '.haveAccount', function() {
        $('.form').addClass('user-active');
        $('.form').removeClass('sign-up-active');
        $('.form').removeClass('forget-active');
    })
    //forgot form show up
$(document).on('click', '.forget', function() {
        $('.form').addClass('forget-active');
        $('.form').removeClass('user-active');
    })
    // slider
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        auto: true,
        item: 1,
        slideMargin: 0,
        loop: true,
        pauseOnHover: true
    });
});
//-------------------------script for feature-------------------
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        adaptiveHeight: true,
        auto: true,
        item: 5,
        slideMargin: 0,
        loop: true,
        pauseOnHover: true
    });
});