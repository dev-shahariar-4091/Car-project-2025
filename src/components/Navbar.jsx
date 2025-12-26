import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar () {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-brand-600 font-semibold"
      : "text-gray-700 hover:text-brand-600";

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <NavLink
          to="/"
          aria-label="AutoCar Home"
          className="text-xl font-bold text-brand-600"
        >
          RentCar
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center gap-6 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto px-6 md:px-0 py-4 md:py-0 transition ${
            open ? "top-14" : "top-[-400px]"
          }`}
        >
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/cars" className={linkClass}>
            Cars
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <NavLink to="/signup" className={linkClass}>
            Signup
          </NavLink>
          <NavLink to="/login" className={linkClass}>
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}