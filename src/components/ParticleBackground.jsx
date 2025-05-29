// import React from "react";
// import Particles from "@tsparticles/react";
// import { loadFull } from "@tsparticles/engine";

// const ParticleBackground = () => {
//   const particlesInit = async (engine) => {
//     await loadFull(engine); // this is correct
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       className="fixed inset-0 -z-10"
//       options={{
//         background: {
//           color: {
//             value: "#000000",
//           },
//         },
//         particles: {
//           number: {
//             value: 60,
//             density: {
//               enable: true,
//               area: 800,
//             },
//           },
//           color: {
//             value: "#00ffff",
//           },
//           links: {
//             enable: true,
//             distance: 150,
//             color: "#00ffff",
//             opacity: 0.4,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 2,
//           },
//         },
//         fullScreen: {
//           enable: false,
//         },
//       }}
//     />
//   );
// };

// export default ParticleBackground;




import React from "react";
import Particles from "@tsparticles/react";

const ParticleBackground = () => {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: { value: "#000000" },
        },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#00ffff" },
          links: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 2 },
        },
        fullScreen: { enable: false },
      }}
    />
  );
};

export default ParticleBackground;
