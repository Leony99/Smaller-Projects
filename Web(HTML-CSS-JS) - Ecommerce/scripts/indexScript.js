//Slider movement
const slides = document.querySelector(".slides");
const radios = document.querySelectorAll(".slide-box .nav input");

let counter = 1;
function slideChange() {
    if(counter != slides.childElementCount) {
        radios[counter].checked = true;
        slides.scrollLeft += slides.clientWidth;
        counter++;
    } else {
        radios[0].checked = true;
        slides.scrollLeft = 0;
        counter = 1;
    }
}
let timer = setInterval(slideChange, 5000);

radios.forEach(function(radio, index) {
    radio.addEventListener("change", function() {
        slides.scrollLeft = index * slides.clientWidth;
        counter = index + 1;

        clearInterval(timer);
        timer = setInterval(slideChange, 5000);
    });
});

//Arrow nav
const showcaseBox = document.querySelector(".showcase-box .showcase-products");
const arrows = document.querySelectorAll(".showcase-nav .arrow");

arrows.forEach(function(elem) {
    elem.addEventListener("click", function() {
        if(elem.classList[1] === "arrow-right") {
            showcaseBox.scrollLeft += showcaseBox.clientWidth * 0.8;
        }
        else {
            showcaseBox.scrollLeft -= showcaseBox.clientWidth * 0.8;
        }
    });
});

//Redirect to product.html
function redirectToProductPage(clickedDiv) {
    var image = clickedDiv.getAttribute("data-image");
    var name = clickedDiv.getAttribute("data-name");
    var price = clickedDiv.getAttribute("data-price");

    var url = 'product.html?image=' + encodeURIComponent(image) +
                '&name=' + encodeURIComponent(name) +
                '&price=' + encodeURIComponent(price);

    window.location.href = url;
}