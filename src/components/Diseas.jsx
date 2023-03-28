import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "./styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from 'react-router-dom';



const Diseas = () => {
  
  const navigate = useNavigate();

  const navigateHandle = () => {
        navigate('/advisor');
  }

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`flex flex-row item-center gap-5`}
      >
        <div className={`absolute inset-0 top-[120px] ${styles.paddingX} max-w-7xl mx-auto`}>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>BrainCheck</h2>
            <p className={styles.heroSubText}>Advisor</p>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]'
          >
            An Advisor for Alzheimer's and Parkinson's disease prediction 
            is an AI system that uses deep learning algorithms to analyze medical 
            and handwriting data and identify patterns related to these diseases. 
            It helps clinicians and researchers 
            make accurate predictions and identify new risk factors and potential treatments.
          </motion.p>
            <motion.button variants={fadeIn("", "", 0.1, 1)}
              className='rounded-full bg-[#915EFF] p-2 mt-5 w-45'
              onClick={navigateHandle}>
              Explore more
            </motion.button>
        </div>
        <div className={`inset-0 top-[120px] ${styles.paddingX} max-w-7xl mx-auto`}></div>
        <motion.div
            variants={fadeIn("", "", 0.1, 1)}
        >
            <img src="src/assets/twodoc.png" className="h-[650px] max-w-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Diseas;