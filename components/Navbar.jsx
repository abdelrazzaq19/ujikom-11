import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled || !isHome ? 'rgba(253,246,240,0.97)' : 'transparent',
      boxShadow: scrolled || !isHome ? '0 2px 20px rgba(107,76,59,0.08)' : 'none',
      backdropFilter: scrolled || !isHome ? 'blur(12px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 38, height: 38, background: '#D4956A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 800, fontSize: 17, fontFamily: 'serif' }}>L</span>
          </div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 19, color: '#D4956A' }}>
            Leni<span style={{ color: scrolled || !isHome ? '#6B4C3B' : 'white' }}>Snacks</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="desktop-only" style={{ display: 'flex', gap: 28, listStyle: 'none', margin: 0, padding: 0 }}>
          {navLinks.map(link => {
            const active = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link to={link.to} style={{
                  textDecoration: 'none', fontSize: 13, fontWeight: 700,
                  color: active ? '#D4956A' : (scrolled || !isHome ? '#6B4C3B' : 'rgba(255,255,255,0.9)'),
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  borderBottom: active ? '2px solid #D4956A' : '2px solid transparent',
                  paddingBottom: 2, transition: 'color 0.2s',
                }}>{link.label}</Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="desktop-only" style={{
          background: '#D4956A', color: 'white', padding: '9px 20px',
          borderRadius: 50, fontSize: 13, fontWeight: 700, textDecoration: 'none',
          letterSpacing: '0.05em', transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#C07850'}
          onMouseLeave={e => e.currentTarget.style.background = '#D4956A'}
        >Order Sekarang</Link>

        {/* Hamburger */}
        <button className="mobile-only" onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: scrolled || !isHome ? '#6B4C3B' : 'white', fontSize: 22 }}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-only" style={{ background: '#FDF6F0', borderTop: '1px solid #EDD9C8', padding: '12px 24px 20px' }}>
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} style={{
              display: 'block', padding: '11px 0', textDecoration: 'none',
              fontSize: 14, fontWeight: 700, color: location.pathname === link.to ? '#D4956A' : '#6B4C3B',
              borderBottom: '1px solid #EDD9C8', letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>{link.label}</Link>
          ))}
          <Link to="/contact" style={{
            display: 'block', marginTop: 16, background: '#D4956A', color: 'white',
            padding: '12px', borderRadius: 50, textAlign: 'center',
            fontSize: 14, fontWeight: 700, textDecoration: 'none',
          }}>Order Sekarang</Link>
        </div>
      )}
    </nav>
  );
}
