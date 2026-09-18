// useState lets us store and change the mobile menu's open/closed state
import { useState } from "react";

// Menu and X are icons from the lucide-react library
import { Menu, X } from "lucide-react";

// Link is used for navigation.
// NavLink is similar to Link, but it also knows which page is currently active.
import { Link, NavLink } from "react-router-dom";

// Import the logo image
import Logo from "../../assets/images/logo.png";

// List of normal navigation links
const navItems = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// Common styling for navigation links
const linkClassName = ({ isActive }) =>
  `font-serif transition-colors hover:text-pink-600 ${
    isActive ? "text-pink-600" : "text-gray-700"
  }`;

function Navbar() {
  // Keeps track of whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Main navbar
    <nav className="relative w-full bg-white shadow-sm">
      {/* 
        Main navbar container

        flex            → puts logo and right-side content in a row
        items-center    → vertically centers everything
        justify-between → puts logo on the left and navigation on the right
      */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* ==================== LOGO ==================== */}

        {/* Clicking the logo takes the user to Home */}
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img
            src={Logo}
            alt="GeniusMind Academy"
            className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
          />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}

        {/* 
          This div groups:

          Home
          Courses
          About
          Contact
          Log in
          Sign up free

          together.

          md:flex → show on medium screens and larger
          hidden   → hide on small/mobile screens
        */}
        <div className="hidden items-center md:flex">
          {/* Normal navigation links */}
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={(props) => `${linkClassName(props)} text-xl`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ==================== LOG IN ==================== */}

          {/* 
            Log in is a normal text link,
            not a pink button.
          */}
          <Link
            to="/log_in"
            className="ml-55 font-serif text-xl text-gray-700 transition-colors hover:text-pink-600"
          >
            Log in
          </Link>

          {/* ================== SIGN UP BUTTON ================== */}

          {/* 
            Sign up is a Link styled to look like a button.

            Clicking it → /sign_up
          */}
          <Link
            to="/sign_up"
            className="ml-5 rounded-xl bg-pink-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-pink-700"
          >
            Sign up free
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}

        {/* 
          This button is only visible on mobile.

          md:hidden → hide on medium screens and larger.
        */}
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
          {/* 
            If menu is open → show X
            If menu is closed → show Menu icon
          */}
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}

      {/* Only render this section when the menu is open */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white shadow-md md:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {/* Normal mobile navigation links */}
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

            {/* ================= MOBILE LOG IN ================= */}

            <li>
              <Link
                to="/log_in"
                className="block rounded-md px-3 py-3 font-serif text-lg text-gray-700 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
            </li>

            {/* ================= MOBILE SIGN UP ================= */}

            <li>
              <Link
                to="/sign_up"
                className="mt-2 block rounded-xl bg-pink-600 px-3 py-3 text-center font-serif text-lg font-semibold text-white hover:bg-pink-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up free
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// Export Navbar so other components can use it
export default Navbar;
