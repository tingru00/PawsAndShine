export default function Contact() {
  return (
    <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '2rem', backgroundColor: '#fbf7f4', borderRadius: '16px', border: '1px solid #efe8e1' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Kontakta Oss</h1>
      <div style={{ fontSize: '1.1rem', lineHeight: '2' }}>
        <p><strong>📍 Adress:</strong> Hundgatan 12, Uddevalla</p>
        <p><strong>📞 Telefon:</strong> 0522-123 456</p>
        <p><strong>✉️ E-post:</strong> info@pawsandshine.se</p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '1.5rem 0' }} />
        <h3>Öppettider</h3>
        <p>Måndag - Fredag: 08:00 - 17:00</p>
        <p>Lördag: Stängt</p>
        <p>Söndag: Stängt</p>
      </div>
    </div>
  );
}