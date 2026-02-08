import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="p-4 fixed flex justify-center w-full z-50">
      <div className="bg-slate-900 border border-[#00d1ff] rounded-xl px-8 md:px-14 py-2">
        <ul className="flex space-x-8 md:space-x-14 text-lg font-medium">
          
          <li>
            <Link 
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer border-b-2 border-transparent hover:border-[#00d1ff] transition-colors duration-250 font-geistMono"
              activeClass="border-[#00d1ff] text-[#00d1ff]"
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer border-b-2 border-transparent hover:border-[#00d1ff] transition-colors duration-250"
              activeClass="border-[#00d1ff] text-[#00d1ff]"
              spy={true}
            >
              Proyectos
            </Link>
          </li>

          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer border-b-2 border-transparent hover:border-[#00d1ff] transition-colors duration-250"
              activeClass="border-[#00d1ff] text-[#00d1ff]"
              spy={true}
            >
              Sobre mí
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;