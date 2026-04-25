import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { galleryAPI } from '../src/services/api';

export default function GalleryPage() {
  const [gallery, setGallery]       = useState([]);
  const [categories, setCategories] = useState(['Semua']);
  const [aktif, setAktif]           = useState('Semua');
  const [lightbox, setLightbox]     = useState(null);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);

  // Fetch categories once
  useEffect(() => {
    galleryAPI.getCategories()
      .then(res => setCategories(res.data))
      .catch(() => {});
  }, []);

  // Fetch gallery on filter change
  useEffect(() => {
    setLoading(true);
    setError(null);

    const params = { limit: 100 };
    if (aktif !== 'Semua') params.kategori = aktif;

    galleryAPI.getAll(params)
      .then(res => setGallery(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [aktif]);

  const filtered = gallery; // already filtered by API

  const navigateLightbox = (dir) => {
    const idx  = filtered.findIndex(g => g.id === lightbox.id);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next]);
  };

  return (
    <div>
      <PageHeader title="Gallery" subtitle="Lihat koleksi foto produk dan aktivitas produksi kami." breadcrumb="Gallery" />

      <section style={{ background: '#FDF6F0', padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Filter */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 44, flexWrap: 'wrap' }}>
            {categories.map(k => (
              <button key={k} onClick={() => setAktif(k)} style={{
                padding: '8px 22px', borderRadius: 50, border: '2px solid',
                borderColor: aktif === k ? '#D4956A' : '#DEC9B2',
                background: aktif === k ? '#D4956A' : 'white',
                color: aktif === k ? 'white' : '#6B4C3B',
                fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
              }}>{k}</button>
            ))}
          </div>

          {/* Loading */}
          {loading && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ display: 'inline-block', width: 40, height: 40, border: '3px solid #EDD9C8', borderTopColor: '#D4956A', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#C0392B' }}>
              <p>⚠️ Gagal memuat galeri: {error}</p>
            </div>
          )}

          {/* Grid */}
          {!loading && !error && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
              {filtered.map(item => (
                <div key={item.id} onClick={() => setLightbox(item)}
                  style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', cursor: 'pointer', aspectRatio: '4/3' }}
                  onMouseEnter={e => { e.currentTarget.querySelector('.overlay').style.opacity = '1'; }}
                  onMouseLeave={e => { e.currentTarget.querySelector('.overlay').style.opacity = '0'; }}
                >
                  <img src={item.src} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div className="overlay" style={{
                    position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(107,76,59,0.8), rgba(107,76,59,0.2))',
                    display: 'flex', alignItems: 'flex-end', padding: 16, opacity: 0, transition: 'opacity 0.3s',
                  }}>
                    <div>
                      <span style={{ background: 'rgba(212,149,106,0.9)', color: 'white', padding: '2px 10px', borderRadius: 50, fontSize: 10, fontWeight: 700, display: 'block', marginBottom: 6, width: 'fit-content' }}>{item.kategori}</span>
                      <p style={{ color: 'white', fontSize: 13, fontWeight: 600, margin: 0 }}>{item.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <button onClick={() => setLightbox(null)} style={{
            position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.15)',
            border: 'none', color: 'white', fontSize: 20, cursor: 'pointer', borderRadius: '50%',
            width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><FaTimes /></button>

          <button onClick={e => { e.stopPropagation(); navigateLightbox(-1); }} style={{
            position: 'absolute', left: 20, background: 'rgba(255,255,255,0.15)',
            border: 'none', color: 'white', fontSize: 18, cursor: 'pointer', borderRadius: '50%',
            width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><FaChevronLeft /></button>

          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '85vw', maxHeight: '85vh' }}>
            <img src={lightbox.src} alt={lightbox.alt} style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: 12, objectFit: 'contain', display: 'block' }} />
            <div style={{ textAlign: 'center', marginTop: 14 }}>
              <p style={{ color: 'white', fontSize: 15, fontWeight: 600 }}>{lightbox.alt}</p>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{lightbox.kategori}</span>
            </div>
          </div>

          <button onClick={e => { e.stopPropagation(); navigateLightbox(1); }} style={{
            position: 'absolute', right: 20, background: 'rgba(255,255,255,0.15)',
            border: 'none', color: 'white', fontSize: 18, cursor: 'pointer', borderRadius: '50%',
            width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><FaChevronRight /></button>
        </div>
      )}
    </div>
  );
}