import React from 'react';
import HeroSection from '../Home/components/HeroSection/index';
import WhatWeDo from '../Home/components/WhatWeDo/index';
import WhyChooseUs from '../Home/components/WhyChooseUsSection/index';
import OurClients from './components/OurCients/index';
import BusinessDays from '../Home/components/BusinessDays/index';
import FAQ from '../Home/components/FAQ/index';
import ContactUs from '../Home/components/ContactUs';

export default function Home (){

    return(

        <>
    <HeroSection />
      <WhatWeDo />
      <WhyChooseUs />
      <OurClients />
      <BusinessDays />
      <FAQ />
      <ContactUs />
        </>

    )

}