export default function Gallery() {
  const dogs = ['Bella (Pudel)', 'Charlie (Golden)', 'Milo (Fransk Bulldogg)', 'Luna (Cockapoo)'];

  return (
    <div style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 1.5rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Galleri & Nöjda Kunder</h1>
      <p style={{ color: '#666', marginBottom: '3rem' }}>Några av våra söta gäster före och efter behandling.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
        {dogs.map((dog, i) => (
          <div key={i} style={{ backgroundColor: '#f9f9f9', borderRadius: '16px', padding: '3rem 1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.5rem' }}>🐶</span>
            <strong>{dog}</strong>
            <p style={{ fontSize: '0.85rem', color: '#777', marginTop: '4px' }}>Klipp & SPA</p>
          </div>
        ))}
      </div>
    </div>
  );
}