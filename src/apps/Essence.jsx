import React from "react";

const Essence = () => {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar p-8 space-y-10 bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white ">
      <div className="border-b border-white/10 pb-5 space-y-2">
        <h1 className="text-4xl font-semibold tracking-wide bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Anshika Sengar
        </h1>

        <p className="text-white/60 text-sm">
          Frontend Developer • React • UI Systems • Framer Motion
        </p>

        <div className="flex gap-3 text-sm pt-3 flex-wrap">
          <a
            href="https://linkedin.com/in/anshika-sengar-449162335"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20 transition"
          >
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/sengaranshika94-wq"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 hover:bg-purple-400/20 transition"
          >
            GitHub
          </a>

          <a
            href="mailto:sengaranshika94@gmail.com"
            className="px-3 py-1 rounded-full border border-pink-400/30 bg-pink-400/10 text-pink-300 hover:bg-pink-400/20 transition"
          >
            Email
          </a>
        </div>
      </div>

      
      <section className="space-y-2">
        <h2 className="text-sm uppercase tracking-widest text-cyan-300/70">
          About
        </h2>

        <p className="text-white/70 leading-relaxed">
          I’m a frontend developer focused on building immersive UI systems and
          OS-inspired web experiences. I enjoy crafting smooth, animated,
          component-driven interfaces using React, Tailwind CSS, and Framer
          Motion. My goal is to design digital spaces that feel calm, intuitive,
          and futuristic — like AAYAM OS.
        </p>
      </section>

      
      <section className="space-y-3">
        <h2 className="text-sm uppercase tracking-widest text-purple-300/70">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Framer Motion",
            "Node.js",
            "UI Design",
            "Component Architecture",
            "Responsive Design",
          ].map((skill, i) => {
            const colors = [
              "cyan",
              "purple",
              "pink",
              "blue",
              "emerald",
              "violet",
            ];
            const color = colors[i % colors.length];

            return (
              <span
                key={skill}
                className={`px-3 py-1 rounded-full text-sm border bg-${color}-400/10 border-${color}-400/20 text-${color}-300`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </section>

      
      <section className="space-y-3">
        <h2 className="text-sm uppercase tracking-widest text-pink-300/70">
          Experience
        </h2>

        <div className="border-l border-cyan-400/30 pl-4 space-y-5">
          <div className="p-3 bg-white/5 rounded-md border border-purple-400/20 hover:bg-purple-400/10 transition">
            <h3 className="font-medium text-purple-300">
              Frontend Developer (AAYAM OS + Personal Projects)
            </h3>
            <p className="text-white/50 text-sm">2025 - Present</p>
            <p className="text-white/70 text-sm mt-1">
              Building OS-inspired UI systems, animated React components, and
              modular interface architecture with focus on motion design,
              glassmorphism, and scalable UI systems.
            </p>
          </div>
        </div>
      </section>

     
      <section className="space-y-3">
        <h2 className="text-sm uppercase tracking-widest text-cyan-300/70">
          Projects
        </h2>

        <div className="space-y-2 text-sm">
          <div className="p-3 bg-cyan-400/5 border border-cyan-400/20 rounded-md hover:bg-cyan-400/10 transition">
            <p className="font-medium text-cyan-300">AAYAM OS</p>
            <p className="text-white/60">
              Futuristic OS-style portfolio system with modular apps and glass
              UI
            </p>
          </div>

          <div className="p-3 bg-purple-400/5 border border-purple-400/20 rounded-md hover:bg-purple-400/10 transition">
            <p className="font-medium text-purple-300">UI Labs</p>
            <p className="text-white/60">
              Experimental Framer Motion components and interaction design
            </p>
          </div>

          <div className="p-3 bg-pink-400/5 border border-pink-400/20 rounded-md hover:bg-pink-400/10 transition">
            <p className="font-medium text-pink-300">Spotify Window System</p>
            <p className="text-white/60">
              Embedded interactive music UI inside draggable OS window system
            </p>
          </div>

          <div className="p-3 bg-emerald-400/5 border border-emerald-400/20 rounded-md hover:bg-emerald-400/10 transition">
            <p className="font-medium text-emerald-300">Forge App</p>
            <p className="text-white/60">
              Modular workspace concept for UI productivity systems
            </p>
          </div>
        </div>
      </section>

     
      <section className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-violet-300/70">
          Connect
        </h2>

        <p className="text-white/60 text-sm">
          Let’s build immersive UI systems and futuristic interfaces together.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          {/* Email */}
          <a
            href="mailto:yourmail@gmail.com"
            className="p-3 rounded-md border border-pink-400/20 bg-pink-400/5 hover:bg-pink-400/10 transition"
          >
            <p className="text-pink-300 font-medium">Email</p>
            <p className="text-white/50 text-xs">Direct contact</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/anshika-sengar-449162335"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-md border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 transition"
          >
            <p className="text-cyan-300 font-medium">LinkedIn</p>
            <p className="text-white/50 text-xs">Professional network</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sengaranshika94-wq"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-md border border-purple-400/20 bg-purple-400/5 hover:bg-purple-400/10 transition"
          >
            <p className="text-purple-300 font-medium">GitHub</p>
            <p className="text-white/50 text-xs">Code & projects</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Essence;
