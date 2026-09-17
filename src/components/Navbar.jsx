import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-16 object-contain sm:h-18 sm:w-18 lg:h-20 lg:w-20"
          />
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <li>
            <Link
              to="/"
              className="text-lg font-serif text-gray-700 transition-colors hover:text-pink-600 sm:text-xl lg:text-2xl"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/courses"
              className="text-lg font-serif text-gray-700 transition-colors hover:text-pink-600 sm:text-xl lg:text-2xl"
            >
              Courses
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-lg font-serif text-gray-700 transition-colors hover:text-pink-600 sm:text-xl lg:text-2xl"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-lg font-serif text-gray-700 transition-colors hover:text-pink-600 sm:text-xl lg:text-2xl"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/log_in"
              className="text-lg font-serif text-gray-700 transition-colors hover:text-pink-600 sm:text-xl lg:text-2xl"
            >
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
