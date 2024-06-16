function showDescription(button) {
    var product = button.parentElement;
    var descriptionButton = product.querySelector('.description-button');
    var description = product.querySelector('.product-description');
    
    // Скрываем фотографию товара, цену, название и кнопку "Добавить в корзину"
    var productImage = product.querySelector('img');
    var productName = product.querySelector('h2');
    var productPrice = product.querySelector('p');
    var addToCartButton = product.querySelector('.buy-button');
    
    productImage.style.display = 'none';
    productName.style.display = 'none';
    productPrice.style.display = 'none';
    addToCartButton.style.display = 'none';
    
    // Отображаем описание товара и кнопку "Назад"
    description.style.display = 'block';
    descriptionButton.style.display = 'none';
    var backButton = description.querySelector('.back-button');
    backButton.style.display = 'block';
}

// JavaScript для возврата к содержимому товара
function showContent(button) {
    var product = button.parentElement.parentElement;
    var descriptionButton = product.querySelector('.description-button');
    var description = product.querySelector('.product-description');
    
    // Отображаем фотографию товара, цену, название и кнопку "Добавить в корзину"
    var productImage = product.querySelector('img');
    var productName = product.querySelector('h2');
    var productPrice = product.querySelector('p');
    var addToCartButton = product.querySelector('.buy-button');
    
    productImage.style.display = 'block';
    productName.style.display = 'block';
    productPrice.style.display = 'block';
    addToCartButton.style.display = 'block';
    
    // Скрываем описание товара и кнопку "Назад"
    description.style.display = 'none';
    descriptionButton.style.display = 'block';
    button.style.display = 'none';
}