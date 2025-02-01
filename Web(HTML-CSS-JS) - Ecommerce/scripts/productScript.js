// Obtenha os parâmetros da URL
var params = new URLSearchParams(window.location.search);
var image = params.get('image');
var name = params.get('name');
var price = parseFloat(params.get('price'));

productImg = document.querySelector(".product-box img");
productImg.src = image;
productName = document.querySelector(".product-name");
productName.innerText = name;
productPriceDiscount = document.querySelector(".value-price-discount");
productPriceDiscount.innerText = (price * 0.95).toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});
productPriceNormal = document.querySelector(".value-price-normal");
productPriceNormal.innerText = price.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});

//Quantity counter
function decrement() {
    var counterElement = document.getElementById('counterValue');
    var currentValue = parseInt(counterElement.innerText, 10);
    if (currentValue > 1) {
      counterElement.innerText = currentValue - 1;
    }
}

function increment() {
    var counterElement = document.getElementById('counterValue');
    var currentValue = parseInt(counterElement.innerText, 10);
    counterElement.innerText = currentValue + 1;
}
