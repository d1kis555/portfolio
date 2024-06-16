const productContainers = document.querySelectorAll(".product");

productContainers.forEach((container) => {
    const descriptionButton = container.querySelector(".description-button");
    const productDescription = container.querySelector(".product-description");
    const buyButton = container.querySelector(".buy-button");
    const backButton = container.querySelector(".back-button");

    // При нажатии на кнопку "Описание товара" скрываем кнопку покупки и показываем описание
    descriptionButton.addEventListener("click", () => {
        buyButton.style.display = "none";
        productDescription.style.display = "block";
    });

    // При нажатии на кнопку "Назад" скрываем описание и показываем кнопку покупки
    backButton.addEventListener("click", () => {
        buyButton.style.display = "block";
        productDescription.style.display = "none";
    });
});