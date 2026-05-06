import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav>
        <div>
          <h1>MyPortfolio</h1>

          {/* Desktop Menu */}
          <ul className="desktop-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Hamburger Button */}
          <button
            className={`menu-btn ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu - Right Side Panel */}
        <ul className={`mobile-menu ${open ? "active" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* Dark Overlay Behind Panel */}
      <div
        className={`menu-overlay ${open ? "active" : ""}`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;