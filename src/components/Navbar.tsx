
const Navbar = () => {
  return (
    <nav className="p-4 fixed flex justify-center w-full z-50">
      <div className="bg-slate-950 border border-[#00d1ff] rounded-full px-8 md:px-14 py-2">
        <ul className="space-x-8 md:space-x-14 text-lg font-medium">
          <a href="#home" className="inline hover:text-[#00d1ff] cursor-pointer hover:border-b-2 border-[#00d1ff]">
            Inicio
          </a>
          <a href="#projects" className="inline hover:text-[#00d1ff] cursor-pointer hover:border-b-2 border-[#00d1ff]">
            Proyectos
          </a>
          <a href="#contact" className="inline hover:text-[#00d1ff] cursor-pointer hover:border-b-2 border-[#00d1ff]">
            Contacto
          </a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar