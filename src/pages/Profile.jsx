import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Profile() {
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [preview, setPreview] = useState("");
  const [upi, setUpi] = useState("");

  const email = localStorage.getItem("email");

  // 🔥 LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const savedPhoto = localStorage.getItem("photo");
    if (savedPhoto) {
      setPreview(savedPhoto);
    }
  }, []);

  // 🔥 FILE UPLOAD (ONLY LOCAL)
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);

      // 🔥 SAVE LOCALLY
      localStorage.setItem("photo", reader.result);

      // 🔥 NAVBAR UPDATE
      window.dispatchEvent(new Event("profileUpdated"));
    };

    reader.readAsDataURL(file);
  };

  // 🔥 SAVE BUTTON (ONLY UI)
  const handleSave = () => {
    toast.success("Profile Saved (Local) ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white">

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow w-80 text-center">

        {/* ✅ FIXED IMAGE (DEFAULT + USER IMAGE) */}
        <img
          src={preview || "/default.png"}
          onError={(e) => (e.target.src = "/default.png")}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top border-2 border-indigo-500"
          alt="profile"
        />

        <input type="file" onChange={handleFile} className="mb-3" />

        <textarea
          placeholder="Enter bio..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full mb-2 p-2 rounded text-black"
        />

        <input
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-3 p-2 rounded text-black"
        />

        <input
          placeholder="Enter UPI ID"
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
          className="w-full mb-3 p-2 rounded text-black"
        />

        <button
          onClick={handleSave}
          className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded"
        >
          Save Profile
        </button>

      </div>
    </div>
  );
}

export default Profile;