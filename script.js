document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;
    const cartBadge = document.querySelector(".badge");

    // Tombol add to cart utama (produk utama di halaman)
    const mainAddToCartBtn = document.querySelector(".flex-shrink-0");
    if (mainAddToCartBtn) {
        mainAddToCartBtn.addEventListener("click", () => {
            const qtyInput = document.getElementById("inputQuantity");
            const quantity = parseInt(qtyInput.value) || 1;
            cartCount += quantity;
            cartBadge.textContent = cartCount;
        });
    }

    // Semua tombol "Add to cart" dari produk lainnya
    const addToCartButtons = document.querySelectorAll(".card-footer a.btn");
    addToCartButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // mencegah reload halaman
            cartCount += 1;
            cartBadge.textContent = cartCount;
        });
    });
});
