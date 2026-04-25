import React, { useState, useEffect, useCallback } from 'react';
import ProductCard from '../components/ProductCard';
import PageHeader from '../components/PageHeader';
import { productsAPI } from '../src/services/api';

export default function ProductsPage() {
  const [products, setProducts]     = useState([]);
  const [categories, setCategories] = useState(['Semua']);
  const [aktif, setAktif]           = useState('Semua');
  const [search, setSearch]         = useState('');
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);

  // Fetch categories once on mount
  useEffect(() => {
    productsAPI.getCategories()
      .then(res => setCategories(res.data))
      .catch(() => {});
  }, []);

  // Fetch products whenever filter/search changes (debounced)
  const fetchProducts = useCallback(() => {
    setLoading(true);
    setError(null);

    const params = { limit: 50 };
    if (aktif !== 'Semua') params.kategori = aktif;
    if (search.trim())     params.search   = search.trim();

    productsAPI.getAll(params)
      .then(res => setProducts(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [aktif, search]);

  useEffect(() => {
    const timer = setTimeout(fetchProducts, 300); // debounce search
    return () => clearTimeout(timer);
  }, [fetchProducts]);

  return (
    <div>
      <PageHeader title="Produk Kami" subtitle="Temukan berbagai pilihan camilan lezat berkualitas tinggi." breadcrumb="Products" />

      <section style={{ background: '#FDF6F0', padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Search & Filter */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 40, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {categories.map(k => (
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

          {/* States */}
          {loading && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ display: 'inline-block', width: 40, height: 40, border: '3px solid #EDD9C8', borderTopColor: '#D4956A', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          )}

          {error && !loading && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#C0392B' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>⚠️</div>
              <p style={{ fontSize: 15 }}>Gagal memuat produk: {error}</p>
              <button onClick={fetchProducts} style={{ marginTop: 16, padding: '10px 24px', borderRadius: 50, background: '#D4956A', color: 'white', border: 'none', fontWeight: 700, cursor: 'pointer' }}>
                Coba Lagi
              </button>
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#A07860' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 16 }}>Produk tidak ditemukan. Coba kata kunci lain.</p>
            </div>
          )}

          {!loading && !error && products.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
              {products.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}