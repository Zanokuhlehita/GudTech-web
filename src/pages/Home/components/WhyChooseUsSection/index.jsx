// import React,{useState} from 'react';
// import { FaCheckCircle } from 'react-icons/fa';

// // const reasons = [
// //   {
// //     image: '',
// //     text: '24/7',
// //   },
// //   {
// //     image: '',
// //     text: 'why choose us text n/a yet',
// //   },
// //   {
// //     text: 'why choose us text n/a',
// //     image: '',
// //   },
// //   {
// //     image: '',
// //     text: 'why choose us text n/a yet',
   
// //   },
// // ];

// // const images = [
// //   '.',
// //   '.',
// //   '.',
// //   '.',
// // ];
// const WhyChooseUs = () => {
// const [hover, setHover] = useState(null);

// const handleMouseEnter = (index) => {
//   setHover(index);
// };

// const handleMouseLeave = () => {
//   setHover(null);
// };

// const reasons = [
//   {  text: '24/7' },
//   {  text: 'n/a' },
//   { text: 'n/a' },
//   {  text: 'n/a' }
// ];

// const otherreasons = [
//   {  text: 'yet to be /a' },
//   {  text: 'yet to be /a' },
//   { text: 'yet to be /a' },
//   {  text: 'yet to be/a' }
// ];


//   return (
//     <section className="section">
//       <h2 className="section-title">Why Choose Us</h2>
//       <div className="icons-card">
//         <div className="icons">
//           {reasons.map((reason, index) => (
//             <div className="icon-car"
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//             key={index}>
//               <div className="square"></div>
//               <p>{reason.text}</p>
//             </div>
//           ))}
//         </div>
//         <div className="cards">
//           {otherreasons.map((otherreason, index) => (
//             <div className="card" key={index}>
//               {hover === index && <p>{otherreason.text}</p>}
//               </div>
//           ))}
//         </div>
//       </div>
//     </section>

//   );
// };

// export default WhyChooseUs;
import React, { useState } from 'react';
// import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    { text: '24/7' },
    { text: 'n/a' },
    { text: 'n/a' },
    { text: 'n/a' }
  ];

  const otherreasons = [
    { text: 'yet to be /a' },
    { text: 'yet to be /a' },
    { text: 'yet to be /a' },
    { text: 'yet to be/a' }
  ];

  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="icons-card">
        <div className="icons">
          {reasons.map((reason, index) => (
            <div
              className="icon-car"
              key={index}
            >
              <div className="square"></div>
              <p>{reason.text}</p>
              <div className="card">
                <p>{otherreasons[index].text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
