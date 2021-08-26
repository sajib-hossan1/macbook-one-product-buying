//  memory price field
let memoryPriceField = document.getElementById('memory-price-field');

// storage price field
let storagePriceField = document.getElementById('storage-price-field');

// delivery charge field
let deliveryChargeField = document.getElementById('delivery-charge-field');

// best price field
let bestPriceField = document.getElementById('best-price-field');

// total price field
let totalPriceField = document.getElementById('total-price-field');

// total field
let lastTotalPrice = document.getElementById('total-field');



// memory costing 8gb
document.getElementById('memory-price-8GB').addEventListener('click', function () {
    memoryPriceField.innerText = '0';

    // adding to total price
    updateTotal()

})

// memory 16gb
document.getElementById('memory-price-16GB').addEventListener('click', function () {
    memoryPriceField.innerText = '180';

    // adding to total price
    updateTotal()

})



// storage costing 256gb
document.getElementById('default-ssd-price').addEventListener('click', function () {
    storagePriceField.innerText = "0";

    // adding to total price
    updateTotal()
})

// storage costing 512gb
document.getElementById('ssd-price-500GB').addEventListener('click', function () {
    storagePriceField.innerText = "100";

    // adding to total price
    updateTotal()
})

// storage costing 1tb
document.getElementById('ssd-price-1TB').addEventListener('click', function () {
    storagePriceField.innerText = "180";

    // adding to total price
    updateTotal()
})





// delivery charge costing
document.getElementById('default-delivery-charge').addEventListener('click', function () {
    deliveryChargeField.innerText = "0";

    // adding to total price
    updateTotal()
})


document.getElementById('prime-delivery').addEventListener('click', function () {
    deliveryChargeField.innerText = '20';

    // adding to total price
    updateTotal()
})

// update total price
function updateTotal() {
    const productPrice = parseInt(bestPriceField.innerText);
    const memoryPrice = parseInt(memoryPriceField.innerText);
    const storagePrice = parseInt(storagePriceField.innerText);
    const delivaryCharge = parseInt(deliveryChargeField.innerText);
    const totalPrice = productPrice + memoryPrice + storagePrice + delivaryCharge;
    totalPriceField.innerText = totalPrice;
    lastTotalPrice.innerText = totalPrice;
}


// adding promo code
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoCodeField = document.getElementById('promo-code-field');

    if (promoCodeField.value == 'stevekaku') {
        // this is my first code which was wrong and 1 mark has been minus from my fifth assignment mark and i got 59
        /* const discount = parseFloat(lastTotalPrice.innerText) * .20;
        const total = parseFloat(lastTotalPrice.innerText) - discount;
        lastTotalPrice.innerText = total; */

        // this is my new and updated right code
        const discount = parseFloat(totalPriceField.innerText) - parseFloat(totalPriceField.innerText) * .20;
        lastTotalPrice.innerText = discount;
    } else {
        console.log('you put wrong promo code');
    }

    // clear promo input field
    promoCodeField.value = '';

})