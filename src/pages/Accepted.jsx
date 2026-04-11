import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function Accepted() {

  const [tasks, setTasks] = useState([]);
  const [files, setFiles] = useState({});
  const email = localStorage.getItem("email");

  // 🔥 LOAD TASKS
  const load = () => {
    API.get("/tasks/all").then(res => {
      setTasks(res.data.filter(t => t.freelancer_email === email));
    });
  };

  useEffect(() => {
    load();
  }, []);

  // 🔥 UPDATE PROGRESS (ONLY UPDATE — NO COMPLETE)
  const updateProgress = async (id, value) => {
    try {
      await API.put(`/tasks/progress/${id}?value=${value}`);
      toast.success(`Progress updated to ${value}% 🚀`);
      load();
    } catch {
      toast.error("Error updating progress ❌");
    }
  };

  // 🔥 FILE CHANGE
  const handleFile = (id, file) => {
    setFiles(prev => ({
      ...prev,
      [id]: file
    }));
  };

  // 🔥 COMPLETE TASK WITH FILE (ONLY BUTTON CLICK)
  const completeTask = async (id) => {
    try {

      // 🔥 file required
      if (!files[id]) {
        toast.error("Please upload file first ❌");
        return;
      }

      const formData = new FormData();
      formData.append("file", files[id]);

      // ❌ headers काढले (IMPORTANT FIX)
      await API.put(`/tasks/complete/${id}`, formData);

      toast.success("Task Submitted with File ✅");
      load();

    } catch {
      toast.error("Error completing task ❌");
    }
  };

  return (
    <div className="p-6 text-white min-h-screen bg-slate-900">

      <h1 className="text-2xl mb-6 text-indigo-400">
        Accepted Tasks 🚀
      </h1>

      {tasks.length === 0 && (
        <p className="text-slate-400">No accepted tasks yet</p>
      )}

      {tasks.map(t => (
        <div key={t.id} className="bg-slate-800 p-5 mb-4 rounded-xl shadow">

          <h2 className="text-lg font-semibold">{t.title}</h2>

          <p className="text-sm text-slate-400">
            Status: {t.status}
          </p>

          <p className="text-sm text-yellow-400 mt-1">
            Progress: {t.progress || 0}%
          </p>

          {/* 💰 PAYMENT MESSAGE */}
          {t.payment_status === "DONE" && (
            <p className="text-green-400 mt-2">
              💰 Payment secured, start work 🚀
            </p>
          )}

          {/* 🔥 Progress Buttons (ONLY UPDATE) */}
          {t.status !== "COMPLETED" && (
            <div className="flex gap-2 mt-3 flex-wrap">
              {[10, 30, 50, 90].map(p => (
                <button
                  key={p}
                  onClick={() => updateProgress(t.id, p)} // ✅ SAFE
                  className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-sm"
                >
                  {p}%
                </button>
              ))}
            </div>
          )}

          {/* 🔥 FILE UPLOAD */}
          {t.status !== "COMPLETED" && (
            <input
              type="file"
              onChange={(e) => handleFile(t.id, e.target.files[0])}
              className="mt-3"
            />
          )}

          {/* 🔥 COMPLETE BUTTON (ONLY HERE COMPLETE) */}
          {t.status !== "COMPLETED" && (
            <button
              onClick={() => completeTask(t.id)} // ✅ ONLY HERE
              className="mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
            >
              Submit Work ✅
            </button>
          )}

          {/* ✅ DONE */}
          {t.status === "COMPLETED" && (
            <p className="mt-3 text-green-400 font-semibold">
              ✔ Task Submitted Successfully
            </p>
          )}

        </div>
      ))}

    </div>
  );
}

export default Accepted;