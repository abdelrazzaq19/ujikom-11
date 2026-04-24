import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #6B4C3B 0%, #8B6355 60%, #B89080 100%)',
      padding: '120px 24px 70px', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(212,149,106,0.12)', filter: 'blur(50px)' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 250, height: 250, borderRadius: '50%', background: 'rgba(212,149,106,0.08)', filter: 'blur(40px)' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {breadcrumb && (
          <div style={{ marginBottom: 14, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#F5D5BC' }}>{breadcrumb}</span>
          </div>
        )}
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: 'white', margin: '0 0 12px' }}>{title}</h1>
        {subtitle && <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>{subtitle}</p>}
      </div>
    </div>
  );
}
