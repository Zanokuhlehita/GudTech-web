
import React from 'react';
// import './WhatWeDo.css';
import imageone from '../../../../assets/slide1.jpg'
import imagetwo from '../../../../assets/slide2.jpg'
import imagethree from '../../../../assets//slide3.jpg'

const services = [
  {
    id: 1,
    imgSrc:imageone,
    text: 'text about what we do first one',
  },
  {
   id: 2,
    imgSrc: imagetwo,
    text: 'text about what we do second one',
  },
  {
   id: 3,
    imgSrc: imagethree,
    text: 'text about what we do third one',
  },

];

const WhatWeDo = () => {
  return (
    <section className="section">
      <h2 className="section-title">What We Do</h2>
      <div className="content">
        {services.map((service, index) => (
          <div className="icon-card" key={service.id}>
            <div className="icon">
              <img src={service.imgSrc} alt={` ${service.id}`} />
              </div>
            <p>{service.text}</p>
            <button
              style={{
                backgroundColor: 'lime',
                border: 'none',
                color: 'white',
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                borderRadius: '5px',
                height: '50px',
              }}
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;


