//Remove item from cart
var removeCardElement = document.getElementsByClassName('remove-item');
for (var i = 0; i < removeCardElement.length; i++) {
    var removeBtn = removeCardElement[i];
    removeBtn.addEventListener('click', removeCartItem);
};
// cart quantity input
var quantityInputs = document.getElementsByClassName('cart-quantity-input');
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChange)
}

function quantityChange(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal()
}


function removeCartItem(event) {
    var removeBtnClicked = event.target;
    removeBtnClicked.parentElement.parentElement.parentElement.remove();
    updateCartTotal()
};


// Update cart total
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-item')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('sub-total')[0].innerText = '$' + total;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}