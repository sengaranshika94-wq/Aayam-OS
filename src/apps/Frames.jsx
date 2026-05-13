// Frames.jsx

import React from "react";
import { motion } from "framer-motion";

const Frames = ({ setTheme }) => {
  const moods = [
    {
      name: "Drift",
      theme: "drift",
      color: "from-cyan-400 to-blue-500",
      desc: "Dreamy cosmic atmosphere",
    },

    {
      name: "Void",
      theme: "void",
      color: "from-violet-500 to-indigo-500",
      desc: "Deep minimal darkness",
    },

    {
      name: "Echo",
      theme: "echo",
      color: "from-blue-500 to-cyan-400",
      desc: "Rainy futuristic ambience",
    },

    {
      name: "Bloom",
      theme: "bloom",
      color: "from-pink-500 to-purple-500",
      desc: "Creative neon energy",
    },
  ];

  return (
    <div
      className="
      w-full
      h-full
      overflow-y-auto
      no-scrollbar
      bg-black/10
      backdrop-blur-3xl
      text-white
      p-8
    "
    >
      {/* HEADER */}
      <div className="mb-10">
        <h1
          className="
          text-5xl
          font-semibold
          tracking-wide
          bg-gradient-to-r
          from-cyan-300
          via-blue-400
          to-fuchsia-400
          text-transparent
          bg-clip-text
        "
        >
          Frames
        </h1>

        <p className="mt-3 text-white/50 text-lg">
          Dimensional atmosphere explorer
        </p>
      </div>

      {/* GRID */}
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
      >
        {moods.map((mood) => (
          <motion.button
            key={mood.theme}
            whileHover={{
              scale: 1.02,
              y: -5,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => setTheme(mood.theme)}
            className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-7
            min-h-[260px]
            text-left
            transition-all
          "
          >
            {/* GLOW */}
            <div
              className={`
              absolute inset-0 opacity-20
              bg-gradient-to-br ${mood.color}
            `}
            />

            {/* LIGHT EFFECT */}
            <div
              className="
              absolute
              top-0
              left-0
              h-[200px]
              w-[200px]
              rounded-full
              bg-white/5
              blur-3xl
            "
            />

            {/* CONTENT */}
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div
                  className="
                  mb-5
                  inline-flex
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                "
                >
                  Dimension
                </div>

                <h2 className="text-4xl font-semibold text-white">
                  {mood.name}
                </h2>

                <p className="mt-4 text-white/60 leading-relaxed">
                  {mood.desc}
                </p>
              </div>

              <div
                className="
                mt-10
                flex
                items-center
                justify-between
              "
              >
                <span className="text-sm text-white/40">Click to enter</span>

                <div
                  className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-lg
                "
                >
                  →
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Frames;
