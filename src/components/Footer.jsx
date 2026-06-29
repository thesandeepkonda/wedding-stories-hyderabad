import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">💍</span>
              <span className="logo-text">Wedding Stories Hyderabad</span>
              <span className="logo-sub">Hyderabad</span>
            </div>
            <p className="footer-desc">
              Preserving your love story through timeless photography. 
              Every click tells a tale of joy, emotion, and togetherness.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram" className="social-icon">📷</a>
              <a href="#" aria-label="Facebook" className="social-icon">📘</a>
              <a href="#" aria-label="YouTube" className="social-icon">▶️</a>
              <a href="#" aria-label="Pinterest" className="social-icon">📌</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">Wedding Photography</Link></li>
              <li><Link to="/services">Pre‑Wedding Shoot</Link></li>
              <li><Link to="/services">Cinematic Videography</Link></li>
              <li><Link to="/services">Albums &amp; Prints</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <p><span className="contact-icon">📞</span> +91 9494348355</p>
            <p><span className="contact-icon">✉️</span> hello@weddingdiarieshyd.com</p>
            <p><span className="contact-icon">📍</span>  Hyderabad</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {year} Wedding Stories Hyderabad Hyderabad. All rights reserved.</p>
          <p>Made with ❤️ for the love of photography</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;