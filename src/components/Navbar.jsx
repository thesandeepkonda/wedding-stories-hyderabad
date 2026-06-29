import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <NavLink to="/" className="nav-logo">
          <span className="logo-icon">💍</span>
          <span className="logo-text">Wedding Stories Hyderabad</span>
          <span className="logo-sub">Hyderabad</span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          {/* Mobile CTA (hidden on desktop) */}
          <li className="mobile-cta">
            <button
              className="nav-cta"
              onClick={() => window.location.href = '/contact'}
            >
              Book Now
            </button>
          </li>
        </ul>

        {/* Desktop CTA */}
        <button
          className="nav-cta desktop-cta"
          onClick={() => window.location.href = '/contact'}
        >
          Book Now
        </button>

        {/* Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      {isMenuOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;