import { Film } from "lucide-react"; // si usás Lucide o cualquier ícono

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg border-b border-blue-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo con ícono */}
        <div className="flex items-center gap-2 text-2xl font-bold tracking-wide cursor-pointer hover:text-yellow-400 transition-colors duration-300">
          <Film className="w-6 h-6" />
          MovieApp
        </div>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li className="hover:underline underline-offset-4 decoration-yellow-400 transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:underline underline-offset-4 decoration-yellow-400 transition duration-300 cursor-pointer">
              Géneros
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


