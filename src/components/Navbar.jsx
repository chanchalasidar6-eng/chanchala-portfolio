import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-tag">&lt;</span>
          <h2 className="logo-title">Chanchala Sidar</h2>
          <span className="logo-tag">/&gt;</span>
        </NavLink>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" onClick={closeMenu}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={closeMenu}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" onClick={closeMenu}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/certificates" onClick={closeMenu}>
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" onClick={closeMenu}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;