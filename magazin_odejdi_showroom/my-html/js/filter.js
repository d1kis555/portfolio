const filterButtons = document.querySelectorAll(".filter-button");
const products = document.querySelectorAll(".product");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        filterProducts(filter);
    });
});

function filterProducts(category) {
    products.forEach((product) => {
        if (category === "all" || product.classList.contains(category)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}