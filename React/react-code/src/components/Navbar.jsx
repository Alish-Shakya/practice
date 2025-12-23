import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <nav className=" p-5 md:px-20 md:p-10">
        <div className="flex justify-between">
          <Link to="/" className="font-bold text-4xl">
            Shakya
          </Link>

          {/* Desktop  */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 font-semibold"
                    : "hover:text-red-300 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile  */}
          <button onClick={() => setOpen(!open)} className="text-2xl md:hidden">
            ☰
          </button>

          {open && (
            <div className="md:hidden mt-6 flex flex-col space-y-5 text-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="hover:text-red-600"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
