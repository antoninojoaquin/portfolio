
const Navbar = () => {
  return (
    <nav className="p-4 fixed flex justify-center w-full z-50">
      <div className="bg-slate-950 border border-[#00d1ff] rounded-full px-12 py-2">
        <ul className="space-x-8 text-lg font-medium">
          <li className="inline hover:text-[#00d1ff] cursor-pointer">
            Home
          </li>
          <li className="inline hover:text-[#00d1ff] cursor-pointer">
            Projects
          </li>
          <li className="inline hover:text-[#00d1ff] cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar