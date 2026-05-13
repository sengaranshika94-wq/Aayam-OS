import React from "react";
import { motion } from "framer-motion";

const Glassicon = ({
  icon: Icon,
  color,
  name,
  onClick,
  isOpen,
  isMinimized,
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        scale: 1.08,
        y: -4,
      }}

      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={`
        relative
        group
        cursor-pointer
        transition-all
        duration-300

        ${isOpen ? "scale-110" : ""}
      `}
    >
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${color}
          opacity-25
          blur-2xl
          scale-110
          rounded-[22px]

          group-hover:opacity-60
          transition
          duration-500
        `}
      />
      <div
        className={`
          relative
          w-16
          h-16
          rounded-[22px]

          bg-gradient-to-br
          ${color}

          backdrop-blur-2xl

          border
          border-white/10

          group-hover:border-white/30

          shadow-2xl
          shadow-black/30

          flex
          items-center
          justify-center

          overflow-hidden

          transition-all
          duration-300

          shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
        `}
      >
      
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-1/2
            bg-gradient-to-b
            from-white/20
            to-transparent
            rounded-t-[22px]
          "
        />

        
        <div
          className="
            absolute
            inset-0
            bg-white/[0.03]
          "
        />

       
        <Icon
          className="
            relative
            z-10
            text-white
            w-7
            h-7
            drop-shadow-lg
          "
        />
      </div>

      {isOpen && (
        <div
          className={`
            absolute
            -bottom-2.5
            left-1/2
            -translate-x-1/2

            h-1
            w-5
            rounded-full

            transition-all
            duration-300

            ${isMinimized ? "bg-yellow-300" : "bg-cyan-300"}

            shadow-lg
          `}
        />
      )}

  
      <p
        className="
          absolute
          -top-7
          left-1/2
          -translate-x-1/2

          text-xs
          tracking-wide
          text-white/70

          opacity-0
          group-hover:opacity-100

          transition-all
          duration-300

          whitespace-nowrap
        "
      >
        {name}
      </p>
    </motion.div>
  );
};

export default Glassicon;
