import { useEffect, useState } from "react";
import API from "../services/api";

function MyTasks() {

  const [tasks, setTasks] = useState([]);
  const email = localStorage.getItem("email");

  const load = () => {
    API.get("/tasks/all").then(res => {
      setTasks(res.data.filter(t => t.user_email === email));
    });
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-6 text-white">

      <h1 className="text-2xl mb-5">My Tasks 📊</h1>

      {tasks.map(t => (
        <div key={t.id} className="bg-slate-800 p-4 mb-4 rounded">

          <h2>{t.title}</h2>

          <p>Status: {t.status}</p>
          <p>Progress: {t.progress}%</p>

          {/* 🔥 FILE DOWNLOAD */}
          {t.status === "COMPLETED" && t.submission_file && (
            <a
              href={t.submission_file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-400 underline"
            >
              Download Work 📥
            </a>
          )}

          {/* 🔥 APPROVE / REJECT */}
          {t.status === "COMPLETED" && t.approval_status === "PENDING" && (
            <div className="mt-3 flex gap-3">

              <button
                onClick={async () => {
                  await API.put(`/tasks/approve/${t.id}`);
                  load(); // 🔥 refresh
                }}
                className="bg-green-500 px-3 py-1 rounded"
              >
                Approve ✅
              </button>

              <button
                onClick={async () => {
                  await API.put(`/tasks/reject/${t.id}`);
                  load(); // 🔥 refresh
                }}
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

export default MyTasks;