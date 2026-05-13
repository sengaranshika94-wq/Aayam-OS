import React, { useState } from "react";
import { projects } from "../data/projects";

const filters = ["All", "In Progress", "Completed", "Prototype"];

const Forge = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar p-8 bg-gradient-to-br from-black via-slate-950 to-black text-white">

    
      <div className="mb-8 space-y-3">
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Forge Workspace
        </h1>

        <p className="text-white/50 text-sm">
          Modular project system inside AAYAM OS
        </p>

        
        <div className="flex gap-2 flex-wrap pt-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1 rounded-full text-xs border transition
              ${
                activeFilter === f
                  ? "bg-cyan-400/20 border-cyan-400/40 text-cyan-300"
                  : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap justify-center gap-6">

        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative w-[340px] min-h-[470px] flex flex-col gap-4 rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] overflow-hidden"
          >

            
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-3xl transition duration-500 bg-gradient-to-br ${project.glow}`}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-4 h-full">

              {/* Image */}
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[160px] object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-white">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="mt-auto flex justify-between items-center pt-2">
                <span className="text-xs text-white/40">
                  {project.status}
                </span>

                <span
                  className={`w-2 h-2 rounded-full ${
                    project.status === "Completed"
                      ? "bg-emerald-400"
                      : project.status === "In Progress"
                      ? "bg-cyan-400"
                      : "bg-pink-400"
                  }`}
                />
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Forge;