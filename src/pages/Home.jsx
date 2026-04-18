import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-center bg-cover blur-sm scale-105"
        style={{
          backgroundImage:
            "url('https://chatgpt.com/s/m_69e4034489d08191addf079d9f282bb0')",
        }}
      ></div>

      {/* 🔥 DARK OVERLAY (IMPORTANT) */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 text-center text-white max-w-2xl">

        {/* 🔥 TAGLINE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Your Skills = Income 💰 <br />
          <span className="text-indigo-400">
            Your Payment = Faster Work ⚡
          </span>
        </h1>

        {/* 🔥 DESCRIPTION */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8">
          Work your way, based on your skills 👇 <br />
          If you have skills, become a freelancer and earn 💻 <br />
          If not, hire a freelancer and get your work done 🤝 <br />
          Opportunities are available for everyone.
        </p>

        {/* 🔥 BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => {
              localStorage.setItem("role", "USER");
              navigate("/services");
            }}
            className="bg-green-500 px-6 py-3 rounded-lg text-white 
            hover:scale-105 hover:bg-green-600 transition shadow-lg"
          >
            Continue as User
          </button>

          <button
            onClick={() => {
              localStorage.setItem("role", "FREELANCER");
              navigate("/market");
            }}
            className="bg-indigo-600 px-6 py-3 rounded-lg text-white 
            hover:scale-105 hover:bg-indigo-700 transition shadow-lg"
          >
            Continue as Freelancer
          </button>

        </div>

      </div>
    </div>
  );
}

export default Home;