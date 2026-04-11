import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "USER"
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    try {
      const res = await API.post("/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role
      });

      toast.success(res.data || "Registered successfully ✅");
      navigate("/");

    } catch (err) {
      toast.error(
        err.response?.data ||
        err.message ||
        "Registration failed ❌"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-slate-800 text-white rounded-2xl shadow-2xl p-8 animate-page">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account 🚀
        </h2>

        {/* Inputs */}
        <div className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
          />

        </div>

        {/* Button */}
        <button
          onClick={handleRegister}
          className="w-full mt-6 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
        >
          Register
        </button>

        {/* Link */}
        <p
          onClick={() => navigate("/")}
          className="text-center mt-4 cursor-pointer hover:underline"
        >
          Already have account? Login
        </p>
      </div>
    </div>
  );
}

export default Register;