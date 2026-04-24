import React, { useState } from 'react';
import { productsData, kategoriList } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import PageHeader from '../components/PageHeader';

export default function ProductsPage() {
  const [aktif, setAktif] = useState('Semua');
  const [search, setSearch] = useState('');

  const filtered = productsData.filter(p => {
    const matchKategori = aktif === 'Semua' || p.kategori === aktif;
    const matchSearch = p.nama.toLowerCase().includes(search.toLowerCase());
    return matchKategori && matchSearch;
  });

  return (
    <div>
      <PageHeader title="Produk Kami" subtitle="Temukan berbagai pilihan camilan lezat berkualitas tinggi." breadcrumb="Products" />

      <section style={{ background: '#FDF6F0', padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Search & Filter */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 40, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {kategoriList.map(k => (
                <button key={k} onClick={() => setAktif(k)} style={{
                  padding: '8px 20px', borderRadius: 50, border: '2px solid',
                  borderColor: aktif === k ? '#D4956A' : '#DEC9B2',
                  background: aktif === k ? '#D4956A' : 'white',
                  color: aktif === k ? 'white' : '#6B4C3B',
                  fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
                }}>{k}</button>
              ))}
            </div>
            <input
              type="text" placeholder="Cari produk..."
              value={search} onChange={e => setSearch(e.target.value)}
              style={{
                padding: '10px 18px', borderRadius: 50, border: '2px solid #DEC9B2',
                fontSize: 13, outline: 'none', minWidth: 200, fontFamily: 'inherit',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = '#D4956A'}
              onBlur={e => e.target.style.borderColor = '#DEC9B2'}
            />
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#A07860' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 16 }}>Produk tidak ditemukan. Coba kata kunci lain.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
