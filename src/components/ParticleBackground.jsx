import Particles from "react-tsparticles";

const ParticleBackground = () => (
  <Particles
    options={{
      fullScreen: { enable: true },
      particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { enable: true, speed: 1 },
        links: { enable: true, color: "#ffffff" },
      },
    }}
  />
);

export default ParticleBackground;

// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";

// const ParticleBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true },
//         particles: {
//           number: { value: 80 },
//           size: { value: 3 },
//           move: { enable: true, speed: 1 },
//           links: { enable: true, color: "#fff" },
//         },
//       }}
//     />
//   );
// };

// export default ParticleBackground;

