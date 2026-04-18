import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white overflow-hidden px-4">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500 opacity-20 blur-3xl rounded-full animate-glow"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center gap-6">

        {/* 🔥 HEADING */}
        <div className="space-y-3 animate-fadeUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Your Skills = Income 💰
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-500">
            Your Payment = Faster Work ⚡
          </h2>
        </div>

        {/* 🔥 DESCRIPTION */}
        <div className="animate-fadeUp space-y-2">
          <p className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-300">
            Work your way, based on your skills 👇
          </p>

          <p className="text-slate-400 text-sm sm:text-base">
            If you have skills, become a freelancer and earn 💻
          </p>

          <p className="text-slate-400 text-sm sm:text-base">
            If not, hire a freelancer and get your work done 🤝
          </p>

          <p className="text-slate-400 text-sm sm:text-base">
            Opportunities are available for everyone.
          </p>
        </div>

        {/* 🔥 BUTTONS */}
        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fadeUp mt-2">

          <button
            onClick={() => {
              localStorage.setItem("role", "USER");
              navigate("/services");
            }}
            className="w-full sm:w-auto bg-green-500 px-6 py-3 rounded-lg text-white font-medium 
            hover:scale-105 hover:bg-green-600 transition duration-300 shadow-lg"
          >
            Continue as User
          </button>

          <button
            onClick={() => {
              localStorage.setItem("role", "FREELANCER");
              navigate("/market");
            }}
            className="w-full sm:w-auto bg-indigo-600 px-6 py-3 rounded-lg text-white font-medium 
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