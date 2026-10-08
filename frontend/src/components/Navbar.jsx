import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('selectedService');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav style={{
      display: 'flex',
      justify: 'space-between',
      alignItems: 'center',
      padding: '1.2rem 3rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logotyp / Startsida */}
      <Link to="/" style={{ textDecoration: 'none', color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '1.6rem' }}>🐾</span>
        <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', letterSpacing: '1px' }}>PAWS & SHINE</h2>
      </Link>

      {/* Navigationslänkar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Tjänster</Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Om oss</Link>
        <Link to="/gallery" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Galleri</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Kontakt</Link>

        {token && (
          <Link to="/bookings" style={{ textDecoration: 'none', color: '#007bff', fontWeight: '600' }}>
            Mina Bokningar
          </Link>
        )}

        {token ? (
          <button 
            onClick={handleLogout}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              background: '#f8f9fa',
              cursor: 'pointer'
            }}
          >
            Logga ut
          </button>
        ) : (
          <Link 
            to="/login" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              textDecoration: 'none', 
              color: '#1a1a1a',
              fontWeight: '600',
              border: '1px solid #1a1a1a',
              padding: '6px 14px',
              borderRadius: '20px'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Logga in</span>
          </Link>
        )}
      </div>
    </nav>
  );
}