let numberOfProducts = parseInt(localStorage.getItem('numberOfProducts'));
$('.num-cart-product').html(numberOfProducts);
localStorage.setItem('numberOfProducts', numberOfProducts);

let index = localStorage.getItem('justClicked');
let productObj = JSON.parse(localStorage.getItem(index));
let img = document.createElement('img');
img.src = './images/' + productObj.src;
let price = productObj.price;
let quantity = productObj.quantity;
let amount = parseInt(price) * parseInt(quantity);
$('#product').append(img);
$('#price').html(price);
$('#quantity').html(quantity);
$('#amount').html(amount);