function openPaymentModal() {
    var modal = document.getElementById('payment-modal');
    modal.style.display = 'block';
}

function closePaymentModal() {
    var modal = document.getElementById('payment-modal');
    modal.style.display = 'none';
}

function updatePaymentTotal() {
    var cartItems = document.getElementsByClassName('cart-item');
    var total = 0;

    for (var i = 0; i < cartItems.length; i++) {
        var priceString = cartItems[i].querySelector('.cart-item-price').textContent;
        var price = parseFloat(priceString.replace('$', ''));
        total += price;
    }

    var paymentTotalElement = document.getElementById('payment-total');
    paymentTotalElement.textContent = total.toFixed(2);
}

// JavaScript для обновления суммы заказа при выборе товаров (пример)
function updateOrderTotal() {
    // Здесь можно добавить код для подсчета общей суммы заказа
    var orderTotal = 15000; // Пример суммы заказа (замените этот код)
    
    // Обновляем значение суммы заказа в модальном окне
    var orderTotalElement = document.getElementById('order-total');
    orderTotalElement.textContent = orderTotal.toFixed(1); // Округляем до двух знаков после запятой
}
var cardPaymentFields = document.querySelector('.card-payment-fields');
var cardPaymentButton = document.querySelector('.card-payment-button');

// Обработчик события выбора оплаты картой
function showCardPaymentFields() {
    cardPaymentFields.style.display = 'block';
}

// Добавьте обработчик события изменения выбранного способа оплаты
var paymentMethods = document.querySelectorAll('input[name="payment-method"]');
paymentMethods.forEach(function (method) {
    method.addEventListener('change', function () {
        if (method.value === 'card') {
            showCardPaymentFields();
        } else {
            cardPaymentFields.style.display = 'none';
        }
    });
});
// Пример вызова функции при выборе товаров (ваша логика может быть другой)
updateOrderTotal();