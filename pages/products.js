import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image_url} alt={product.name} width="100" />
          <h2>{product.name}</h2>
          <p>Rp {product.price}</p>
        </div>
      ))}
    </div>
  );
}
