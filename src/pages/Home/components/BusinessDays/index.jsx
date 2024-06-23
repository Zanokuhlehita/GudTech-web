import React from 'react';
// import './WorkDays.css';

const BusinessDays = () => {
  return (
    <section className="section">
         <h2 className="section-title">Our Business Days</h2>
      <div className="work-days-card">
        <p>Please Note We are always 24/7 for breakdays, <span className='contact-underline' style={{}}>Contact us</span>.</p>
        <p>in ???? Emergency ______________</p>
        {/* <br/> */}
        {/* <br/> */}
        <h5 className="">Mon - Fri<span style={{color:'#f5f5f5'}}>................................</span>8am - ?pm</h5>     
        <h5 className="span">Sat<span style={{color:'#f5f5f5'}}>................................</span>8am - ?pm</h5>     
       </div>

    </section>
  );
};

export default BusinessDays;
