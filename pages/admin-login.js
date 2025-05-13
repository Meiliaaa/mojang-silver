import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export default function AdminLogin() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken(); // Ambil token
      localStorage.setItem("adminToken", token); // Simpan token di local storage
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div>
      <h1>Login Admin</h1>
      <button onClick={handleLogin}>Login dengan Google</button>
    </div>
  );
}
