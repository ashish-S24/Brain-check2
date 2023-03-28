import React , {useLayoutEffect} from 'react';
import ThroughMRI from './alzheimerPage/ThroughMRI';
import ThroughWrit from './alzheimerPage/ThroughWrit';
import { Footer} from './homePage';
import Hero from './alzheimerPage/Hero';
import Navbar from './advisorPage/Navbar';

function Alzheimer() {
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
          <div className='relative z-0 mt-[150px]'>
          <Footer/>
          </div>
        </div>
     );
}

export default Alzheimer;