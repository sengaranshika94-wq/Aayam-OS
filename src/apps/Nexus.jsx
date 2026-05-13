import React, { useEffect, useRef, useState } from "react";
import Terminal, {
  ColorMode,
  TerminalOutput,
} from "react-terminal-ui";

const Nexus = () => {
  const terminalRef = useRef(null);

  const welcomeMessage = `
╔══════════════════════════════════════════════╗
║                AAYAM OS :: NEXUS             ║
╚══════════════════════════════════════════════╝

Interactive Portfolio Console
Explore Anshika Sengar through commands.

Available Quick Commands:
──────────────────────────────────────────────
about       → About me
skills      → Technical skills
projects    → Featured projects
experience  → Experience
contact     → Contact information
github      → GitHub profile
linkedin    → LinkedIn profile
clear       → Clear terminal

Type a command to begin.
`;

  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key="welcome">
      {welcomeMessage}
    </TerminalOutput>,
  ]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop =
        terminalRef.current.scrollHeight;
    }
  }, [terminalLineData]);

  const addOutput = (command, response) => {
    setTerminalLineData((prev) => [
      ...prev,

      <TerminalOutput key={`cmd-${prev.length}`}>
        <span className="text-cyan-300">
          nexus@anshika:~$
        </span>{" "}
        {command}
      </TerminalOutput>,

      <TerminalOutput key={`res-${prev.length}`}>
        {response}
      </TerminalOutput>,
    ]);
  };

  const commands = {
    about: `
Anshika Sengar

Frontend Developer focused on:
• Futuristic UI Systems
• OS-inspired Interfaces
• Motion Design
• Immersive User Experiences

    `,

    skills: `
Technical Skills
────────────────────────

Frontend
• React
• JavaScript
• Tailwind CSS
• Framer Motion

Backend
• Node.js
• Express

Design
• Glassmorphism
• UI Architecture
• Motion Systems
• Responsive Design
    `,

    projects: `
Featured Projects
────────────────────────

1. AAYAM OS
   Futuristic portfolio operating system.

2. Presence
   Mood-driven ambient experience app.

3. Nexus
   Interactive portfolio terminal.

4. Forge
   Creative productivity workspace.

5. Pulse
   Immersive music experience interface.
    `,

    experience: `
Experience
────────────────────────

Frontend Developer
2025 — Present

Building cinematic UI systems,
interactive experiences,
and futuristic web interfaces.
    `,

    contact: `
Contact Information
────────────────────────

Email
sengaranshika94@gmail.com

GitHub
github.com/sengaranshika94-wq

LinkedIn
linkedin.com/in/anshika-sengar-449162335
    `,
  };

  const onInput = (input) => {
    const cmd = input.toLowerCase().trim();

    if (cmd === "clear") {
      setTerminalLineData([]);
      return;
    }

   
     

    if (cmd === "github") {
      addOutput(
        cmd,
        "Opening GitHub profile..."
      );

      window.open(
        "https://github.com/sengaranshika94-wq",
        "_blank"
      );

      return;
    }

    if (cmd === "linkedin") {
      addOutput(
        cmd,
        "Opening LinkedIn profile..."
      );

      window.open(
        "https://linkedin.com/in/anshika-sengar-449162335",
        "_blank"
      );

      return;
    }

    const response =
      commands[cmd] ||
      `
Unknown command: "${cmd}"

Type:
help
or
clear
      `;

    addOutput(cmd, response);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#050816] text-white">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" />

      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Main */}
      <div className="relative z-10 flex h-full flex-col p-5">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-wide text-cyan-300">
              Nexus
            </h1>

            <p className="text-sm text-white/40">
              Interactive Portfolio Console
            </p>
          </div>

          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-300">
            ONLINE
          </div>
        </div>

        {/* Terminal Wrapper */}
        <div className="flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl">
          <div
            ref={terminalRef}
            className="h-full overflow-y-auto no-scrollbar p-2"
          >
            <Terminal
              name="Nexus"
              colorMode={ColorMode.Dark}
              onInput={onInput}
            >
              {terminalLineData}
            </Terminal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nexus;
