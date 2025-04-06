import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <>
    <main className=" font-bold"> 
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
      <Contact />
    </main>
    </>
  );
}

export default App;
