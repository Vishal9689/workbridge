import profile from "../assets/profile.jpg";

function About() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white px-6 py-12 animate-page">

      {/* 🔥 HERO */}
      <div className="max-w-5xl mx-auto text-center mb-16">

        <img
          src={profile}
          alt="Vishal"
          className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-indigo-500 object-cover object-top"
        />

        <h1 className="text-4xl font-bold animate-pulse">
          Vishal Bonde 👋
        </h1>

        <p className="text-indigo-400 mt-2">
          Founder of WorkBridge 🚀
        </p>

        <p className="text-slate-400 mt-2">
          Full Stack Developer | Real-World Problem Solver
        </p>
      </div>

      {/* 🔥 ABOUT WORKBRIDGE (REAL STORY) */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-2xl text-indigo-400 mb-3">Why WorkBridge?</h2>

        <p className="text-slate-400 leading-relaxed">
          WorkBridge was built after identifying a real-world problem — many skilled people remain unemployed, 
          while people who need work struggle to find the right person.  
          <br /><br />
          This platform connects both sides. A user can post a task describing their requirement, 
          and a skilled individual can accept that task and earn money by completing it.  
          <br /><br />
          There are no fixed roles — anyone can be a user or a freelancer based on their needs. 
          This creates a flexible ecosystem where work and skills meet efficiently.
        </p>
      </div>

      {/* 🔥 HOW SYSTEM WORKS */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl text-center mb-6">How It Works ⚙️</h2>

        <div className="grid md:grid-cols-2 gap-6 text-sm">

          <div className="bg-slate-800 p-5 rounded transform transition duration-500 hover:scale-105 hover:shadow-xl animate-page">
  🧑‍💻 <b>User Flow:</b>
  <ul className="mt-2 text-slate-400 space-y-1">
    <li className="animate-pulse">• Post a Task → goes to Marketplace</li>
    <li className="animate-pulse delay-100">• Freelancer accepts your task</li>
    <li className="animate-pulse delay-200">• Payment request appears</li>
    <li className="animate-pulse delay-300">• After payment → work starts</li>
    <li className="animate-pulse delay-500">• Completed work in My Tasks</li>
  </ul>
</div>

<div className="bg-slate-800 p-5 rounded transform transition duration-500 hover:scale-105 hover:shadow-xl animate-page">
  🚀 <b>Freelancer Flow:</b>
  <ul className="mt-2 text-slate-400 space-y-1">
    <li className="animate-pulse">• Browse tasks in Marketplace</li>
    <li className="animate-pulse delay-100">• Accept → moves to Accepted</li>
    <li className="animate-pulse delay-200">• Update progress step-by-step</li>
    <li className="animate-pulse delay-300">• Upload & complete task</li>
    <li className="animate-pulse delay-500">• Earn money 💰</li>
  </ul>
</div>

        </div>
      </div>

      {/* 🔥 FEATURES */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl text-center mb-6">Platform Highlights</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#111827] p-6 rounded-xl hover:scale-105 transition">
            Task Marketplace
          </div>

          <div className="bg-[#111827] p-6 rounded-xl hover:scale-105 transition">
            Secure Workflow System
          </div>

          <div className="bg-[#111827] p-6 rounded-xl hover:scale-105 transition">
            Real-Time Task Tracking
          </div>

        </div>
      </div>

      {/* 🔥 CONTACT */}
      <div className="text-center mt-10">

        <h2 className="text-xl mb-3 text-indigo-400">Contact Me</h2>

        {/* 📧 EMAIL */}
        <p className="text-slate-300">
          📧 <a href="mailto:bondevishal27@gmail.com" className="hover:underline">
            bondevishal27@gmail.com
          </a>
        </p>

        {/* 📞 PHONE */}
        <p className="text-slate-300 mt-2">
          📞 <a href="tel:9021449829" className="hover:underline">
            9021449829
          </a>
        </p>

        {/* 🔗 LINKEDIN */}
        <p className="text-slate-300 mt-2">
          🔗 <a 
            href="https://www.linkedin.com/in/vishal-bonde-8704a8230" 
            target="_blank"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </p>

      </div>

      {/* 🔥 FOOTER */}
      <div className="text-center text-sm text-slate-500 border-t mt-10 pt-4">
        © 2026 WorkBridge • Built by Vishal Bonde
      </div>

    </div>
  );
}

export default About;