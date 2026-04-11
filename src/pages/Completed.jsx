import { useEffect, useState } from "react";
import API from "../services/api";

function Completed() {

  const [tasks, setTasks] = useState([]);
  const email = localStorage.getItem("email");

  const load = () => {
    API.get("/tasks/all").then(res => {
      setTasks(
        res.data.filter(t => 
          t.user_email === email && t.status === "COMPLETED"
        )
      );
    });
  };

  useEffect(() => {
    load();
  }, []);

  const approve = async (id) => {
    await API.put(`/tasks/approve/${id}`);
    load();
  };

  const reject = async (id) => {
    await API.put(`/tasks/reject/${id}`);
    load();
  };

  return (
    <div className="p-6 text-white">

      <h1>Completed Tasks ✅</h1>

      {tasks.map(t => (
        <div key={t.id} className="bg-slate-800 p-4 mb-3 rounded">

          <h2>{t.title}</h2>

          {/* 🔥 FINAL DOWNLOAD FIX */}
          {t.submission_file && (
            <a
              href={`http://localhost:8080/tasks/download?fileName=${t.submission_file.split("/").pop()}`}
              className="text-blue-400 mt-2 underline"
            >
              Download Work 📥
            </a>
          )}

          <p className="mt-2">Status: {t.approval_status}</p>

          {t.approval_status === "PENDING" && (
            <div className="flex gap-2 mt-2">

              <button
                onClick={() => approve(t.id)}
                className="bg-green-500 px-3 py-1 rounded"
              >
                Approve ✅
              </button>

              <button
                onClick={() => reject(t.id)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Reject ❌
              </button>

            </div>
          )}

        </div>
      ))}

    </div>
  );
}

export default Completed;