import { useMemo, useCallback } from "react";
import { Particles, ParticlesProvider, type ParticlesPluginRegistrar } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const registerEngine: ParticlesPluginRegistrar = async (engine) => {
  await loadSlim(engine);
};

/**
 * Full-viewport particle network: fixed behind all content, styled as a
 * faint "ledger" of connected nodes rather than generic confetti — cyan
 * links, a handful of red/amber nodes standing in for flagged transactions.
 */
export default function ParticlesBackground() {
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 70, density: { enable: true, width: 1600, height: 1000 } },
        color: { value: ["#00e5ff", "#ff2d55", "#ffb020"] },
        opacity: { value: { min: 0.25, max: 0.7 } },
        size: { value: { min: 1, max: 2.4 } },
        links: {
          enable: true,
          distance: 130,
          color: "#0c8ea3",
          opacity: 0.28,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.55,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 150, links: { opacity: 0.5 } },
        },
      },
    }),
    []
  );

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <ParticlesProvider init={registerEngine}>
      <Particles
        id="tsparticles"
        className="pointer-events-none fixed inset-0 -z-10"
        options={options}
        particlesLoaded={particlesLoaded}
      />
    </ParticlesProvider>
  );
}
