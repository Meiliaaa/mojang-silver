const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "shop_db",
  password: "your_password",
  port: 5432,
});

module.exports = pool;
