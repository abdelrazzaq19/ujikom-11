import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { SiShopee } from 'react-icons/si';

const socialLinks = [
  { icon: <FaFacebookF />, href: 'https://facebook.com', label: 'Facebook', color: '#C4A882' },
  { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram', color: '#F9A8C9' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/6281275620808', label: 'WhatsApp', color: '#A8C5A0' },
  { icon: <SiShopee />, href: 'https://shopee.co.id', label: 'Shopee', color: '#F9A8C9' },
  { icon: <span style={{ fontSize: 11, fontWeight: 'bold' }}>T</span>, href: 'https://tokopedia.com', label: 'Tokopedia', color: '#A8C5A0' },
  { icon: <FaTiktok />, href: 'https://tiktok.com', label: 'TikTok', color: '#010101' },
];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#3D2820', color: 'white' }}>
      {/* CTA Banner */}
      <div style={{ background: '#D4956A', padding: '40px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, margin: '0 0 10px' }}>
          Tertarik Menjadi Reseller? 🎉
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 20, fontSize: 15 }}>
          Bergabung dengan ribuan reseller sukses LeniSnacks di seluruh Indonesia!
        </p>
        <a href="https://wa.me/6281275620808" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block', background: 'white', color: '#D4956A',
          padding: '11px 28px', borderRadius: 50, fontWeight: 800, fontSize: 13,
          textDecoration: 'none', letterSpacing: '0.05em',
        }}>Hubungi via WhatsApp</a>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 36 }}>
        
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 38, height: 38, background: '#D4956A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 800, fontSize: 17, fontFamily: 'serif' }}>L</span>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 19 }}>
              Leni<span style={{ color: '#D4956A' }}>Snacks</span>
            </span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.8, marginBottom: 20 }}>
            Camilan lezat berkualitas tinggi untuk seluruh keluarga Indonesia sejak lebih dari satu dekade.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 13, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#D4956A', textTransform: 'uppercase', marginBottom: 18 }}>Menu</h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {quickLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'white'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#D4956A', textTransform: 'uppercase', marginBottom: 18 }}>Hubungi Kami</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: <FaMapMarkerAlt />, text: 'Jl. Contoh No. 123, Kel. Sukamaju, Kec. Rasa Enak, Kota Snackville, Jawa Barat 12345' },
              { icon: <FaPhone />, text: '+62 812 7562 0808' },
              { icon: <FaEnvelope />, text: 'info@lenisnacks.com' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#D4956A', marginTop: 2, flexShrink: 0, fontSize: 13 }}>{item.icon}</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '14px 24px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>
          © {new Date().getFullYear()} LeniSnacks. All rights reserved. Made with ❤️ in Indonesia.
        </p>
      </div>
    </footer>
  );
}
