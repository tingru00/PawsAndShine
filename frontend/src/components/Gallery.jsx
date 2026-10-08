import React from 'react';

export default function Gallery() {
 // Dummy data
  const images = [
    { id: 1, title: 'Klippning & Styling', src: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&auto=format&fit=crop&q=80' },
    { id: 2, title: 'Badtid', src: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=500&auto=format&fit=crop&q=80' },
    { id: 3, title: 'Kloklippning', src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop&q=80' },
    { id: 4, title: 'Salongsfin', src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=80' },
  ];

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '5rem 1.5rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        <h1 style={{ fontSize: '2rem', fontWeight: 'normal', color: '#000000', margin: '0 0 0.5rem 0', textAlign: 'center' }}>
          Galleri
        </h1>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.85rem', marginBottom: '3.5rem' }}>
          Ett urval av våra nybadade och färdigstylade gäster.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {images.map((img) => (
            <div key={img.id} style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', padding: '0.75rem' }}>
              <img 
                src={img.src} 
                alt={img.title} 
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
              <p style={{ margin: '0.75rem 0 0.25rem 0', fontSize: '0.8rem', color: '#374151', textAlign: 'center' }}>
                {img.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}