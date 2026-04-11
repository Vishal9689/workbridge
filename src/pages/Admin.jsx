import { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavbar from "../components/AdminNavbar";

function Admin() {

  const [tasks, setTasks] = useState([]);

  const load = () => {
    API.get("/tasks/all").then(res => setTasks(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    load();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <AdminNavbar />

      <div className="p-6">

        <h1 className="text-2xl text-yellow-400 mb-6">
          Dashboard 👑
        </h1>

        {tasks.length === 0 && (
          <p className="text-slate-400">No tasks available</p>
        )}

        {tasks.map(t => (
          <div key={t.id} className="bg-slate-800 p-5 mb-4 rounded-xl shadow">

            <h2 className="text-lg font-semibold">{t.title}</h2>

            <p className="text-sm text-slate-400">
              User: {t.user_email}
            </p>

            <p className="text-sm text-slate-400">
              Freelancer: {t.freelancer_email || "Not Assigned"}
            </p>

            {/* 🔥 UPI DISPLAY */}
            {t.freelancer_upi ? (
              <p className="text-green-400 mt-1">
                💰 UPI: {t.freelancer_upi}
              </p>
            ) : (
              <p className="text-slate-500 mt-1">
                UPI Not Available
              </p>
            )}

            <p className="mt-2">
              Status: <span className="text-indigo-400">{t.status}</span>
            </p>

            <p>
              Payment:{" "}
              <span
                className={
                  t.payment_status === "DONE"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {t.payment_status}
              </span>
            </p>

            {/* 🔥 READY FOR PAYMENT */}
            {t.status === "COMPLETED" && (
              <p className="text-green-500 font-semibold mt-2">
                ✔ Ready for Payment
              </p>
            )}

            {/* 🔥 DELETE BUTTON */}
            <button
              onClick={() => deleteTask(t.id)}
              className="mt-3 bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Delete ❌
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Admin;