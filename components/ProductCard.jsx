import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const formatHarga = (h) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(h);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'white', borderRadius: 18, overflow: 'hidden',
        boxShadow: hovered ? '0 20px 50px rgba(107,76,59,0.14)' : '0 4px 18px rgba(107,76,59,0.07)',
        transform: hovered ? 'translateY(-6px)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', height: 210 }}>
        <img src={product.src} alt={product.alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hovered ? 'scale(1.07)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
        <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(212,149,106,0.9)', color: 'white', padding: '3px 10px', borderRadius: 50, fontSize: 11, fontWeight: 700 }}>
          {product.kategori}
        </div>
      </div>
      <div style={{ padding: '18px 18px 20px' }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#6B4C3B', margin: '0 0 6px', lineHeight: 1.3 }}>{product.nama}</h3>
        <p style={{ color: '#A07860', fontSize: 12, lineHeight: 1.6, margin: '0 0 12px' }}>{product.deskripsi}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#D4956A' }}>{formatHarga(product.harga)}</span>
          <div style={{ display: 'flex', gap: 1 }}>{[1,2,3,4,5].map(s => <span key={s} style={{ fontSize: 11, color: '#F5D5BC' }}>★</span>)}</div>
        </div>
        <button onClick={handleAdd} style={{
          width: '100%', padding: '10px', borderRadius: 50, border: 'none',
          background: added ? '#22c55e' : (hovered ? '#D4956A' : '#6B4C3B'),
          color: 'white', fontSize: 13, fontWeight: 700, cursor: 'pointer',
          transition: 'background 0.3s', letterSpacing: '0.03em',
        }}>
          {added ? '✓ Ditambahkan!' : '🛒 Tambah ke Keranjang'}
        </button>
      </div>
    </div>
  );
}
