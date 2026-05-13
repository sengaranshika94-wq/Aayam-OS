// Background.jsx

import React from "react";
import { motion } from "framer-motion";

const Background = ({ theme }) => {

  const themes = {
    drift: {
      background:
        "linear-gradient(to bottom right, #1c1c46, #31063d, #04063c)",

      aurora1: "rgba(34,211,238,0.25)",

      aurora2: "rgba(217,70,239,0.25)",

      core: "rgba(96,165,250,0.12)",
    },

    void: {
      background:
        "linear-gradient(to bottom right, #000000, #050510, #0a0a0a)",

      aurora1: "rgba(139,92,246,0.18)",

      aurora2: "rgba(99,102,241,0.18)",

      core: "rgba(255,255,255,0.05)",
    },

    echo: {
      background:
        "linear-gradient(to bottom right, #07111f, #112240, #050816)",

      aurora1: "rgba(59,130,246,0.22)",

      aurora2: "rgba(34,211,238,0.18)",

      core: "rgba(125,211,252,0.10)",
    },

    bloom: {
      background:
        "linear-gradient(to bottom right, #4a044e, #581c87, #312e81)",

      aurora1: "rgba(244,114,182,0.20)",

      aurora2: "rgba(192,132,252,0.20)",

      core: "rgba(249,168,212,0.10)",
    },
  };

  const currentTheme = themes[theme];

  return (
    <div
      className="absolute inset-0 overflow-hidden transition-all duration-1000"
      style={{
        background: currentTheme.background,
      }}
    >

      {/* TOP LEFT AURORA */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 40, 0],
          rotate: [0, 8, -8, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-200px] left-[-100px] w-[700px] h-[700px] blur-[120px] rounded-full"
        style={{
          background: currentTheme.aurora1,
        }}
      />

      {/* BOTTOM RIGHT AURORA */}
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 60, -40, 0],
          rotate: [0, -10, 10, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] right-[-150px] w-[700px] h-[700px] blur-[120px] rounded-full"
        style={{
          background: currentTheme.aurora2,
        }}
      />

      {/* ENERGY CORE */}
      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] blur-[120px] rounded-full"
        style={{
          background: currentTheme.core,
        }}
      />

      {/* STARS */}
      {Array.from({ length: 60 }).map((_, i) => {
        const size = Math.random() * 2 + 1;

        return (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(255,255,255,0.8)",
            }}
          />
        );
      })}

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-black/20" />

    </div>
  );
};

export default Background;