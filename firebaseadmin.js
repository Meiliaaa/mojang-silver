const admin = require("firebase-admin");
const serviceAccount = require("./firebaseServiceAccountKey.json"); // Unduh dari Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

module.exports = auth;
