import React from "react";

const Pulse = () => {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-black via-zinc-950 to-black text-white overflow-hidden">

      
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col">

        
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 backdrop-blur-md">
          
          

          <h1 className="text-sm font-medium text-white/70">
            Pulse — Music System
          </h1>

          <div className="text-xs text-white/40">
            Spotify Embedded
          </div>
        </div>

  
        <div className="flex-1 p-4">
          <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">

            <iframe
              className="w-full h-full"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1EQncLwOalG3K7?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Pulse;