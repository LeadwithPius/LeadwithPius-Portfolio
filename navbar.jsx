import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = () => {
    setOpen(false);
  };

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="logo">BRUCE PIUS</div>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#about" onClick={handleLink}>About</a>
          <a href="#projects" onClick={handleLink}>Projects</a>
          <a href="#contact" onClick={handleLink}>Contact</a>
          <a href="/public/assets/Bruce  Resume updated.pdf" download>Resume</a>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
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
