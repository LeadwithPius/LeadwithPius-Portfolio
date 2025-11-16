import React from 'react';
import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLink = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="logo">BRUCE PIUS</div>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#about" onClick={handleLink}>About</a>
          <a href="#projects" onClick={handleLink}>Projects</a>
          <a href="#contact" onClick={handleLink}>Contact</a>
          <a href="#contacts" onClick={handleLink}>Contacts</a>
          <a href="/assets/Bruce Pius Resume upt.pdf" download>Resume</a>
        </nav>
        <button
          aria-label="Toggle navigation"
          className={`hamburger ${open ? 'is-active' : ''}`}
          onClick={() => setOpen(o => !o)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
  );
}
