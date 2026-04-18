import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-white dark:bg-black">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

      {/* 🔥 MAIN CONTAINER */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-10">

        {/* 🔥 HEADING */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Your Skills = Income
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-indigo-600 mt-2 font-semibold">
            Your Payment = Faster Work
          </h2>
        </div>

        {/* 🔥 DESCRIPTION BOX */}
        <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl shadow-md max-w-2xl mx-auto">
          <p className="text-gray-700 dark:text-slate-300 text-sm sm:text-base">
            Work your way, based on your skills.
          </p>

          <p className="text-gray-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
            If you have skills, you can become a freelancer and start earning.
          </p>

          <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base">
            If not, you can hire a freelancer and get your work done efficiently.
          </p>

          <p className="text-gray-500 dark:text-slate-400 mt-2 text-sm">
            Opportunities are available for everyone.
          </p>
        </div>

        {/* 🔥 FLOW GRID (MAIN PART) */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* USER FLOW */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-indigo-600">
              User Flow
            </h3>

            <ul className="text-gray-600 dark:text-slate-400 text-sm space-y-2 text-left">
              <li>Post a task and it appears in the marketplace</li>
              <li>A freelancer accepts your task</li>
              <li>Payment request is generated</li>
              <li>Work begins after confirmation</li>
              <li>Completed work is available in My Tasks</li>
            </ul>
          </div>

          {/* FREELANCER FLOW */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-indigo-600">
              Freelancer Flow
            </h3>

            <ul className="text-gray-600 dark:text-slate-400 text-sm space-y-2 text-left">
              <li>Browse available tasks in marketplace</li>
              <li>Accept task and move to accepted section</li>
              <li>Update progress step by step</li>
              <li>Upload work and mark task as completed</li>
              <li>Receive payment after approval</li>
            </ul>
          </div>

        </div>

        {/* 🔥 BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <button
            onClick={() => {
              localStorage.setItem("role", "USER");
              navigate("/services");
            }}
            className="bg-green-600 px-6 py-3 rounded-lg text-white font-medium 
            hover:bg-green-700 transition shadow"
          >
            Continue as User
          </button>

          <button
            onClick={() => {
              localStorage.setItem("role", "FREELANCER");
              navigate("/market");
            }}
            className="bg-indigo-600 px-6 py-3 rounded-lg text-white font-medium 
            hover:bg-indigo-700 transition shadow"
          >
            Continue as Freelancer
          </button>

        </div>

      </div>
    </div>
  );
}

export default Home;