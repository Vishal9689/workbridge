import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-black text-black dark:text-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-20 blur-3xl rounded-full animate-glow"></div>

      {/* 🔥 Tagline */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fadeUp">
        Your Skills = Income 💰 <br />
        <span className="text-indigo-500">
          Your Payment = Faster Work ⚡
        </span>
      </h1>

      {/* 🔥 Description */}
      <p className="text-slate-500 dark:text-slate-300 max-w-xl mb-8 animate-fadeUp">
        Work your way, based on your skills 👇  
        If you have skills, become a freelancer and earn 💻  
        If not, hire a freelancer and get your work done 🤝  
        options are available for you.
      </p>

      {/* 🔥 Buttons */}
      <div className="flex gap-4 mb-6 animate-fadeUp">

        <button
          onClick={() => {
            localStorage.setItem("role", "USER");
            navigate("/services");
          }}
          className="bg-green-500 px-6 py-2 rounded text-white 
          hover:scale-105 hover:bg-green-600 transition duration-300 shadow-lg"
        >
          Continue as User
        </button>

        <button
          onClick={() => {
            localStorage.setItem("role", "FREELANCER");
            navigate("/market");
          }}
          className="bg-indigo-600 px-6 py-2 rounded text-white 
          hover:scale-105 hover:bg-indigo-700 transition duration-300 shadow-lg"
        >
          Continue as Freelancer
        </button>

      </div>

    </div>
  );
}

export default Home;