import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { services } from './index';
import Tilt from "react-tilt";
import { useNavigate } from 'react-router-dom';


const ServiceCard = ({index , title}) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const navigatePage = () => {
      if(index === 0){
        navigate('/parkinson');
      }
      else if(index === 1)
      {
        navigate('/alzheimer');
      }

      console.log(index);
    }

    // Attach the event listener to the button
    cardRef.current.addEventListener("click", navigatePage);
    // Remove the event listener when the component unmounts
  },[index, navigate]);

  return (
    <Tilt>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-[454px] green-pink-gradient p-[2px] rounded-[20px] shadow-card`}
      >
        <div
          ref={cardRef}
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-hero-pattern bg-cover bg-no-repeat bg-center rounded-[20px] py-5 px-12 h-[250px] w-[450px] flex justify-evenly items-center flex-col"
        >
        <h3 className="text-white text-[40px] font-bold text-center">
          {title}
        </h3>
        <button id={index} className='rounded-full bg-[#915EFF] p-3 mt-5 w-[100px] text-[15px]'> Explore </button>
        </div>
      </motion.div>
    </Tilt>
  );
};

function AdvisorCard() {
  return (
      <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='flex flex-wrap gap-10 place-content-around pt-[150px] m-3'
              >
                {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service}/>
                ))}
      </motion.div>
  )
}

export default AdvisorCard;