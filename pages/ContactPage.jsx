import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import { contactAPI } from '../src/services/api';

export default function ContactPage() {
  const [form, setForm]       = useState({ nama: '', email: '', subjek: '', pesan: '' });
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg]   = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');

    try {
      await contactAPI.submit(form);
      setStatus('success');
      setForm({ nama: '', email: '', subjek: '', pesan: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrMsg(err.message || 'Gagal mengirim pesan. Coba lagi.');
    }
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: 10, border: '2px solid #DEC9B2',
    fontSize: 14, fontFamily: 'inherit', outline: 'none', background: 'white',
    transition: 'border-color 0.2s', color: '#6B4C3B',
  };

  const kontakInfo = [
    { icon: <FaMapMarkerAlt />, judul: 'Alamat', nilai: 'Jl. Contoh No. 123, Kel. Sukamaju, Kec. Rasa Enak, Kota Snackville, Jawa Barat 12345' },
    { icon: <FaPhone />, judul: 'Telepon', nilai: '+62 812 7562 0808' },
    { icon: <FaWhatsapp />, judul: 'WhatsApp', nilai: '+62 812 7562 0808' },
    { icon: <FaEnvelope />, judul: 'Email', nilai: 'info@lenisnacks.com' },
    { icon: <FaClock />, judul: 'Jam Operasional', nilai: 'Senin - Sabtu: 08.00 - 17.00 WIB' },
  ];

  return (
    <div>
      <PageHeader title="Hubungi Kami" subtitle="Ada pertanyaan? Kami siap membantu Anda." breadcrumb="Contact" />

      <section style={{ background: '#FDF6F0', padding: '70px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 60, alignItems: 'start' }}>

          {/* Info Kontak */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: '#6B4C3B', margin: '0 0 8px' }}>Informasi Kontak</h2>
            <p style={{ color: '#A07860', fontSize: 14, lineHeight: 1.7, marginBottom: 32 }}>
              Jangan ragu untuk menghubungi kami. Tim kami siap melayani Anda dengan sepenuh hati.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
              {kontakInfo.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: 'white', borderRadius: 12, padding: '14px 16px', boxShadow: '0 2px 12px rgba(107,76,59,0.05)' }}>
                  <div style={{ width: 36, height: 36, background: '#FDF0E4', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4956A', fontSize: 15, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#6B4C3B', fontSize: 13, marginBottom: 2 }}>{item.judul}</div>
                    <div style={{ color: '#A07860', fontSize: 13, lineHeight: 1.5 }}>{item.nilai}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 20px rgba(107,76,59,0.08)' }}>
              <iframe
                title="Lokasi LeniSnacks"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295496538!2d106.65269864101563!3d-6.229728699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000"
                width="100%" height="220" style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'white', borderRadius: 20, padding: '36px 32px', boxShadow: '0 8px 40px rgba(107,76,59,0.08)' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 800, color: '#6B4C3B', margin: '0 0 6px' }}>Kirim Pesan</h2>
            <p style={{ color: '#A07860', fontSize: 13, marginBottom: 28 }}>Isi form di bawah, kami akan membalas dalam 1x24 jam.</p>

            {/* Success */}
            {status === 'success' && (
              <div style={{ background: '#F0FAF4', border: '1px solid #B8E8C8', borderRadius: 10, padding: '12px 16px', marginBottom: 20, color: '#4A9A6A', fontSize: 13, fontWeight: 600 }}>
                ✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
              </div>
            )}

            {/* Error */}
            {status === 'error' && (
              <div style={{ background: '#FFF0F0', border: '1px solid #F0B8B8', borderRadius: 10, padding: '12px 16px', marginBottom: 20, color: '#C0392B', fontSize: 13, fontWeight: 600 }}>
                ❌ {errMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#6B4C3B', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nama</label>
                  <input name="nama" value={form.nama} onChange={handleChange} required placeholder="Nama lengkap" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#D4956A'}
                    onBlur={e => e.target.style.borderColor = '#DEC9B2'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#6B4C3B', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="email@contoh.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#D4956A'}
                    onBlur={e => e.target.style.borderColor = '#DEC9B2'} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#6B4C3B', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subjek</label>
                <input name="subjek" value={form.subjek} onChange={handleChange} required placeholder="Subjek pesan" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#D4956A'}
                  onBlur={e => e.target.style.borderColor = '#DEC9B2'} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#6B4C3B', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pesan</label>
                <textarea name="pesan" value={form.pesan} onChange={handleChange} required placeholder="Tulis pesan Anda di sini..." rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = '#D4956A'}
                  onBlur={e => e.target.style.borderColor = '#DEC9B2'} />
              </div>
              <button type="submit" disabled={status === 'loading'} style={{
                background: status === 'loading' ? '#C4A882' : '#D4956A',
                color: 'white', padding: '14px', borderRadius: 50,
                border: 'none', fontSize: 14, fontWeight: 700,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                letterSpacing: '0.05em', transition: 'background 0.2s', marginTop: 4,
              }}
                onMouseEnter={e => { if (status !== 'loading') e.target.style.background = '#C07850'; }}
                onMouseLeave={e => { if (status !== 'loading') e.target.style.background = '#D4956A'; }}
              >
                {status === 'loading' ? '⏳ Mengirim...' : 'Kirim Pesan ✉️'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}