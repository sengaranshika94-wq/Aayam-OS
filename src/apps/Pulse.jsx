import React from "react";

const Pulse = () => {
  return (
    <div className="relative w-full h-full min-h-0 overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-pink-500/20 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      {/* Main */}
      <div className="relative z-10 flex h-full min-h-0 w-full flex-col">
        
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
          
          <h1 className="text-sm font-medium text-white/70">
            Pulse — Music System
          </h1>

          <div className="text-xs text-white/40">
            Spotify Embedded
          </div>
        </div>

        {/* Spotify */}
        <div className="flex-1 min-h-0 p-4">
          
          <div className="w-full h-full min-h-[400px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
            
            <iframe
              className="w-full h-full"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1EQncLwOalG3K7?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pulse;