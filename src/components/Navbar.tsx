const Navbar = () => {
  return (
    <nav className="p-4 fixed flex justify-center w-full z-50">
      <div className="bg-slate-900 border border-[#00d1ff] rounded-xl px-8 md:px-14 py-2">
        <ul className="space-x-8 md:space-x-14 text-lg font-medium">
          <a href="#home" className="inline cursor-pointer border-b-2 border-transparent hover:border-[#00d1ff] ease-in-out transition-colors duration-250">
            Inicio
          </a>
          <a href="#projects" className="inline cursor-pointer border-b-2 border-transparent hover:border-[#00d1ff] ease-in-out transition-colors duration-250">
            Proyectos
          </a>
          <a href="#contact" className="inline cursor-pointer border-b-2 border-transparent hover:border-[#00d1ff] ease-in-out transition-colors duration-250">
            Contacto
          </a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar