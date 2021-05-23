const girlProducts = [{
        id: 0,
        name: "Váy vàng banana",
        price: "150.000 VND",
        imgSrc: "./images/boys/boy1.webp"
    },
    {
        id: 1,
        name: "Xanh Smile",
        price: "150.000 VND",
        imgSrc: "./images/boys/boy2.jpg"

    },
    {
        id: 2,
        name: "Xanh teen",
        price: "150.000 VND",
        imgSrc: "./images/boys/boy3.webp"
    },
    {
        id: 3,
        name: "Vàng Banana",
        price: "150.000 VND",
        imgSrc: "./images/boys/boy4.jpg"
    },
    {
        id: 4,
        name: "Short Đỏ",
        price: "250.000 VND",
        imgSrc: "./images/boys/boy5.jpg"
    },
    {
        id: 5,
        name: "Thun New York",
        price: "450.000 VND",
        imgSrc: "./images/boys/boy6.jpg"
    },
    {
        id: 6,
        name: "Hồng Caro",
        price: "350.000 VND",
        imgSrc: "./images/boys/boy7.jpg"
    },
    {
        id: 7,
        name: "Vai xanh",
        price: "250.000 VND",
        imgSrc: "./images/boys/boy8.jpg"
    },
    {
        id: 8,
        name: "Vai Hồng",
        price: "250.000 VND",
        imgSrc: "./images/boys/boy9.jpg"
    },
    {
        id: 9,
        name: "Chấm Bi",
        price: "250.000 VND",
        imgSrc: "./images/boys/boy10.jpg"
    },
    {
        id: 10,
        name: "Chấm Bi",
        price: "350.000 VND",
        imgSrc: "./images/boys/boy11.jpg"
    },
    {
        id: 11,
        name: "Thun Rộng",
        price: "450.000 VND",
        imgSrc: "./images/boys/boy12.jpg"
    },
    {
        id: 12,
        name: "Thun Vừa",
        price: "450.000 VND",
        imgSrc: "./images/boys/boy14.jpg"
    },
    {
        id: 13,
        name: "Thun Daisy",
        price: "450.000 VND",
        imgSrc: "./images/boys/boy13.jpg"
    },
]

const boyProducts = [{
        id: 14,
        name: "Short da cá đỏ trắng",
        price: "150.000 VND",
        imgSrc: "./images/girls/girl1.jpg"
    },
    {
        id: 15,
        name: "Áo phông bé trai",
        price: "150.000 VND",
        imgSrc: "./images/girls/girl2.jpg"
    },
    {
        id: 16,
        name: "Phông What's Up",
        price: "150.000 VND",
        imgSrc: "./images/girls/girl3.jpg"
    },
    {
        id: 17,
        name: "Phông Vàng",
        price: "150.000 VND",
        imgSrc: "./images/girls/girl5.jpg"
    },
    {
        id: 18,
        name: "Polo",
        price: "250.000 VND",
        imgSrc: "./images/girls/girl6.jpg"
    },
    {
        id: 19,
        name: "Đồ bộ xanh",
        price: "450.000 VND",
        imgSrc: "./images/girls/girl7.jpg"
    },
    {
        id: 20,
        name: "Đồ bộ đỏ",
        price: "350.000 VND",
        imgSrc: "./images/girls/girl8.jpg"
    },
    {
        id: 21,
        name: "Đồ bộ trắng",
        price: "250.000 VND",
        imgSrc: "./images/girls/girl9.jpg"
    },
    {
        id: 22,
        name: "Đồ bộ awesome",
        price: "250.000 VND",
        imgSrc: "./images/girls/girl10.jpg"
    },
    {
        id: 23,
        name: "Đồ bộ chữ",
        price: "250.000 VND",
        imgSrc: "./images/girls/girl11.jpg"
    },
    {
        id: 24,
        name: "Ba lỗ bulls",
        price: "350.000 VND",
        imgSrc: "./images/girls/girl12.jpg"
    },
    {
        id: 25,
        name: "Đồ bộ sọc",
        price: "450.000 VND",
        imgSrc: "./images/girls/girl12.jpg"
    },
    {
        id: 26,
        name: "Đồ bộ sọc yellow",
        price: "450.000 VND",
        imgSrc: "./images/girls/girl12.jpg"
    },
    {
        id: 27,
        name: "Short kaki túi hộp",
        price: "450.000 VND",
        imgSrc: "./images/girls/girl13.jpg"
    },
]


//login form
$(document).on('click', '.form-cancle', function() {
        $('.form').removeClass('user-active');
        $('.form').removeClass('sign-up-active');
        $('.form').removeClass('forget-active');
        $('.form').removeClass('cart-active');
    })
    //sign-up form
$(document).on('click', '.sign-up-btn', function() {
    $('.form').addClass('sign-up-active');
    $('.form').removeClass('user-active');
    $('.login-form').addClass('login-none');

})
$(document).on('click', '.haveAccount', function() {
    $('.form').addClass('user-active');
    $('.form').removeClass('sign-up-active');
    $('.form').removeClass('forget-active');
    $('.login-form').addClass('login-none');
});
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