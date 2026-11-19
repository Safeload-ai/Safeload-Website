import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" aria-label="SafeLoad AI home" style={{ display: 'inline-flex' }}>
              <img src="/safeload-logo-dark.svg" alt="SafeLoad" className="footer-logo" />
            </Link>
            <span className="footer-tagline-strong">SafeLoad AI &middot; Trust at Every Handoff.</span>
            <p className="footer-tagline">Digital chain-of-custody technology for modern freight operations.</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <div className="footer-col">
              <span className="eyebrow">Product</span>
              <Link to="/platform">Platform</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/solutions">Solutions</Link>
              <Link to="/guardian-ai">Guardian AI</Link>
            </div>
            <div className="footer-col">
              <span className="eyebrow">Company</span>
              <Link to="/about">About</Link>
              <Link to="/partners">Design Partners</Link>
              <Link to="/partners#inquiry">Contact</Link>
            </div>
            <div className="footer-col">
              <span className="eyebrow">Legal</span>
              <Link to="#privacy">Privacy Policy</Link>
              <Link to="#terms">Terms of Use</Link>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">&copy; {new Date().getFullYear()} SafeLoad AI. All rights reserved.</div>
      </div>
    </footer>
  );
}
