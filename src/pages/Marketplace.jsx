import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function Marketplace() {

  const [tasks, setTasks] = useState([]);
  const email = localStorage.getItem("email");

  // 🔥 LOAD TASKS (ONLY OPEN)
  const load = () => {
    API.get("/tasks/all").then(res => {
      setTasks(res.data.filter(t => t.status === "OPEN"));
    });
  };

  useEffect(() => {
    load();
  }, []);

  // 🔥 ACCEPT TASK
  const acceptTask = async (task) => {

    if (task.user_email === email) {
      toast.error("This is your task ❌ You can't accept");
      return;
    }

    try {
      await API.put(`/tasks/accept/${task.id}?freelancerEmail=${email}`);
      toast.success("Task Accepted ✅");
      load();
    } catch {
      toast.error("Error accepting task ❌");
    }
  };

  return (
    <div className="p-6 text-white min-h-screen bg-slate-900">

      <h1 className="text-2xl mb-6 text-indigo-400">
        Marketplace 🚀
      </h1>

      {tasks.length === 0 && (
        <p className="text-slate-400">No tasks available</p>
      )}

      {tasks.map(t => (
        <div key={t.id} className="bg-slate-800 p-5 mb-4 rounded-xl shadow">

          <h2 className="text-lg font-semibold">{t.title}</h2>

          <p className="text-slate-300 mt-1">{t.description}</p>

          <p className="mt-2 text-yellow-400 font-semibold">
            ₹{t.price}
          </p>

          <p className="text-sm text-slate-400">
            Timeline: {t.timeline}
          </p>

          <p className="text-sm text-slate-400">
            Status: {t.status}
          </p>

    {/* 🔥 FILE DOWNLOAD (IMPROVED BUTTON) */}
  {t.file_url && (
  <button
    onClick={async () => {
      const response = await fetch(t.file_url);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");

      a.href = url;
      a.download = t.title || "file";

      document.body.appendChild(a);
      a.click();
      a.remove();
    }}
    className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
  >
    ⬇ Download File
  </button>
)}

          {/* ❌ OWN TASK MESSAGE */}
          {t.user_email === email && (
            <p className="text-red-400 mt-2">
              ⚠️ This is your task
            </p>
          )}

          {/* 🔥 ACCEPT BUTTON */}
          {t.status === "OPEN" && t.user_email !== email && (
            <button
              onClick={() => acceptTask(t)}
              className="mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
            >
              Accept Task ✅
            </button>
          )}

        </div>
      ))}

    </div>
  );
}

export default Marketplace;