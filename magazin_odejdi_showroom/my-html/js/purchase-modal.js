document.addEventListener("DOMContentLoaded", function(){
const buyButtons = document.querySelectorAll(".buy-button");
const modal = document.querySelector(".purchase-modal");
const closeModal = document.querySelector(".close-modal");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");

buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
        // Устанавливаем название и цену товара в окне покупки
        const parentProduct = button.closest(".product");
        productName.textContent = parentProduct.querySelector("h2").textContent;
        productPrice.textContent = parentProduct.querySelector("p").textContent;
    });
});

// JavaScript для закрытия окна покупки
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// JavaScript для закрытия окна покупки при клике за пределами окна
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
const payButton = document.querySelector(".pay-button");

payButton.addEventListener("click", () => {
    modal.style.display = "none";
});
})