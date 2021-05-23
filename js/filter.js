const age1 = document.getElementById('age1')
const age2 = document.getElementById('age2')
const age3 = document.getElementById('age3')
const age4 = document.getElementById('age4')

const newArrival = document.getElementById('new-arrival')
const products = newArrival.childNodes[3]
console.log(products)

function removeAllChildNodes(value) {
    $(`.${'a' + value}`).addClass('displayNone')
}
age1.onclick = function(e) {
    $('.displayNone').removeClass('displayNone')
    removeAllChildNodes('250')
    removeAllChildNodes('350')
    removeAllChildNodes('450')
}
age2.onclick = function(e) {
    $('.displayNone').removeClass('displayNone')

    removeAllChildNodes('150')
    removeAllChildNodes('450')
    removeAllChildNodes('350')
}
age3.onclick = function(e) {
    $('.displayNone').removeClass('displayNone')
    removeAllChildNodes('150')
    removeAllChildNodes('250')
}

age4.onclick = function() {
    $('.displayNone').removeClass('displayNone')

}