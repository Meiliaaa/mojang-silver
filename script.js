document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById("cart-count");

  function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = total;
  }

  function addToCart(nama, harga, qty = 1) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.nama === nama);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ nama, harga, qty });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
  }

  // Produk utama
  const addToCartBtn = document.getElementById("addToCartBtn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const qty = parseInt(document.getElementById("inputQuantity").value) || 1;
      addToCart("Cincin Silver Elegan", 45000, qty);
    });
  }

  // Produk terkait
  const relatedButtons = document.querySelectorAll(".add-related");
  relatedButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const nama = btn.getAttribute("data-nama");
      const harga = parseInt(btn.getAttribute("data-harga"));
      addToCart(nama, harga);
    });
  });

  updateCartBadge();
});
