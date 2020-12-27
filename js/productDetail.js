let _index = localStorage.getItem('justClicked');
let productObj = JSON.parse(localStorage.getItem(_index));
let price = productObj.price;
$('p-price-cart').html(price);
document.getElementById('productImg').src = productObj.src;