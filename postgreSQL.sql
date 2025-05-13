CREATE DATABASE shop_db;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price INT,
  image_url TEXT
);
