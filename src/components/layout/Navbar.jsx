import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Log in", to: "/log_in" },
];

const linkClassName = ({ isActive }) =>
  `font-serif transition-colors hover:text-pink-600 ${
    isActive ? "text-pink-600" : "text-gray-700"
  }`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img
            src={Logo}
            alt="GeniusMind Academy"
            className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
          />
        </Link>

        <ul className="hidden items-center gap-6 md:flex lg:gap-10">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={(props) =>
                  `${linkClassName(props)} text-xl lg:text-2xl`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-gray-700 transition-colors hover:bg-pink-50 hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white shadow-md md:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={(props) =>
                    `${linkClassName(props)} block rounded-md px-3 py-3 text-lg`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
