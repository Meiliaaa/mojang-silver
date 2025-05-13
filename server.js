const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// GET all products
app.get("/products", async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});

// ADD new product
app.post("/products", async (req, res) => {
  const { name, price, image_url } = req.body;
  const result = await pool.query(
    "INSERT INTO products (name, price, image_url) VALUES ($1, $2, $3) RETURNING *",
    [name, price, image_url]
  );
  res.json(result.rows[0]);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
