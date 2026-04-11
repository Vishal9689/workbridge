import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function MainNavbar({ dark, setDark }) {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(
    localStorage.getItem("photo") || ""
  );

  // 🔥 update photo
  useEffect(() => {
    const updatePhoto = () => {
      setProfilePhoto(localStorage.getItem("photo"));
    };

    window.addEventListener("profileUpdated", updatePhoto);
    return () => window.removeEventListener("profileUpdated", updatePhoto);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow px-6 py-3">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1
          onClick={() => navigate("/home")}
          className="text-xl font-bold text-indigo-500 cursor-pointer"
        >
          WorkBridge 🚀
        </h1>

        {/* 🔥 Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm items-center">
          <span onClick={() => navigate("/home")} className="cursor-pointer">Home</span>
          <span onClick={() => navigate("/market")} className="cursor-pointer">Marketplace</span>
          <span onClick={() => navigate("/accepted")} className="cursor-pointer">Accepted</span>
          <span onClick={() => navigate("/payments")} className="cursor-pointer">Payments 💰</span>
          <span onClick={() => navigate("/services")} className="cursor-pointer">Services</span>
          <span onClick={() => navigate("/about")} className="cursor-pointer">About</span>
         <span onClick={() => navigate("/mytasks")} className="cursor-pointer">
  My Tasks 📊
</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Theme */}
          <button
            onClick={() => setDark(!dark)}
            className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded"
          >
            {dark ? "🌞" : "🌙"}
          </button>

          {/* Profile */}
          <img
            src={profilePhoto || "/default.png"}
            onClick={() => navigate("/profile")}
            className="w-9 h-9 rounded-full cursor-pointer border object-cover"
          />

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="hidden md:block px-2 py-1 bg-red-500 text-white rounded"
          >
            Logout
          </button>

          {/* 🔥 Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* 🔥 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm bg-slate-100 dark:bg-slate-700 p-4 rounded">

          <span onClick={() => navigate("/home")}>Home</span>
          <span onClick={() => navigate("/market")}>Marketplace</span>
          <span onClick={() => navigate("/accepted")}>Accepted</span>
          <span onClick={() => navigate("/payments")}>Payments 💰</span>
          <span onClick={() => navigate("/services")}>Services</span>
          <span onClick={() => navigate("/about")}>About</span>
          <span onClick={() => navigate("/mytasks")}>My Tasks 📊</span>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Logout
          </button>

        </div>
      )}
    </div>
  );
}

export default MainNavbar;