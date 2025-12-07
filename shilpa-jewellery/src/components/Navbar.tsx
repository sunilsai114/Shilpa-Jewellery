import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner" role="navigation" aria-label="Primary">
          <div className="nav-left">
            <a href="#" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#collections" onClick={() => scrollToSection('collections')}>Collections</a>
          </div>

          <div className="nav-center">
            <div className="navbar-logo" role="banner">Shilpa Jewellery</div>
          </div>

          <div className="nav-right">
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>

          {/* Mobile toggle shown on narrow screens */}
          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(s => !s)}
          >
            <span className="hamburger" aria-hidden="true" />
          </button>

          {/* Collapsible mobile menu - duplicates links for simpler mobile UX */}
          <div className={`mobile-menu ${open ? 'open' : ''}`}>
            <a href="#" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#collections" onClick={() => scrollToSection('collections')}>Collections</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;