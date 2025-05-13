const admin = require("firebase-admin");
const serviceAccount = require("./firebaseServiceAccountKey.json"); // Unduh dari Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

module.exports = auth;
const auth = require("./firebaseAdmin");

const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Ambil token dari header
    const decodedToken = await auth.verifyIdToken(token);
    if (!decodedToken.admin) return res.status(403).json({ message: "Unauthorized" });
    
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
app.post("/products", verifyAdmin, async (req, res) => {
  const { name, price, image_url } = req.body;
  const result = await pool.query(
    "INSERT INTO products (name, price, image_url) VALUES ($1, $2, $3) RETURNING *",
    [name, price, image_url]
  );
  res.json(result.rows[0]);
});
