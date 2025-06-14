// import Contact from "./components/Contact";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Tech from "./components/Tech";

// function App() {
//   return (
//     <>
//     <main className=" font-bold"> 
//       <Navbar />
//       <Hero />
//       <Tech />
//       <Projects />
//       <Contact />
//     </main>
//     </>
//   );
// }

// export default App;



import Home from "./components/Home";
import React from "react";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">

      <Home />
    </div>
  );
}

export default App;