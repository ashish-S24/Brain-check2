import React from 'react'
import{About , Contact, Hero, Navbar , Footer} from './homePage';

function Home() {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/> 
      </div>
      <div className="bg-cover bg-no-repeat bg-center">
      <About/>
      </div>
      <div className='relative z-0'>
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;