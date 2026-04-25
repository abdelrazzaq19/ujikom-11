import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const timeline = [
  { tahun: '2013', judul: 'Awal Berdiri', deskripsi: 'LeniSnacks lahir dari dapur rumahan dengan resep turun-temurun keluarga.' },
  { tahun: '2016', judul: 'Ekspansi Produk', deskripsi: 'Memperluas varian produk menjadi lebih dari 20 jenis camilan.' },
  { tahun: '2019', judul: 'Sertifikasi BPOM', deskripsi: 'Mendapat sertifikasi resmi BPOM dan halal dari MUI.' },
  { tahun: '2024', judul: 'Go Digital', deskripsi: 'Hadir di marketplace dan media sosial, melayani seluruh Indonesia.' },
];

const tim = [
  { nama: 'Leni Susanti', jabatan: 'Founder & CEO', src: 'https://picsum.photos/id/64/200/200' },
  { nama: 'Ahmad Fauzi', jabatan: 'Head of Production', src: 'https://picsum.photos/id/91/200/200' },
  { nama: 'Dewi Rahayu', jabatan: 'Marketing Manager', src: 'https://picsum.photos/id/65/200/200' },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader title="Tentang Kami" subtitle="Kenali lebih dekat cerita dan nilai di balik LeniSnacks." breadcrumb="About" />

      {/* Story */}
      <section style={{ background: '#FDF6F0', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <span style={{ color: '#D4956A', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>— Kisah Kami —</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#6B4C3B', margin: '0 0 18px', lineHeight: 1.2 }}>
              Dari Dapur Rumahan ke Seluruh Indonesia
            </h2>
            <p style={{ color: '#A07860', fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>
              LeniSnacks lahir pada tahun 2013 dari semangat seorang ibu rumah tangga yang ingin berbagi cita rasa autentik camilan nusantara. Berawal dari dapur kecil di rumah, kini kami melayani lebih dari 10.000 pelanggan setia di seluruh Indonesia.
            </p>
            <p style={{ color: '#A07860', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
              Setiap produk kami dibuat dengan cinta, menggunakan bahan-bahan alami pilihan tanpa pengawet berbahaya. Kami percaya bahwa camilan yang lezat tidak harus mengorbankan kesehatan.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[['🎯', 'Visi', 'Menjadi brand camilan terpercaya dan dicintai seluruh keluarga Indonesia.'],
                ['💡', 'Misi', 'Menghadirkan camilan berkualitas tinggi, higienis, dan terjangkau untuk semua.']].map(([icon, judul, teks]) => (
                <div key={judul} style={{ background: 'white', borderRadius: 14, padding: 20, boxShadow: '0 4px 16px rgba(107,76,59,0.06)' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
                  <div style={{ fontWeight: 700, color: '#6B4C3B', fontSize: 14, marginBottom: 6 }}>{judul}</div>
                  <div style={{ color: '#A07860', fontSize: 12, lineHeight: 1.5 }}>{teks}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <img src="https://picsum.photos/id/431/300/350" alt="snack1" style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 14 }} />
            <img src="https://picsum.photos/id/493/300/350" alt="snack2" style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 14, marginTop: 28 }} />
            <img src="https://picsum.photos/id/225/300/200" alt="snack3" style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 14 }} />
            <img src="https://picsum.photos/id/488/300/200" alt="snack4" style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 14, marginTop: -20 }} />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <span style={{ color: '#D4956A', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>— Perjalanan —</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#6B4C3B', margin: 0 }}>Milestone Kami</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#FAF0E8', transform: 'translateX(-50%)' }} />
            {timeline.map((item, i) => (
              <div key={item.tahun} style={{ display: 'flex', gap: 24, marginBottom: 40, flexDirection: i % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center' }}>
                <div style={{ flex: 1, textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                  <div style={{ background: i % 2 === 0 ? 'white' : '#FDF6F0', border: '1px solid #FAF0E8', borderRadius: 14, padding: '16px 20px', display: 'inline-block', maxWidth: 280 }}>
                    <div style={{ fontWeight: 800, color: '#D4956A', fontSize: 13, marginBottom: 6 }}>{item.tahun}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#6B4C3B', fontSize: 15, marginBottom: 6 }}>{item.judul}</div>
                    <div style={{ color: '#A07860', fontSize: 13, lineHeight: 1.5 }}>{item.deskripsi}</div>
                  </div>
                </div>
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#D4956A', border: '3px solid white', boxShadow: '0 0 0 3px #D4956A', flexShrink: 0, zIndex: 1 }} />
                <div style={{ flex: 1 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim */}
      <section style={{ background: '#FDF6F0', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ color: '#D4956A', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>— Tim Kami —</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#6B4C3B', margin: 0 }}>Orang-Orang di Balik LeniSnacks</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {tim.map(t => (
              <div key={t.nama} style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 20px rgba(107,76,59,0.07)', textAlign: 'center', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                <img src={t.src} alt={t.nama} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <div style={{ padding: '18px 16px 22px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16, color: '#6B4C3B', marginBottom: 4 }}>{t.nama}</div>
                  <div style={{ color: '#D4956A', fontSize: 12, fontWeight: 700 }}>{t.jabatan}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
