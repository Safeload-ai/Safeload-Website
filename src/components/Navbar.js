import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Platform', to: '/platform' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Guardian AI', to: '/guardian-ai' },
  { label: 'Design Partners', to: '/partners' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-logo" aria-label="SafeLoad AI home">
          <img src="/safeload-lockup-reversed.svg" alt="SafeLoad" />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>

        <nav className={`site-nav${open ? ' open' : ''}`} aria-label="Primary">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={pathname === to ? 'active' : ''}
              aria-current={pathname === to ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link to="/partners" className="btn btn-light" onClick={() => setOpen(false)}>
            Become a Design Partner <span className="sl-arr" aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
