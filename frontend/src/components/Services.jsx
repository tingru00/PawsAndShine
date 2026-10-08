import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    API.get('/services')
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Kunde inte hämta tjänster', err);
        setLoading(false);
      });
  }, []);

  const handleSelectService = (service) => {
    localStorage.setItem('selectedService', JSON.stringify(service));

    if (token) {
      navigate('/bookings');
    } else {
      navigate('/login', { state: { message: `Logga in för att fullfölja bokningen av ${service.name}` } });
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div style={{ backgroundColor: '#fbf7f4', padding: '5rem 2rem', textAlign: 'center', borderBottom: '1px solid #efe8e1' }}>
        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.5rem' }}></span>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', color: '#2c2c2c' }}>
          Från blöt hund till salongsfin 
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '650px', margin: '0 auto' }}>
          Vi skämmer bort din bästa vän!
        </p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '4rem auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>Våra Behandlingar</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>Välj den tjänst som passar din hund bäst.</p>

        {loading ? (
          <p style={{ textAlign: 'center' }}>Laddar tjänster...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <div key={service.id} style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2rem', boxShadow: '0 6px 20px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ margin: '0 0 0.8rem 0', fontSize: '1.3rem' }}>{service.name}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>{service.description}</p>
                </div>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '800', fontSize: '1.2rem' }}>{service.price} kr</span>
                  <button onClick={() => handleSelectService(service)} style={{ backgroundColor: '#1a1a1a', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
                    Välj & Boka
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}