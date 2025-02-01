//Cart show
const cartBtn = document.querySelector(".cart-icon");
const cartBtnImg = document.querySelector(".cart-icon img");
const cart = document.querySelector(".cart");
const productBuyBtn = document.querySelector(".product-info .buy-button");

cartBtn.addEventListener("click", function() {
    cart.style.left = "calc(100vw - 400px)";
});

document.body.addEventListener("click", function(event) {
    if (!cart.contains(event.target)
    && event.target !== cart
    && event.target !== cartBtn
    && event.target !== cartBtnImg
    && event.target !== productBuyBtn) {
        cart.style.left = "100vw";
    }
});

//Search-box transform
const body = document.querySelector("body");
const searchBox = document.querySelector(".menu .search-box");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const searchButtonImg = document.querySelector(".search-button img");

searchButton.addEventListener("click", function(event) {
    if (searchBox.classList.contains("search-box-closed")) {
        event.preventDefault();
        searchBox.classList.remove("search-box-closed");
        searchInput.classList.remove("search-input-closed");
        searchButton.classList.remove("search-button-closed");
        searchInput.focus();
    }
});

body.addEventListener("click", function(event) {
    if (event.target !== searchButtonImg
        && event.target !== searchButton
        && event.target !== searchInput
        && event.target !== searchBox) {
        searchBox.classList.add("search-box-closed");
        searchInput.classList.add("search-input-closed");
        searchButton.classList.add("search-button-closed");
    }
});

//CartList
var listaCarrinho = [];

function adicionarAoCarrinho() {
    var imgSrc = document.querySelector(".product-image img").src;
    var nomeProduto = document.querySelector(".product-name").innerText;
    var precoNormal = document.querySelector(".value-price-normal").innerText;
    var quantidade = document.getElementById("counterValue").innerText;

    var produto = {
        imgSrc: imgSrc,
        nome: nomeProduto,
        preco: precoNormal,
        quantidade: quantidade
    };

    listaCarrinho.push(produto);
    atualizarCarrinho();
    cart.style.left = "calc(100vw - 400px)";
}

function atualizarCarrinho() {
    var cartProductsContainer = document.querySelector('.cart-products');
    cartProductsContainer.innerHTML = '';

    listaCarrinho.forEach(function(produto) {
        // Criação da div do carrinho
        var cartProduct = document.createElement('div');
        cartProduct.className = 'cart-product';

        // Criação da imagem
        var img = document.createElement('img');
        img.src = produto.imgSrc;

        // Criação da div de informações do produto
        var cartProductInfo = document.createElement('div');
        cartProductInfo.className = 'cart-product-info';

        // Criação dos parágrafos com informações do produto
        var nomeParagrafo = document.createElement('p');
        nomeParagrafo.textContent = produto.nome;

        var precoParagrafo = document.createElement('p');
        precoParagrafo.textContent = 'R$ ' + produto.preco;

        var quantidadeParagrafo = document.createElement('p');
        quantidadeParagrafo.textContent = 'Quant: ' + produto.quantidade;

        // Criação do botão de remover
        var btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', function() {
            // Remove o produto da listaCarrinho e atualiza a exibição do carrinho
            listaCarrinho.splice(listaCarrinho.indexOf(produto), 1);
            atualizarCarrinho();
        });

        // Adiciona os elementos criados à div do carrinho e à div container
        cartProduct.appendChild(img);
        cartProductInfo.appendChild(nomeParagrafo);
        cartProductInfo.appendChild(precoParagrafo);
        cartProductInfo.appendChild(quantidadeParagrafo);
        cartProductInfo.appendChild(btnRemover);
        cartProduct.appendChild(cartProductInfo);
        cartProductsContainer.appendChild(cartProduct);
    });
}



