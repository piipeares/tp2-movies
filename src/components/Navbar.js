const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        <div className="text-2xl font-bold cursor-pointer">
          MovieApp
        </div>

        <nav>
          <ul className="flex space-x-8 text-lg">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
              Home
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
              Generos
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

