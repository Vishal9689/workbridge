import { useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="bg-black text-white flex justify-between px-6 py-3">

      <h1 className="font-bold text-yellow-400 cursor-pointer"
          onClick={() => navigate("/admin")}>
        Admin Panel 👑
      </h1>

      <div className="flex gap-6">
        <span onClick={() => navigate("/admin")} className="cursor-pointer">
          Home
        </span>

        <span onClick={() => navigate("/audit")} className="cursor-pointer">
          Auditing 📊
        </span>

        <span onClick={logout} className="cursor-pointer text-red-400">
          Logout
        </span>
      </div>

    </div>
  );
}

export default AdminNavbar;