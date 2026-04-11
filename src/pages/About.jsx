function About() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white px-6 py-12">

      {/* 🔥 HERO */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight">
          About <span className="text-indigo-500">WorkBridge</span>
        </h1>

        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          A modern freelancing platform designed to connect skilled individuals 
          with real-world opportunities — fast, simple, and scalable.
        </p>
      </div>

      {/* 🔥 COMPANY INFO */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-16">

        <div className="bg-[#111827] p-8 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold text-indigo-400 mb-3">
            Our Story
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Founded in <span className="text-white font-medium">2025</span>, WorkBridge was built to simplify 
            task outsourcing and provide earning opportunities to students and freelancers.
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold text-indigo-400 mb-3">
            Founder
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Created by <span className="text-white font-medium">Vishal Bonde</span>, 
            a full-stack developer focused on building scalable, real-world applications.
          </p>
        </div>

      </div>

      {/* 🔥 FEATURES */}
      <div className="max-w-6xl mx-auto mb-20">

        <h2 className="text-2xl font-semibold text-center mb-10">
          Platform Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#111827] p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition">
            <h3 className="text-lg font-semibold mb-2">Task Marketplace</h3>
            <p className="text-slate-400 text-sm">
              Easily post, browse, and accept tasks with a streamlined experience.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition">
            <h3 className="text-lg font-semibold mb-2">Real-Time Workflow</h3>
            <p className="text-slate-400 text-sm">
              Track task progress, submissions, and approvals efficiently.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition">
            <h3 className="text-lg font-semibold mb-2">Secure System</h3>
            <p className="text-slate-400 text-sm">
              Reliable file handling and user interaction with safety in mind.
            </p>
          </div>

        </div>

      </div>

      {/* 🔥 VISION */}
      <div className="max-w-4xl mx-auto text-center mb-16">

        <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
          Our Vision
        </h2>

        <p className="text-slate-400 leading-relaxed text-lg">
          To build a trusted ecosystem where freelancers and clients collaborate 
          seamlessly, unlocking global opportunities through technology.
        </p>

      </div>

      {/* 🔥 FOOTER */}
      <div className="text-center text-sm text-slate-600 border-t border-slate-800 pt-6">
        © 2025 WorkBridge • Built by Vishal Bonde
      </div>

    </div>
  );
}

export default About;