import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Dashboard from "../pages/Dashboard";
import Marketplace from "../pages/Marketplace";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Accepted from "../pages/Accepted";
import Payments from "../pages/Payments";
import Admin from "../pages/Admin";
import Audit from "../pages/Audit";

// 🔥 NEW PAGE (TRACKING)
import MyTasks from "../pages/MyTasks";

function AppRoutes() {
  return (
    <Routes>

      {/* 🔐 AUTH */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 🌐 USER */}
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/market" element={<Marketplace />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/accepted" element={<Accepted />} />
      <Route path="/payments" element={<Payments />} />

      {/* 🔥 NEW TRACKING PAGE */}
      <Route path="/mytasks" element={<MyTasks />} />

      {/* 👑 ADMIN */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/audit" element={<Audit />} />

    </Routes>
  );
}

export default AppRoutes;