import { useState, useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import MainNavbar from "./components/MainNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🔥 Splash Screen
function SplashScreen() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-900 text-white">
      <h1 className="text-4xl font-bold animate-pulse">
        WorkBridge 🚀
      </h1>
    </div>
  );
}

// 🔥 Layout
function Layout({ dark, setDark }) {
  const location = useLocation();

  const role = localStorage.getItem("role");

  // 🔥 FINAL FIX (ADMIN NAVBAR HIDE)
  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    role === "ADMIN";

  return (
    <>
      {!hideNavbar && <MainNavbar dark={dark} setDark={setDark} />}
      <AppRoutes />
    </>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);

  // 🌙 Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // 🔥 Splash delay (2 sec)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>

      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-black dark:text-white transition-all duration-300">

        {loading ? (
          <SplashScreen />
        ) : (
          <Layout dark={dark} setDark={setDark} />
        )}

        {/* 🔥 Toast */}
        <ToastContainer position="top-right" autoClose={2000} />

      </div>

    </BrowserRouter>
  );
}

export default App;