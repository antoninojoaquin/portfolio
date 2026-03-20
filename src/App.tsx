import Navbar from "./components/Navbar"    
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import About from "./pages/About"
import ReactLenis from 'lenis/react'
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-cyan-950">
      <AnimatedCursor
      innerSize={16}
      outerSize={8}
      color="	0, 146, 179"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5} />
      <ReactLenis root />
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </div>
  )
}
export default App