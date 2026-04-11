import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900 text-black dark:text-white">

      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-slate-800 p-6 hidden md:flex flex-col justify-between shadow-lg">

        <div>
          <h2 className="text-2xl font-bold text-indigo-500 mb-10">
            WorkBridge 🚀
          </h2>

          <ul className="space-y-4">
            <li className="hover:text-indigo-500 cursor-pointer">🏠 Dashboard</li>
            <li className="hover:text-indigo-500 cursor-pointer">📋 Tasks</li>
            <li className="hover:text-indigo-500 cursor-pointer">👤 Profile</li>
          </ul>
        </div>

        <p className="text-sm text-slate-400">© 2026 WorkBridge</p>
      </div>

      {/* Main */}
      <div className="flex-1 p-6">

        {/* Topbar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard 👋</h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white shadow"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-700 text-white shadow-lg hover:scale-105 transition">
            <h3>Total Tasks</h3>
            <p className="text-4xl font-bold mt-2">12</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg hover:scale-105 transition">
            <h3>Completed</h3>
            <p className="text-4xl font-bold mt-2">8</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg hover:scale-105 transition">
            <h3>Pending</h3>
            <p className="text-4xl font-bold mt-2">4</p>
          </div>

        </div>

        {/* Activity + Tasks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          {/* Recent Tasks */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Tasks</h2>

            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span>Build Login System</span>
                <span className="text-green-500">Done</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>JWT Authentication</span>
                <span className="text-yellow-500">Pending</span>
              </div>

              <div className="flex justify-between">
                <span>Dashboard UI</span>
                <span className="text-green-500">Done</span>
              </div>
            </div>
          </div>

          {/* Activity Panel */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Activity</h2>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>✔ Task completed successfully</li>
              <li>🆕 New task posted</li>
              <li>💰 Payment received</li>
              <li>📢 New freelancer joined</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;