import React, {useLayoutEffect, useRef, useEffect} from "react";
import { Footer } from "./homePage";
import { useLocation } from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';
import Navbar from './advisorPage/Navbar';

async function predictDisease(imageUrl) {
  try {
    const response = await axios.post('http://localhost:3000/api/upload', {
      imageUrl: imageUrl
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}



function MriResult() {
  const location = useLocation();
  const imageUrl = location.search.split('=')[1];
  const cardRef = useRef(null);


  async function getImageData(imageUrl, cardRef) {
    html2canvas(cardRef.current).then(async (canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const prediction = await predictDisease(imgData);
      console.log(prediction); // Replace this with your code to display the prediction
    });
  }
  
  useEffect(() => {
    getImageData(decodeURIComponent(imageUrl), cardRef);
  }, []);


  const downloadPDF = () => {
    getImageData(decodeURIComponent(imageUrl), cardRef);

    html2canvas(cardRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;
      const margin = 10; // add some margin
      const ratio = Math.min((pageWidth - margin * 2) / imageWidth, (pageHeight - margin * 2) / imageHeight);
      const imageX = (pageWidth - imageWidth * ratio) / 2;
      const imageY = (pageHeight - imageHeight * ratio) / 2;

      pdf.setFillColor(6, 8, 22);
      pdf.rect(0, 0, pageWidth, pageHeight, "F");

      pdf.addImage(imgData, "PNG", imageX, imageY, imageWidth * ratio, imageHeight * ratio);
      pdf.save("download.pdf");
    });
  };
  

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary">
    <Navbar/>
    <section  className={`w-full mx-auto bg-primary mb-[280px]`}>
      <div id="card" className='flex w-full place-content-around'>
        <div>
          <div ref={cardRef} className={`w-[804px] green-pink-gradient p-[2px] rounded-[20px] shadow-card mt-[100px]`}>
              <div
                   options={{
                   max: 45,
                   scale: 1,
                   speed: 450,
                    }}
                   className="bg-primary rounded-[20px] p-3 w-[800px] flex items-center flex-col"
                    >
                    <div className='w-full mt-[20px] flex flex-row p-3'>
                      <div className="h-[250px]">
                      <div className="mb-[190px] green-pink-gradient p-[2px] rounded-[20px] shadow-card">
                        <div className=" bg-primary rounded-[20px] flex items-center">
                              <img
                                  src= {decodeURIComponent(imageUrl)}
                                  alt="web-development"
                                  className="w-[390px] h-[250px] object-contain rounded-2xl"
                                />
                          </div>
                       </div>
                      </div>
                    <div className="w-full ml-4 p-4">
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                     Image Size : 600 KB
                    </p>
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                      Image Quality : Good
                    </p>
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                      Disease Level : 3
                    </p>
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                      Class : Moderate Demented
                    </p>
                    </div>
                    </div>
                    <div className="border w-[750px] border-gray-500 mt-[40px] "></div>
                    <div className="mt-[40px] mb-7">
                    <p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                    The patient's MRI prediction shows moderate dementia, which suggests that the individual is experiencing significant cognitive decline and memory loss. Here are some guidelines for providing care: </p>
                   <p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                   Safety measures: It's important to ensure that the individual is in a safe and secure environment. This may involve installing safety equipment such as handrails and removing tripping hazards. Ensure that the individual is not left unsupervised in potentially dangerous situations.
                   </p><p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                   Assistance with daily activities: Individuals in the moderate dementia stage may require assistance with activities of daily living such as bathing, dressing, grooming, and toileting. It's important to maintain the individual's dignity and privacy while providing assistance.
                  </p><p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                   Nutrition: Ensure that the individual is eating a balanced diet and staying hydrated. If necessary, work with a nutritionist or dietician to develop a meal plan that meets the individual's needs and preferences.
                    </p><p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                  Medication management: Individuals with moderate dementia may require assistance with medication management. This may involve setting up a medication schedule, reminding the individual to take medication, and ensuring that medication is taken as prescribed.
                    </p><p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                 Behavioral management: Individuals with moderate dementia may experience behavioral symptoms such as agitation, aggression, and depression. It's important to work with a healthcare provider to develop strategies to manage these symptoms.
                    </p><p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                  It's important to note that dementia is a progressive disorder that can affect an individual's cognitive abilities, memory, and daily activities. Dementia can be caused by various factors such as age, genetics, lifestyle factors, and underlying medical conditions. While there is no cure for dementia, early diagnosis, and management can help slow the progression of the disease and improve quality of life. It's essential that the patient receives regular check-ups and follows the treatment plan recommended by their healthcare provider.
                  </p>
                    </div>
               </div>
           </div>
          <div className="flex place-content-center mt-[40px]">
           <button className='rounded-full bg-[#915EFF] p-2 text-[20px]' onClick={downloadPDF}> Download </button>
          </div>
        </div>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default MriResult