var cartItems = []; // Массив для хранения товаров в корзине

function openCart() {
  var cart = document.getElementById('cart');
  cart.style.display = 'block';
}

function closeCart() {
  var cart = document.getElementById('cart');
  cart.style.display = 'none';
}

function clearCart() {
  cartItems = []; // Очищаем массив товаров в корзине
  updateCart(); // Обновляем корзину (удаляем все товары)
}

function addToCart(productName, productPrice) {
  cartItems.push({ name: productName, price: productPrice });
  openCart(); // Открываем корзину при добавлении товара
  updateCart();
  updatePaymentTotal();
}
function removeItem(productId) {
    cartItems = cartItems.filter(function(item) {
      return item.id !== productId;
    });
    updateCart();
    
  }
  function updateCart() {
    var cartItemsContainer = document.getElementById('cart-items');
    var totalPrice = 0;
  
    cartItemsContainer.innerHTML = ''; // Очищаем содержимое корзины
  
    cartItems.forEach(function(item) {
      var cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.setAttribute('data-product-id', item.id);
  
      var cartItemName = document.createElement('span');
      cartItemName.classList.add('cart-item-name');
      cartItemName.textContent = item.name + ' - $' + item.price;
  
      cartItem.appendChild(cartItemName);
  
      cartItemsContainer.appendChild(cartItem);
      totalPrice += parseFloat(item.price);
    });
  
    var totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = totalPrice.toFixed(1); // Округляем до двух знаков после запятой
  }

// Обработка клика по кнопке "Очистить корзину"
var clearCartButton = document.querySelector('.clear-cart-button');
clearCartButton.addEventListener('click', clearCart);

// Обработка клика на кнопке "Добавить в корзину"
var addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var productName = button.parentElement.querySelector('h2').textContent;
    var productPrice = parseFloat(button.parentElement.querySelector('p').textContent);
    addToCart(productName, productPrice);
  });
});

// Обработка клика по крестику для закрытия корзины
var closeButton = document.querySelector('.cart-close');
closeButton.addEventListener('click', closeCart);

// Обработка клика по любой части экрана для закрытия корзины
window.addEventListener('click', function(event) {
  var cart = document.getElementById('cart');
  if (event.target == cart) {
    closeCart();
  }
});


