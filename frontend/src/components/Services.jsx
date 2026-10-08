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
      navigate('/Bookings');
    } else {
      navigate('/Login', { state: { message: `Logga in för att fullfölja bokningen av ${service.name}` } });
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '6rem', fontFamily: 'sans-serif' }}>
      
  {/* Hero-sektion */}
<div style={{ 
  backgroundColor: '#f9fafb', 
  borderTop: '1px solid #e5e7eb',
  borderBottom: '1px solid #e5e7eb',
  padding: '4rem 1rem', 
  textAlign: 'center', 
  width: '100%' 
}}>
  <h1 style={{
    fontSize: '2.5rem',
    fontWeight: 'normal',
    color: '#000000',
    margin: '0 0 0.5rem 0',
    letterSpacing: '-0.02em',
    textTransform: 'uppercase'
  }}>
    Från blöt hund till salongsfin
  </h1>

  <p style={{
    fontSize: '1rem',
    color: '#4b5563',
    margin: '0',
    letterSpacing: '0.01em',
    fontWeight: '400'
  }}>
    Vi skämmer bort din bästa vän!
  </p>
</div>

      {/* Behandlingssektion */}
      <div style={{ maxWidth: '1000px', margin: '3rem auto 0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'normal', 
          textAlign: 'center', 
          marginBottom: '0.25rem',
          color: '#000000',
          letterSpacing: '-0.01em'
        }}>
          Våra Behandlingar
        </h2>
        
        <p style={{ textAlign: 'center', color: '#666666', fontSize: '0.85rem', marginBottom: '3.5rem' }}>
          Välj den tjänst som passar din hund bäst.
        </p>

        {loading ? (
          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666666' }}>Laddar tjänster...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <div 
                key={service.id} 
                style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '0px', 
                  padding: '2rem', 
                  border: '1px solid #e5e7eb', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justify: 'space-between',
                  transition: 'border-color 0.2s'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.15rem', fontWeight: 'normal', color: '#000000' }}>
                    {service.name}
                  </h3>
                  <p style={{ color: '#4b5563', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    {service.description}
                  </p>
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: '1rem', borderTop: '1px solid #f3f4f6' }}>
                  <span style={{ fontWeight: '600', fontSize: '1rem', color: '#000000' }}>
                    {service.price} kr
                  </span>
                  
                  <button 
                    onClick={() => handleSelectService(service)} 
                    style={{ 
                      backgroundColor: '#000000', 
                      color: '#ffffff', 
                      border: 'none', 
                      padding: '0.6rem 1.25rem', 
                      borderRadius: '9999px', 
                      cursor: 'pointer', 
                      fontWeight: '500',
                      fontSize: '0.8rem',
                      letterSpacing: '0.02em'
                    }}
                  >
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