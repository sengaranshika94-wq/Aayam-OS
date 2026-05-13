import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sparkles,
  Waves,
  SunMedium,
  CloudRain,
  Play,
  Pause,
} from "lucide-react";

const tracks = {
  calm: {
    name: "Calm Drift",
    file: "/music/calm.mp3",
    gradient: "from-cyan-400/20 to-blue-500/10",
    icon: <Moon size={18} />,
    message: "Soft silence surrounds your space.",
  },

  focus: {
    name: "Solar Focus",
    file: "/music/focus.mp3",
    gradient: "from-amber-300/20 to-orange-500/10",
    icon: <SunMedium size={18} />,
    message: "Your concentration feels stable.",
  },

  creative: {
    name: "Creative Storm",
    file: "/music/creative.mp3",
    gradient: "from-fuchsia-400/20 to-violet-500/10",
    icon: <Sparkles size={18} />,
    message: "Ideas are slowly taking shape.",
  },

  reflective: {
    name: "Low Tide",
    file: "/music/reflective.mp3",
    gradient: "from-slate-400/20 to-slate-700/10",
    icon: <CloudRain size={18} />,
    message: "The night feels thoughtful and slow.",
  },
};

const Presence = () => {
  const [currentMood, setCurrentMood] = useState("calm");
  const [isPlaying, setIsPlaying] = useState(true);

  const audioRef = useRef(null);

  // Auto mood based on time
  useEffect(() => {
    const updateMood = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 11) {
        setCurrentMood("focus");
      } else if (hour >= 11 && hour < 18) {
        setCurrentMood("creative");
      } else if (hour >= 18 && hour < 22) {
        setCurrentMood("calm");
      } else {
        setCurrentMood("reflective");
      }
    };

    updateMood();

    const interval = setInterval(updateMood, 60000);

    return () => clearInterval(interval);
  }, []);

  // Change music when mood changes
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = tracks[currentMood].file;

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentMood]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const currentTrack = tracks[currentMood];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#050816] text-white">
      {/* Background Gradient */}
      <motion.div
        animate={{
          opacity: [0.7, 1, 0.8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute inset-0 bg-gradient-to-br ${currentTrack.gradient}`}
      />

      {/* Floating Blur Orbs */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 40, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"
      />

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0.2,
            x: Math.random() * 1400,
            y: Math.random() * 900,
          }}
          animate={{
            y: [null, -40, 20],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/30"
        />
      ))}

      {/* Audio */}
      <audio ref={audioRef} autoPlay loop />

      {/* Main UI */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-wide">
              Presence
            </h1>

            <p className="mt-2 text-white/50">
              Adaptive emotional atmosphere
            </p>
          </div>

          {/* Music Controls */}
          <button
            onClick={toggleMusic}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl transition-all hover:bg-white/10"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}

            <div className="text-left">
              <p className="text-xs text-white/40">Now Playing</p>

              <h3 className="text-sm">{currentTrack.name}</h3>
            </div>
          </button>
        </div>

        {/* Center Aura */}
        <div className="flex flex-1 items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl"
          >
            {/* Rings */}
            <motion.div
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute h-full w-full rounded-full border border-white/10"
            />

            <motion.div
              animate={{
                scale: [1, 1.8],
                opacity: [0.2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute h-full w-full rounded-full border border-white/5"
            />

            {/* Mood Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMood}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-full bg-white/10 p-4">
                  {currentTrack.icon}
                </div>

                <h2 className="mt-5 text-3xl font-medium">
                  {currentTrack.name}
                </h2>

                <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-white/50">
                  {currentTrack.message}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Panels */}
        <div className="grid grid-cols-3 gap-4">
          <InfoCard
            title="Presence Energy"
            value="72%"
            icon={<Waves size={18} />}
          />

          <InfoCard
            title="Mood State"
            value={currentMood}
            icon={currentTrack.icon}
          />

          <InfoCard
            title="Atmosphere"
            value="Stable Flow"
            icon={<Sparkles size={18} />}
          />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ title, value, icon }) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/40">{title}</p>

        <div className="text-white/60">{icon}</div>
      </div>

      <h2 className="mt-4 text-xl font-medium capitalize">
        {value}
      </h2>
    </motion.div>
  );
};

export default Presence;