import React from 'react';

export default function About() {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '5rem 1.5rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '650px', margin: '0 auto', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', padding: '3.5rem 2.5rem' }}>
        
        <h1 style={{ fontSize: '2rem', fontWeight: 'normal', color: '#000000', margin: '0 0 1.5rem 0', textAlign: 'center' }}>
          Om Paws & Shine
        </h1>

        <div style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p>
            Välkommen till Paws & Shine. Vi är en hundsalong som brinner för att ge varje hund en trygg, lugn och behaglig upplevelse.
          </p>
          <p>
            Hos oss anpassar vi varje behandling efter hundens individuella behov, pälskvalitet och temperament. Oavsett om det gäller en enkel kloklippning eller en komplett helrenovering ser vi till att din vän lämnar oss både stolt och välmående.
          </p>
          <p>
            Vi arbetar enbart med skonsamma, veganska produkter utan starka parfymer för att skona både hud och miljö.
          </p>
        </div>

      </div>
    </div>
  );
}