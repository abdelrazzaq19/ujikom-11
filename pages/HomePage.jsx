import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productsAPI } from '../src/services/api';

const testimonials = [
  { id: 1, nama: 'Sari W.', kota: 'Jakarta', pesan: 'Keripik bayamnya enak banget, renyah dan tidak berminyak. Pasti beli lagi!', bintang: 5 },
  { id: 2, nama: 'Budi P.', kota: 'Bandung', pesan: 'Packaging rapih, pengiriman cepat. Kualitas snacknya juara!', bintang: 5 },
  { id: 3, nama: 'Rina M.', kota: 'Surabaya', pesan: 'Sudah langganan 2 tahun, konsisten enak dan porsinya pas.', bintang: 5 },
];

const keunggulan = [
  { icon: '🌿', judul: 'Bahan Alami', deskripsi: 'Dipilih dari bahan segar tanpa pengawet berbahaya.' },
  { icon: '🏭', judul: 'Produksi Higienis', deskripsi: 'Dapur bersertifikat dengan standar kebersihan tinggi.' },
  { icon: '📦', judul: 'Packaging Aman', deskripsi: 'Dikemas rapi agar produk tiba dalam kondisi sempurna.' },
  { icon: '🚚', judul: 'Pengiriman Cepat', deskripsi: 'Layanan pengiriman ke seluruh Indonesia.' },
];

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    productsAPI.getAll({ limit: 3 })
      .then(res => setFeaturedProducts(res.data))
      .catch(() => { });
  }, []);

  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #6B4C3B 0%, #9B6E58 40%, #C49070 100%)',
      }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'rgba(212,149,106,0.15)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: -150, left: -100, width: 600, height: 600, borderRadius: '50%', background: 'rgba(212,149,106,0.08)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px 60px', display: 'flex', alignItems: 'center', gap: 60, width: '100%', position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,149,106,0.2)', border: '1px solid rgba(212,149,106,0.4)', borderRadius: 50, padding: '6px 16px', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4956A', display: 'inline-block' }} />
              <span style={{ color: '#F5D5BC', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Camilan Pilihan Keluarga</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 800, color: 'white', lineHeight: 1.1, margin: '0 0 18px' }}>
              Good Food,<br /><span style={{ color: '#F5D5BC', fontStyle: 'italic' }}>Good Eating</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.8, maxWidth: 460, margin: '0 0 32px' }}>
              Camilan lezat berkualitas tinggi, dibuat dengan bahan pilihan dan penuh cinta. Nikmati setiap gigitan bersama keluarga tercinta.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/products" style={{ background: '#D4956A', color: 'white', padding: '13px 28px', borderRadius: 50, fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 30px rgba(212,149,106,0.4)', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
              >🛒 Lihat Produk</Link>
              <Link to="/about" style={{ background: 'transparent', color: 'white', padding: '13px 28px', borderRadius: 50, fontSize: 14, fontWeight: 700, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'transparent'; }}
              >Tentang Kami</Link>
            </div>
            <div style={{ display: 'flex', gap: 28, marginTop: 44, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {[['10+', 'Tahun Pengalaman'], ['50+', 'Varian Produk'], ['10K+', 'Pelanggan Puas']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 800, color: '#F5D5BC' }}>{num}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative', minWidth: 260 }}>
            <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', background: 'rgba(212,149,106,0.2)', filter: 'blur(40px)' }} />
            <div style={{ width: 300, height: 300, borderRadius: '50%', overflow: 'hidden', border: '5px solid rgba(212,149,106,0.4)', boxShadow: '0 30px 80px rgba(0,0,0,0.4)', position: 'relative' }}>
              <img src="https://picsum.photos/id/292/400/400" alt="Featured Snack" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', top: 20, right: 10, background: 'white', borderRadius: 14, padding: '9px 14px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
              <div style={{ fontSize: 10, color: '#888', fontWeight: 600 }}>Rating</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#6B4C3B' }}>⭐ 4.9/5</div>
            </div>
            <div style={{ position: 'absolute', bottom: 30, left: 10, background: '#D4956A', borderRadius: 14, padding: '9px 14px' }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>Tersedia</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: 'white' }}>50+ Produk</div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section style={{ background: '#FDF6F0', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <span style={{ color: '#D4956A', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>— Mengapa Kami —</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#6B4C3B', margin: 0 }}>Kualitas Terjamin di Setiap Gigitan</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {keunggulan.map(item => (
              <div key={item.judul} style={{ background: 'white', borderRadius: 16, padding: 28, textAlign: 'center', boxShadow: '0 4px 20px rgba(107,76,59,0.06)', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#6B4C3B', margin: '0 0 8px' }}>{item.judul}</h3>
                <p style={{ color: '#A07860', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <span style={{ color: '#D4956A', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>— Pilihan Terbaik —</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#6B4C3B', margin: '0 0 12px' }}>Produk Unggulan Kami</h2>
            <p style={{ color: '#A07860', fontSize: 15, maxWidth: 480, margin: '0 auto' }}>Dicintai ribuan pelanggan setia kami di seluruh Indonesia.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
            {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '2px solid #D4956A', color: '#D4956A', padding: '12px 32px', borderRadius: 50, fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: 'all 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#D4956A'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#D4956A'; }}
            >Lihat Semua Produk →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'linear-gradient(135deg, #7A5244, #A07060)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ color: '#F5D5BC', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>— Testimoni —</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'white', margin: 0 }}>Kata Pelanggan Kami</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {testimonials.map(t => (
              <div key={t.id} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: 26 }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>{[1, 2, 3, 4, 5].map(s => <span key={s} style={{ fontSize: 15, color: '#F5D5BC' }}>★</span>)}</div>
                <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 14, lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 18px' }}>"{t.pesan}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#D4956A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 15 }}>{t.nama[0]}</div>
                  <div>
                    <div style={{ color: 'white', fontWeight: 700, fontSize: 13 }}>{t.nama}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>{t.kota}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}