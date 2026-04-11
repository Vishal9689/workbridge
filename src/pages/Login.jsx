import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

 const handleLogin = async () => {

  // 🔥 ADMIN LOGIN (UPDATED)
 if (
  data.email === "admin968911@gmail.com" &&
  (data.password === "vishal@968911" || data.password === "vishal@96891173")
) {
  localStorage.setItem("role", "ADMIN");

  // 🔥 ADD THIS (DUMMY TOKEN)
  localStorage.setItem("token", "admin-token");

  toast.success("Admin Login 👑");
  navigate("/admin");
  return;
}

  try {
    setLoading(true);

  const res = await API.post("/auth/login", {
  email: data.email,
  password: data.password
});

// 🔥 SAVE DATA
localStorage.setItem("email", res.data.email);
localStorage.setItem("photo", res.data.photo || "");

// 🔥 Navbar refresh
window.dispatchEvent(new Event("profileUpdated"));

console.log("LOGIN RESPONSE:", res.data);
// 🔐 save correct data
localStorage.setItem("token", res.data.token); // 🔥 token fix
localStorage.setItem("email", res.data.email); // 🔥 single line
localStorage.setItem("role", "USER");

// 🔥 PROFILE FIX
localStorage.setItem("photo", res.data.photo || "");

// 🔥 Navbar refresh
window.dispatchEvent(new Event("profileUpdated"));

    toast.success("Login successful 🔥");

    navigate("/home");

  } catch (err) {
    toast.error("Invalid credentials ❌");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-slate-800 text-white rounded-2xl shadow-2xl p-8 animate-page">

        <h2 className="text-3xl font-semibold text-center mb-6">
          Welcome Back 👋
        </h2>

        {/* Inputs */}
        <div className="space-y-4">

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition duration-300 flex items-center justify-center"
        >
          {loading ? "Signing in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-grow h-px bg-slate-600"></div>
          <span className="px-2 text-sm text-slate-400">OR</span>
          <div className="flex-grow h-px bg-slate-600"></div>
        </div>

        {/* Register */}
        <p
          onClick={() => navigate("/register")}
          className="text-center text-sm text-slate-400 hover:text-white cursor-pointer transition"
        >
          Don’t have an account? Register
        </p>

        {/* 🔥 Admin Hint (optional UI) */}
        <p className="text-xs text-center mt-4 text-slate-500">
          Admin login available
        </p>

      </div>
    </div>
  );
}

export default Login;