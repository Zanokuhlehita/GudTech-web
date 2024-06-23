import React from 'react';
// import './OurClients.css';

const clients = [
  'GMI',
  'GWADU',
  'KWEKU CITY COUNCIL',
  '_',
  '_',
  '_',
  '_',
];

const OurClients = () => {
  return (
    <section className="section">
      <h2 className="section-title">Our Clients</h2>
      <div className="client-container">
        {clients.map((client, index) => (
          <div className="client" key={index}>{client}</div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
