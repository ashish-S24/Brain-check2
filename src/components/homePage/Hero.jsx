import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../../hoc";




const Hero = () => {
  return (
    
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Disease <span className='text-[#915EFF]'> Information </span>
          </h1>
          <div className='mt-10'>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Parkison's Disease <br className='sm:block hidden' /></p>
            <p className={`${styles.sectionSubText} m-3`}>Parkinson's disease is a degenerative disorder of the nervous system that affects movement. Its symptoms include tremors, stiffness, and difficulty with coordination and balance.</p>
            <Link to={'/Disease'}><button className='rounded-full bg-[#915EFF] p-2 m-2 ' >Know more</button></Link>
        </div>
        <div className='mt-10'>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Alzheimer's Disease <br className='sm:block hidden' /></p>
            <p className={`${styles.sectionSubText} m-3`}>Alzheimer's disease is a neurodegenerative disorder that affects memory, thinking, and behavior. Its symptoms worsen over time and can interfere with daily activities.</p>
            <Link to={'/Disease'}><button className='rounded-full bg-[#915EFF] p-2 m-2 ' >Know more</button></Link>
        </div>
        </div>
      </div>

     {/* <Computers/> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero,'home');