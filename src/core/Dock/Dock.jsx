import React from 'react'
import Glassicon from './Glassicon'
import { apps } from "../../data/apps";

const Dock = ({openWindow,windowsState}) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">

  {/* WRAPPER */}
  <div className="relative flex items-center gap-3 px-6 py-3 rounded-3xl">

    {/* GLOW */}
    <div className="absolute inset-0 bg-blue-400/20 blur-2xl scale-110 rounded-3xl"></div>

    {/* GLASS */}
    <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl"></div>

    {/* REFLECTION */}
    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl"></div>

    {/* CONTENT */}
    <div className="relative z-10 flex items-center gap-4">
     {apps.map((app,index)=>{

        const isOpen = windowsState[app.id]?.isOpen
        const isMinimized = windowsState[app.id]?.isMinimized

      return (

        <Glassicon
          key={index}
          icon={app.icon}
          color={app.color}
          name={app.name}
          onClick={() => openWindow(app.id)}

          isOpen={isOpen}
          isMinimized={isMinimized}
        />

      )

    })}
    </div>

  </div>
</div>
  )
}

export default Dock
