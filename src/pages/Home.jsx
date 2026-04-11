import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
   <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-black text-black dark:text-white">

      {/* 🔥 Tagline */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Your Skills = Income 💰 <br />
        <span className="text-indigo-500">
          Your Payment = Faster Work ⚡
        </span>
      </h1>
 

      {/* 🔥 Description (तुझ्या style मध्ये) */}
   <p className="text-slate-500 dark:text-slate-300 max-w-xl mb-8">
       Work your way, based on your skills 👇  
       If you have skills, become a freelancer and earn 💻  
       If not, hire a freelancer and get your work done 🤝  
       options are available for you.
      </p>

      <div className="flex gap-4 mb-6">

  <button
    onClick={() => {
      localStorage.setItem("role", "USER");
      navigate("/services");
    }}
    className="bg-green-500 px-5 py-2 rounded text-white"
  >
    Continue as User
  </button>

  <button
    onClick={() => {
      localStorage.setItem("role", "FREELANCER");
      navigate("/market");
    }}
    className="bg-indigo-600 px-5 py-2 rounded text-white"
  >
    Continue as Freelancer
  </button>

</div>

    </div>
  );
}

export default Home;