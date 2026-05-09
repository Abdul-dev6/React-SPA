import { Link } from "react-router-dom";
import logo from "../../assets/photos/favicon.png";

function Navbar() {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8" />
        SalesVista
      </div>

      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>

        <Link to="/create" className="hover:text-gray-200">
          Add Product
        </Link>

        <Link to="/items" className="hover:text-gray-200">
          View Products
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
