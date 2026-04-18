import profile from "../assets/profile.jpg";

function About() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white px-6 py-12">

      {/* 🔥 HERO */}
      <div className="max-w-5xl mx-auto text-center mb-16">

        <img
          src={profile}
          className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-indigo-500 object-cover"
        />

        <h1 className="text-4xl font-bold">
          Vishal Bonde 👋
        </h1>

        <p className="text-indigo-400 mt-2">
          Founder of WorkBridge 🚀
        </p>

        <p className="text-slate-400 mt-2">
          Full Stack Developer | React | Spring Boot | PostgreSQL
        </p>
      </div>

      {/* 🔥 ABOUT ME */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-2xl text-indigo-400 mb-3">About Me</h2>
        <p className="text-slate-400 leading-relaxed">
          I am a passionate Computer Engineering student with a strong interest in building real-world, scalable applications. 
          I specialize in full-stack development using modern technologies like React and Spring Boot. 
          My goal is to solve real problems through technology and continuously improve my development skills by working on practical projects.
        </p>
      </div>

      {/* 🔥 PROJECT */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-2xl text-indigo-400 mb-3">About WorkBridge</h2>
        <p className="text-slate-400 leading-relaxed">
          WorkBridge is a modern freelancing platform designed to connect users and freelancers efficiently. 
          It allows users to post tasks, while freelancers can browse, accept, and complete them. 
          The system includes task tracking, secure file handling, and a structured workflow to ensure smooth communication and reliable execution of work.
        </p>
      </div>

      {/* 🔥 TECH STACK */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl text-center mb-6">Tech Stack</h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-800 p-5 rounded">React.js (Frontend UI)</div>
          <div className="bg-slate-800 p-5 rounded">Spring Boot (Backend API)</div>
          <div className="bg-slate-800 p-5 rounded">PostgreSQL (Database)</div>
        </div>
      </div>

      {/* 🔥 FEATURES */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl text-center mb-6">Key Features</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-800 p-5 rounded">
            Task Marketplace – Users can post and manage tasks easily
          </div>

          <div className="bg-slate-800 p-5 rounded">
            Secure Workflow – Task submission, approval & tracking system
          </div>

          <div className="bg-slate-800 p-5 rounded">
            Real-Time Interaction – Smooth communication between users & freelancers
          </div>

        </div>
      </div>

      {/* 🔥 CONTACT */}
      <div className="text-center mt-10">
        <h2 className="text-xl mb-2">Contact</h2>

        <p className="text-slate-400">
          📧 bondevishal27@gmail.com
        </p>

        <p className="text-slate-500 mt-2">
          Open for opportunities 🚀
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