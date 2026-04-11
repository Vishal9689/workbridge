import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function Payments() {

  const [tasks, setTasks] = useState([]);
  const email = localStorage.getItem("email");

  // 🔥 LOAD ACCEPTED TASKS (USER SIDE)
  const load = () => {
    API.get("/tasks/all").then(res => {
      setTasks(
        res.data.filter(
          t => t.user_email === email && t.status === "ACCEPTED"
        )
      );
    });
  };

  useEffect(() => {
    load();
  }, []);

  // 💰 PAYMENT
  const pay = async (id) => {
    try {
      await API.put(`/tasks/pay/${id}`);
      toast.success("Payment Done 💰 Task started!");
      load(); // 🔄 refresh
    } catch {
      toast.error("Payment failed ❌");
    }
  };

  return (
    <div className="p-6 text-white min-h-screen bg-slate-900">

      <h1 className="text-2xl mb-6 text-indigo-400">
        Payments 💰
      </h1>

      {tasks.length === 0 && (
        <p className="text-slate-400">No pending payments</p>
      )}

      {tasks.map(t => (
        <div key={t.id} className="bg-slate-800 p-5 mb-4 rounded-xl shadow">

          <h2 className="text-lg font-semibold">{t.title}</h2>

          <p className="text-yellow-400 mt-2 font-semibold">
            ₹{t.price}
          </p>

          <p className="text-sm text-slate-400">
            Timeline: {t.timeline}
          </p>

          {/* 🔥 ACCEPT MESSAGE */}
          <p className="text-blue-400 mt-2">
            📢 This task is accepted by{" "}
            <span className="font-semibold">{t.freelancer_email}</span>
          </p>

          {/* 🔥 PAY MESSAGE */}
          <p className="text-yellow-300 mt-1">
            💰 Pay now to start the work process
          </p>

          {/* 🔥 BUTTON */}
          <button
            onClick={() => pay(t.id)}
            className="mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
          >
            Pay Now 💳
          </button>

        </div>
      ))}

    </div>
  );
}

export default Payments;