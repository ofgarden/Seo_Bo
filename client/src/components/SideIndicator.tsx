import React from 'react';

export default function SideIndicator() {
  return (
    <div
      style={{
        position: 'sticky',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '30px',
        height: '100vh',
        width: '150px',
      }}
    >
      <div>Park Seo-bo</div>
      <div>Late-Écriture</div>
      <div>Mid-Écriture</div>
      <div>Early-Écriture</div>
      <div>Current</div>
    </div>
  );
}
