import FloatingLines from "../components/FloatingLines";

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-slate-900 flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="w-full h-full">
        <FloatingLines 
            linesGradient={["#99fffe","#00d1ff","#0090c1"]} 
            enabledWaves={["top","middle","bottom"]}
            lineCount={5}
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
        />
        </div>

    </section>
    );
};

export default Projects;