import { useState } from "react";

export default function ProductCard({ product }) {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, product]);
    console.log("Keranjang saat ini:", cart);
  };

  return (
    <div className="card">
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <button className="btn btn-outline-dark mt-auto" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
