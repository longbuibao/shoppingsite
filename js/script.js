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
    $('.form').removeClass('cart-active');

})
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

// popup cart-items
$(document).on('click', '#clickcart', function() {
    $('.form').addClass('cart-active');
});
//addcart script
if (!isNaN(parseInt(localStorage.getItem('numberOfProducts')))) {
    let numberOfProducts = parseInt(localStorage.getItem('numberOfProducts'));
    $('.num-cart-product').html(numberOfProducts);
} else {
    localStorage.setItem('numberOfProducts', '0')
}

$(document).on('click', '.add-cart', function() {
    let numberOfProducts = parseInt(localStorage.getItem('numberOfProducts'));
    numberOfProducts++;
    $('.num-cart-product').html(numberOfProducts);
    localStorage.setItem('numberOfProducts', numberOfProducts);
});

/*------------------------------------quantyti box--------------------*/
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});
//----------------------------checkbox for color-----------------------------------
let srcOfImg;
let sizeProduct;
let quantity;
$(document).on('click', '.whiteBox, .blackBox, .blueBox', function(event) {
    let i = document.createElement('i');
    let img = document.createElement('img');
    i.setAttribute('class', 'fas fa-check-circle');
    $('.whiteBox, .blackBox, .blueBox').empty();
    event.target.appendChild(i);
    document.getElementById('productImg').setAttribute('src', './images/' + event.target.id)
    srcOfImg = event.target.id;
});
$(document).on('click', '.sizeS, .sizeM, .sizeXL', function(event) {
    let i = document.createElement('i');
    $('.sizeS, .sizeM, .sizeXL').css('background-color', 'white');
    event.target.style.backgroundColor = 'red';
    event.target.appendChild(i);
    sizeProduct = event.target.id;
});
//number of products in cart
$(document).on('click', '.myButton', function() {
    quantity = $('#inputNumber').val();
    localStorage.setItem('numberOfProducts', parseInt(quantity) + parseInt(localStorage.getItem('numberOfProducts')));
    $('.num-cart-product').html(parseInt(localStorage.getItem('numberOfProducts')));
    let id = localStorage.getItem('justClicked');
    console.log(srcOfImg, sizeProduct, quantity)
    let productObj = JSON.parse(localStorage.getItem(id));
    productObj.quantity = quantity;
    productObj.src = srcOfImg;
    localStorage.setItem(id, JSON.stringify(productObj));


});
//--------------------------end---------------------------------------
//---------------------get money value-------------------------------
let index;
let productArray = [{
        id: 0,
        price: 150000,
        src: './images/wuntitled-9-03.jpg',
        name: 'T-SHIRT'
    },
    {
        id: 1,
        price: 400000,
        src: './images/p-2.png',
        name: 'T-SHIRT'
    },
    {
        id: 2,
        price: 400000,
        src: './images/p-2.png',
        name: 'T-SHIRT'
    },
    {
        id: 3,
        price: 150000,
        src: './images/p-1.png',
        name: 'T-SHIRT'
    },
    {
        id: 4,
        price: 400000,
        src: './images/p-5.png',
        name: 'T-SHIRT'
    },
    {
        id: 5,
        price: 500000,
        src: './images/p-6.png',
        name: 'T-SHIRT'
    },
    {
        id: 6,
        price: 400000,
        src: './images/p-7.png',
        name: 'T-SHIRT'
    },
    {
        id: 7,
        price: 400000,
        src: './images/p-8.png',
        name: 'T-SHIRT'
    },
    {
        id: 8,
        price: 350000,
        src: './images/p-1.png',
        name: 'T-SHIRT'
    },
    {
        id: 9,
        price: 200000,
        src: './images/p-1.png',
        name: 'T-SHIRT'
    }
];

//click on product
$(document).on('click', '.product-img', function(event) {
    localStorage.setItem('justClicked', event.target.id);
    index = event.target.id;
    localStorage.setItem(index, JSON.stringify(productArray[index]));
});