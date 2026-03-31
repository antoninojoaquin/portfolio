import Navbar from "./components/Navbar"    
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import About from "./pages/About"
import ReactLenis from 'lenis/react'
import { SmoothCursor } from "./components/ui/smooth-cursor"

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-cyan-950">
      <SmoothCursor />
      <ReactLenis root />
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </div>
  )
}
export default App