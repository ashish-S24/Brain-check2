import React, {useLayoutEffect} from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "./styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from 'react-router-dom';
import { Footer } from "./homePage";
import Navbar from "./advisorPage/Navbar";



const BrainCare = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const navigate = useNavigate();

  const navigateHandle = () => {
        navigate('/advisor');
  }

  return (
    <div className='bg-primary'>
    <Navbar/>
    <section className={` bg-primary bg-hero-pattern bg-cover bg-no-repeat bg-center mb-[100px]`}>
        <div className='flex place-content-center'>
            <h2 className={`${styles.sectionHeadText} mt-[90px]`}>Brain Care</h2>
        </div>
        <div>
          <div className='mt-[50px] ml-[80px] mr-8'>
            <p className={`text-[45px] mt-2 text-[#7246d1] font-bold`}>
            LEVEL 0 : Non Demented<br className='sm:block hidden' /></p>
            <div className="flex flex-row">
                <p className={`${styles.sectionSubText} mt-10 pr-6`}>This class represents individuals who do not have symptoms of dementia and have normal cognitive function.</p>
                <div className={`w-[854px] green-pink-gradient p-[2px] rounded-[20px] shadow-card mr-6 mt-10`}>
                    <div className="bg-primary rounded-[20px] h-[250px] w-[850px] flex  place-items-start flex-col">
                        <div className="mt-3 ml-4">
                        <p className={`text-[24px] mt-2  text-white-100 `}>Care Required : <br className='sm:block hidden' /></p>
                        </div>
                        <div className="ml-6 mr-6">
                           <p className={`${styles.sectionSubText} m-3`}>Individuals in this level do not have symptoms of dementia, 
                           but it's important to maintain a healthy lifestyle to reduce the risk of developing dementia in the future. 
                           This includes regular physical exercise, a healthy diet, staying socially active, and managing any medical conditions 
                           that may increase the risk of cognitive decline.
                           </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
        <div>
          <div className='mt-[50px] ml-[80px] mr-8'>
            <p className={`text-[45px] mt-2 text-[#7246d1] font-bold`}>
            LEVEL 1 : Very Mild Demented<br className='sm:block hidden' /></p>
            <div className="flex flex-row">
                <p className={`${styles.sectionSubText} mt-10 pr-6`}>Individuals in this class may experience mild cognitive decline, 
                including difficulty with memory and thinking. They may have trouble remembering recent events, 
                have difficulty with planning and organization, and may experience changes in mood and behavior.</p>
                <div  className={`w-[854px] green-pink-gradient p-[2px] rounded-[20px] shadow-card mr-6 mt-10`}>
                    <div className="bg-primary rounded-[20px] h-[250px] w-[850px] flex  place-items-start flex-col">
                        <div className=" mt-3 ml-4">
                        <p className={`text-[24px] mt-2  text-white-100 `}>Care Required : <br className='sm:block hidden' /></p>
                        </div>
                        <div className="ml-6 mr-6">
                           <p className={`${styles.sectionSubText} m-3`}>Individuals in this level may benefit from cognitive stimulation activities to help maintain cognitive function. Examples include puzzles,
                            games, and activities that involve memory recall. It's also important to maintain a regular routine, limit distractions, 
                            and reduce stress. Safety measures such as removing tripping hazards and installing handrails may also be helpful.
                           </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
        <div>
          <div className='mt-[50px] ml-[80px] mr-8'>
            <p className={`text-[45px]  mt-2 text-[#7246d1] font-bold`}>
            LEVEL 2 : Mild Demented<br className='sm:block hidden' /></p>
            <div className="flex flex-row">
                <p className={`${styles.sectionSubText} mt-10 pr-6`}>Individuals in this class may experience memory loss,
                 have difficulty completing complex tasks, and show changes in personality and behavior.
                 They may have trouble finding words and remembering recent events.</p>
                <div className={`w-[854px] green-pink-gradient p-[2px] rounded-[20px] shadow-card mr-6 mt-10`}>
                    <div className="bg-primary rounded-[20px] h-[250px] w-[850px] flex  place-items-start flex-col">
                        <div className=" mt-3 ml-4">
                        <p className={`text-[24px] mt-2  text-white-100 `}>Care Required : <br className='sm:block hidden' /></p>
                        </div>
                        <div className="ml-6 mr-6">
                           <p className={`${styles.sectionSubText} m-3`}>In addition to cognitive stimulation activities, individuals in this 
                           level may require assistance with daily activities such as meal preparation, managing medications, and housekeeping.
                            Caregivers should encourage independence as much as possible, 
                            while also ensuring that the individual is safe and comfortable.
                           </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
        <div>
          <div className='mt-[50px] ml-[80px] mr-8'>
            <p className={`text-[45px]  mt-2 text-[#7246d1] font-bold`}>
            LEVEL 3 : Moderate Demented<br className='sm:block hidden' /></p>
            <div className="flex flex-row">
                <p className={`${styles.sectionSubText} mt-10 pr-6`}>Individuals in this class experience significant 
                impairment in cognitive functions, including memory, language, and problem-solving abilities. 
                They may have difficulty recognizing familiar people and objects and require assistance with daily activities.</p>
                <div  className={`w-[854px] green-pink-gradient p-[2px] rounded-[20px] shadow-card mr-6 mt-10`}>
                    <div className="bg-primary rounded-[20px] h-[250px] w-[850px] flex  place-items-start flex-col">
                        <div className="mt-3 ml-4">
                        <p className={`text-[24px] mt-2  text-white-100 `}>Care Required : <br className='sm:block hidden' /></p>
                        </div>
                        <div className="ml-6 mr-6">
                           <p className={`${styles.sectionSubText} m-3`}>Individuals in this level may require more intensive care, 
                           including assistance with activities of daily living such as bathing, dressing, and toileting. 
                           Caregivers may also need to manage behavioral symptoms such as agitation, aggression, or wandering. 
                           It's important to maintain a calm and predictable environment and ensure that the individual is safe and well-cared for.
                           </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
        <div>
        <div className='flex place-content-center mt-[120px]'>
            <button className='rounded-full bg-[#915EFF] p-4 m-2 text-[23px]' onClick={navigateHandle}>Explore Advisor</button>
        </div>
        </div>
    </section>
    <Footer/>
    </div>
  );
};

export default BrainCare;