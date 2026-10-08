import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '5rem 1.5rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', padding: '3rem 2.5rem' }}>
        
        <h1 style={{ fontSize: '2rem', fontWeight: 'normal', color: '#000000', margin: '0 0 0.5rem 0', textAlign: 'center' }}>
          Kontakt
        </h1>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.85rem', marginBottom: '3rem' }}>
          Har du frågor eller funderingar? Hör gärna av dig till oss.
        </p>

        {/* Kontaktinformation*/}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', borderBottom: '1px solid #f3f4f6', paddingBottom: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
          <div>
            <span style={{ fontSize: '0.7rem', color: '#9ca3af', letterSpacing: '0.08em', display: 'block', marginBottom: '0.25rem' }}>ADRESS</span>
            <span style={{ fontSize: '0.85rem', color: '#111827' }}>Hundgatan 12<br/>Uddevalla</span>
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', color: '#9ca3af', letterSpacing: '0.08em', display: 'block', marginBottom: '0.25rem' }}>TELEFON</span>
            <span style={{ fontSize: '0.85rem', color: '#111827' }}>0522-123 456</span>
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', color: '#9ca3af', letterSpacing: '0.08em', display: 'block', marginBottom: '0.25rem' }}>E-POST</span>
            <span style={{ fontSize: '0.85rem', color: '#111827' }}>info@pawsandshine.se</span>
          </div>
        </div>

        {/* Formulär */}
        {sent ? (
          <p style={{ textAlign: 'center', color: '#111827', fontSize: '0.9rem', padding: '1.5rem 0' }}>
            Tack för ditt meddelande! Vi återkommer så snart vi kan.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.05em', color: '#374151', marginBottom: '0.35rem' }}>NAMN</label>
              <input 
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.9rem', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.05em', color: '#374151', marginBottom: '0.35rem' }}>E-POST</label>
              <input 
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.9rem', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.05em', color: '#374151', marginBottom: '0.35rem' }}>MEDDELANDE</label>
              <textarea 
                rows="4" 
                required 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.9rem', boxSizing: 'border-box', resize: 'vertical' }}
              />
            </div>
            <button 
              type="submit" 
              style={{ 
                backgroundColor: '#000000', 
                color: '#ffffff', 
                border: 'none', 
                padding: '0.85rem', 
                borderRadius: '9999px', 
                cursor: 'pointer', 
                fontWeight: '500', 
                fontSize: '0.85rem',
                marginTop: '0.5rem'
              }}
            >
              Skicka meddelande
            </button>
          </form>
        )}
      </div>
    </div>
  );
}