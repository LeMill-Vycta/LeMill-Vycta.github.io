import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 h-full w-full translate-z-0"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              area: 900,
            },
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.8, max: 2.2 },
          },
          links: {
            enable: true,
            distance: 140,
            color: "#f13024",
            opacity: 0.14,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          collisions: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: false },
            resize: true,
          },
        },
      }}
    />
  );
};

export default ParticlesContainer;
