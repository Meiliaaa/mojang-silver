// Fungsi untuk nambah produk utama ke keranjang
document.addEventListener('DOMContentLoaded', function () {
  const addToCartBtn = document.getElementById('addToCartBtn');
  const quantityInput = document.getElementById('inputQuantity');

  addToCartBtn?.addEventListener('click', function () {
    const product = {
      id: 'cincin-silver-elegan',
      name: 'Cincin Silver Elegan',
      price: 45000,
      quantity: parseInt(quantityInput.value),
      image: 'cincin.jpg'
    };

    addToCart(product);
  });

  // Fungsi untuk produk terkait (pakai class .add-related)
  const relatedBtns = document.querySelectorAll('.add-related');
  relatedBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      const product = {
        id: btn.dataset.nama.toLowerCase().replace(/\s+/g, '-'),
        name: btn.dataset.nama,
        price: parseInt(btn.dataset.harga),
        quantity: 1,
        image: 'cincin1.jpg'
      };

      addToCart(product);
    });
  });

  // Update badge jumlah item di cart
  updateCartCount();
});

// Fungsi utama untuk menambahkan ke cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const index = cart.findIndex(item => item.id === product.id);
  if (index !== -1) {
    cart[index].quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert('Produk berhasil ditambahkan ke keranjang!');
}

// Fungsi untuk update jumlah cart di navbar
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const badge = document.getElementById('cart-count');
  if (badge) badge.textContent = totalItems;
}
