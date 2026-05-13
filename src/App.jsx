import { useState } from "react";

import Forge from "./apps/Forge";
import Desktop from "./core/desktop/Desktop";
import Dock from "./core/Dock/Dock";
import Window from "./core/WindowSystem/Window";

import Pulse from "./apps/Pulse";
import Essence from "./apps/Essence";
import Presence from "./apps/Presence";
import Frames from "./apps/Frames";
import Nexus from "./apps/Nexus";

import Background from "./core/desktop/Background";

function App() {

  // THEME STATE
  const [theme, setTheme] = useState("void");

  // WINDOWS
  const [windowsState, setwindowsState] = useState({
    forge: { isOpen: false, isMinimized: false },
    pulse: { isOpen: false, isMinimized: false },
    essence: { isOpen: false, isMinimized: false },
    presence: { isOpen: false, isMinimized: false },
    frames: { isOpen: false, isMinimized: false },
    nexus: { isOpen: false, isMinimized: false },
  });

  const openWindow = (name) => {
    setwindowsState((prev) => ({
      ...prev,

      [name]: {
        isOpen: true,
        isMinimized: false,
      },
    }));
  };

  const closeWindow = (name) => {
    setwindowsState((prev) => ({
      ...prev,

      [name]: {
        ...prev[name],
        isOpen: false,
      },
    }));
  };

  const minWindow = (name) => {
    setwindowsState((prev) => ({
      ...prev,

      [name]: {
        ...prev[name],
        isMinimized: true,
      },
    }));
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">

      {/* BACKGROUND */}
      <Background theme={theme} />

      {/* DESKTOP */}
      <Desktop />

      {/* FORGE */}
      {windowsState.forge.isOpen &&
        !windowsState.forge.isMinimized && (
          <Window
            title="Forge"
            onClose={() => closeWindow("forge")}
            onMinimize={() => minWindow("forge")}
          >
            <Forge />
          </Window>
        )}

      {/* PULSE */}
      {windowsState.pulse.isOpen &&
        !windowsState.pulse.isMinimized && (
          <Window
            title="Pulse"
            onClose={() => closeWindow("pulse")}
            onMinimize={() => minWindow("pulse")}
          >
            <Pulse />
          </Window>
        )}

      {/* ESSENCE */}
      {windowsState.essence.isOpen &&
        !windowsState.essence.isMinimized && (
          <Window
            title="Essence"
            onClose={() => closeWindow("essence")}
            onMinimize={() => minWindow("essence")}
          >
            <Essence />
          </Window>
        )}

      {/* PRESENCE */}
      {windowsState.presence.isOpen &&
        !windowsState.presence.isMinimized && (
          <Window
            title="Presence"
            onClose={() => closeWindow("presence")}
            onMinimize={() => minWindow("presence")}
          >
            <Presence />
          </Window>
        )}

      {/* FRAMES */}
      {windowsState.frames.isOpen &&
        !windowsState.frames.isMinimized && (
          <Window
            title="Frames"
            onClose={() => closeWindow("frames")}
            onMinimize={() => minWindow("frames")}
          >

            {/* PASS setTheme HERE */}
            <Frames setTheme={setTheme} />

          </Window>
        )}

      {/* NEXUS */}
      {windowsState.nexus.isOpen &&
        !windowsState.nexus.isMinimized && (
          <Window
            title="Nexus"
            onClose={() => closeWindow("nexus")}
            onMinimize={() => minWindow("nexus")}
          >
            <Nexus />
          </Window>
        )}

      {/* DOCK */}
      <Dock
        openWindow={openWindow}
        windowsState={windowsState}
      />

    </div>
  );
}

export default App;