import React, { useLayoutEffect } from 'react';
import AdvisorCard from './advisorPage/AdvisorCard';
import Navbar from './advisorPage/Navbar';
import { Footer } from './homePage';
import Info from './advisorPage/Info';

function Advisor() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <Navbar />
      <div className='relative z-0 bg-primary'>
      <AdvisorCard />
      </div>
      <Info/>
      <Footer />
    </div>
  );
}

export default Advisor;
