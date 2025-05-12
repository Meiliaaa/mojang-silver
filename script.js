import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2>Keranjang Belanja</h2>
      <button onClick={() => addToCart({ name: "Produk A", price: 100 })}>
        Tambah Produk A
      </button>
      <button onClick={() => addToCart({ name: "Produk B", price: 200 })}>
        Tambah Produk B
      </button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Rp{item.price}
            <button onClick={() => removeFromCart(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
