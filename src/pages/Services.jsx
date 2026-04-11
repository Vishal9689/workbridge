import { useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function Services() {
  const [selected, setSelected] = useState("");
  const [price, setPrice] = useState("");
  const [timeline, setTimeline] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const email = localStorage.getItem("email");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    if (loading) return;

    if (!price || !timeline || !desc) {
      toast.error("Fill all fields ❌");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", selected);
      formData.append("description", desc);
      formData.append("price", price);
      formData.append("timeline", timeline);
      formData.append("user_email", email);

      if (file) {

        // 🔥 SIZE CHECK ADDED
        if (file.size > 5 * 1024 * 1024) {
          toast.error("File too large ❌ (Max 5MB)");
          setLoading(false);
          return;
        }

        formData.append("file", file);
      }

      await API.post("/tasks/create", formData);

      toast.success("Task Posted 🚀");

      setSelected("");
      setPrice("");
      setTimeline("");
      setDesc("");
      setFile(null);

    } catch (err) {
      console.log(err);
      toast.error("Error ❌");
    } finally {
      setLoading(false);
    }
  };

  const ServiceCard = ({ title, items }) => (
    <div className="bg-slate-800 hover:bg-slate-700 transition p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-3 text-indigo-400">
        {title}
      </h2>

      <ul className="text-slate-300 space-y-1 mb-4">
        {items.map((i, idx) => (
          <li key={idx}>• {i}</li>
        ))}
      </ul>

      <button
        onClick={() => setSelected(title)}
        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm"
      >
        Explore
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-8">

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Services 🚀
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        <ServiceCard title="Student Help" items={["Assignment", "PPT", "Reports"]} />
        <ServiceCard title="Coding Help" items={["Bug Fixing", "Projects", "SQL/React"]} />
        <ServiceCard title="Design" items={["Logo", "Poster", "Video Editing"]} />
        <ServiceCard title="Quick Tasks" items={["Data Entry", "Typing", "PDF Work"]} />

      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50">

          <div className="bg-slate-800 p-6 rounded-2xl w-full max-w-md shadow-xl">

            <h2 className="text-xl font-semibold mb-4 text-indigo-400">
              {selected}
            </h2>

            <input
              placeholder="Enter Price ₹"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full mb-3 p-2 rounded bg-slate-700 outline-none"
            />

            <input
              placeholder="Timeline (e.g 2 days)"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full mb-3 p-2 rounded bg-slate-700 outline-none"
            />

            <textarea
              placeholder="Explain your task..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full mb-3 p-2 rounded bg-slate-700 outline-none"
            />

            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full mb-4 p-2 rounded bg-slate-700"
            />

            <div className="flex gap-3">

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg disabled:opacity-50"
              >
                {loading ? "Posting..." : "Post Task 🚀"}
              </button>

              <button
                onClick={() => setSelected("")}
                className="flex-1 bg-slate-600 hover:bg-slate-500 py-2 rounded-lg"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Services;