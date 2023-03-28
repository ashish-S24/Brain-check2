import React, { useLayoutEffect } from 'react';
import ThroughMRI from './parkinsonPage/ThroughMRI';
import { Footer} from './homePage';
import ThroughWrit from './parkinsonPage/ThroughWrit';
import Hero from './parkinsonPage/Hero';
import Navbar from './advisorPage/Navbar';




function Parkinson() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <div>
        <Navbar/>
        <Hero/> 
      </div>
      <ThroughMRI/>
      <ThroughWrit/>
      <div className='relative z-0 mt-[280px]'>
      <Footer/>
      </div>
    </div>
  );
}

export default Parkinson;
