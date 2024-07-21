import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

function Nav() {
  return (
    <div className="py-4 px-8 bg-gray-900">
      <header className="max-w-7xl flex items-center justify-between  mx-auto bg-gray-900">
        <h1 className="batman-heading text-yellow-400 text-5xl">Batman News</h1>
        <nav className="flex space-x-8">
          <NavLink
            to="/"
            className="text-xl text-gray-400 hover:text-white active:text-yellow-500 pb-2 flex items-center"
            exact
          >
            <FaHome className="mr-1" /> Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-xl text-gray-400 hover:text-white active:text-yellow-500 pb-2 flex items-center"
          >
            <FaInfoCircle className="mr-1" /> About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-xl text-gray-400 hover:text-white active:text-yellow-500 pb-2 flex items-center"
          >
            <FaEnvelope className="mr-1" /> Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
