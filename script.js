document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;
    const cartBadge = document.querySelector(".badge");

    // Tombol add to cart utama
    const mainAddToCartBtn = document.querySelector(".flex-shrink-0");
    if (mainAddToCartBtn) {
        mainAddToCartBtn.addEventListener("click", () => {
            const qty = parseInt(document.getElementById("inputQuantity").value) || 1;
            cartCount += qty;
            cartBadge.textContent = cartCount;
        });
    }

    // Semua tombol "Add to cart" di bagian produk terkait
    const addToCartButtons = document.querySelectorAll(".card-footer a");
    addToCartButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            cartCount += 1;
            cartBadge.textContent = cartCount;
        });
    });
});
