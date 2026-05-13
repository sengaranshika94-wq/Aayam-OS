import React, { useState } from "react";
import { motion } from "framer-motion";

const Window = ({ title, children, onClose, onMinimize }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <motion.div
      drag={!isMaximized}
      dragMomentum={false}
      animate={{
        width: isMaximized ? "100vw" : "70vw",
        height: isMaximized ? "calc(100vh - 80px)" : "70vh",
        top: isMaximized ? 0 : "10vh",
        left: isMaximized ? 0 : "15vw",
        borderRadius: isMaximized ? "0px" : "28px",
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="
        fixed
        flex
        flex-col
        overflow-hidden
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-2xl
        text-white
      "
    >
      {/* OVERLAY GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      {/* TITLEBAR */}
      <div
        className="
          relative
          z-10
          h-12
          shrink-0
          flex
          items-center
          px-4
          border-b
          border-white/10
          bg-black/10
          backdrop-blur-xl
        "
      >
        <h1 className="text-sm tracking-wide text-white/70">
          {title}
        </h1>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={onClose}
            className="h-3 w-3 rounded-full bg-red-400/80 hover:scale-110 transition"
          />

          <button
            onClick={onMinimize}
            className="h-3 w-3 rounded-full bg-yellow-400/80 hover:scale-110 transition"
          />

          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="h-3 w-3 rounded-full bg-cyan-300/80 hover:scale-110 transition"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative flex-1 overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;