import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.25rem 2rem',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #f3f4f6',
      fontFamily: 'sans-serif'
    }}>
      {/* Logotyp */}
      <Link to="/" style={{
        fontSize: '1.25rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: '#000000',
        textDecoration: 'none'
      }}>
        Paws & Shine
      </Link>

      {/* Navigeringslänkar */}
      <div style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <Link to="/" style={{ color: '#000000', textDecoration: 'none', fontWeight: '500' }}>
          Startsida
        </Link>
        <Link to="/Gallery" style={{ color: '#000000', textDecoration: 'none', fontWeight: '500' }}>
          Galleri
        </Link>
        <Link to="/About" style={{ color: '#000000', textDecoration: 'none', fontWeight: '500' }}>
          Om oss
        </Link>
        <Link to="/Contact" style={{ color: '#000000', textDecoration: 'none', fontWeight: '500' }}>
          Kontakt
        </Link>
      </div>

      {/* Profil-ikon */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link 
          to="/login" 
          style={{ color: '#000000', display: 'flex', alignItems: 'center' }} 
          aria-label="Logga in eller registrera dig"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            style={{ width: '24px', height: '24px' }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}