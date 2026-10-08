import React, { useState } from 'react';
import api from '../api';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Lösenorden matchar inte');
      return;
    }

    setLoading(true);

    try {
      await api.post('/Auth/register', {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName
      });

      setSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || 
        'Registreringen misslyckades. Kontrollera uppgifterna.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '380px',
      margin: '4rem auto',
      padding: '0 1rem',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'normal',
        color: '#000000',
        margin: '0 0 0.25rem 0',
        letterSpacing: '-0.02em'
      }}>
        registrera dig
      </h1>

      <p style={{
        fontSize: '0.8rem',
        color: '#000000',
        margin: '0.75rem 0 3.5rem 0'
      }}>
        eller{' '}
        <Link 
          to="/login" 
          style={{
            color: '#000000',
            textDecoration: 'underline',
            fontWeight: '500'
          }}
        >
          logga in
        </Link>
      </p>

      {error && (
        <div style={{
          backgroundColor: '#fef2f2',
          color: '#dc2626',
          padding: '0.75rem',
          borderRadius: '4px',
          fontSize: '0.85rem',
          marginBottom: '1.5rem',
          textAlign: 'left'
        }}>
          {error}
        </div>
      )}

      {success && (
        <div style={{
          backgroundColor: '#f0fdf4',
          color: '#166534',
          padding: '0.75rem',
          borderRadius: '4px',
          fontSize: '0.85rem',
          marginBottom: '1.5rem',
          textAlign: 'left'
        }}>
          Konto skapat! Skickar dig till inloggningen...
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
        <div style={{ marginBottom: '2rem' }}>
          <label style={{
            display: 'block',
            fontSize: '0.8rem',
            color: '#374151',
            marginBottom: '0.25rem'
          }}>
            förnamn *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              border: 'none',
              borderBottom: '1px solid #000000',
              backgroundColor: 'transparent',
              padding: '0.5rem 0',
              fontSize: '0.95rem',
              outline: 'none',
              borderRadius: '0'
            }}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{
            display: 'block',
            fontSize: '0.8rem',
            color: '#374151',
            marginBottom: '0.25rem'
          }}>
            efternamn *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              border: 'none',
              borderBottom: '1px solid #000000',
              backgroundColor: 'transparent',
              padding: '0.5rem 0',
              fontSize: '0.95rem',
              outline: 'none',
              borderRadius: '0'
            }}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{
            display: 'block',
            fontSize: '0.8rem',
            color: '#374151',
            marginBottom: '0.25rem'
          }}>
            e-mail *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              border: 'none',
              borderBottom: '1px solid #000000',
              backgroundColor: 'transparent',
              padding: '0.5rem 0',
              fontSize: '0.95rem',
              outline: 'none',
              borderRadius: '0'
            }}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{
            display: 'block',
            fontSize: '0.8rem',
            color: '#374151',
            marginBottom: '0.25rem'
          }}>
            lösenord *
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              border: 'none',
              borderBottom: '1px solid #000000',
              backgroundColor: 'transparent',
              padding: '0.5rem 0',
              fontSize: '0.95rem',
              outline: 'none',
              borderRadius: '0'
            }}
          />
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <label style={{
            display: 'block',
            fontSize: '0.8rem',
            color: '#374151',
            marginBottom: '0.25rem'
          }}>
            bekräfta lösenord *
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              border: 'none',
              borderBottom: '1px solid #000000',
              backgroundColor: 'transparent',
              padding: '0.5rem 0',
              fontSize: '0.95rem',
              outline: 'none',
              borderRadius: '0'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            backgroundColor: '#000000',
            color: '#ffffff',
            padding: '0.85rem',
            borderRadius: '9999px',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            letterSpacing: '0.03em'
          }}
        >
          {loading ? 'skapar konto...' : 'registrera'}
        </button>
      </form>
    </div>
  );
}