import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white overflow-hidden px-4">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-500 opacity-20 blur-3xl rounded-full animate-glow"></div>

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl w-full grid gap-8 text-center">

        {/* 🔥 HEADING */}
        <div className="space-y-4 animate-fadeUp">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Skills = Income 💰
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-500">
            Your Payment = Faster Work ⚡
          </h2>
        </div>

        {/* 🔥 DESCRIPTION */}
        <div className="animate-fadeUp">
          <p className="text-slate-500 dark:text-slate-300 text-lg leading-relaxed">
            Work your way, based on your skills 👇
          </p>

          <p className="text-slate-400 mt-2">
            If you have skills, become a freelancer and earn 💻
          </p>

          <p className="text-slate-400">
            If not, hire a freelancer and get your work done 🤝
          </p>

          <p className="text-slate-400">
            Opportunities are available for everyone.
          </p>
        </div>

        {/* 🔥 BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeUp">

          <button
            onClick={() => {
              localStorage.setItem("role", "USER");
              navigate("/services");
            }}
            className="bg-green-500 px-6 py-3 rounded-lg text-white font-medium 
            hover:scale-105 hover:bg-green-600 transition duration-300 shadow-lg"
          >
            Continue as User
          </button>

          <button
            onClick={() => {
              localStorage.setItem("role", "FREELANCER");
              navigate("/market");
            }}
            className="bg-indigo-600 px-6 py-3 rounded-lg text-white font-medium 
            hover:scale-105 hover:bg-indigo-700 transition duration-300 shadow-lg"
          >
            Continue as Freelancer
          </button>

        </div>

      </div>
    </div>
  );
}

export default Home;