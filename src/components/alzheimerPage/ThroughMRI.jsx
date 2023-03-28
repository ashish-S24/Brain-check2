import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import { useNavigate } from 'react-router-dom';
import { styles } from "../styles";
import { SectionWrapper } from "../../hoc";

const ServiceCardThroughMRI = ({}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    const imageUrl = encodeURIComponent(URL.createObjectURL(uploadedImage));
    navigate(`/mriresult?image=${imageUrl}`);
  };
  

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
  
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/api/upload");
      xhr.upload.onprogress = (event) => {
        const progress = event.loaded / event.total;
        setUploadProgress(progress);
      };
      xhr.onload = () => {
        setUploadComplete(true);
        setUploadedImage(file);
  
        // Send the uploaded image to the ML model API/predict
        const apiUrl = "http://localhost:3000/api/predict";
        const imageData = new FormData();
        imageData.append("file", file);
  
        const xhr2 = new XMLHttpRequest();
        xhr2.open("POST", apiUrl);
        xhr2.onload = () => {
          const response = JSON.parse(xhr2.responseText);
          console.log(response);
        };
        xhr2.send(imageData);
      };
      xhr.send(formData);
    }
  };
  
  
  
  
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
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 h-[540px] flex justify-evenly items-center flex-col "
        >
          <h3 className="text-white text-[40px] font-bold text-center">
            MRI
          </h3>
          <img
            src="src/assets/conifer-brain-top.png"
            alt="web-development"
            className="w-21 h-23 object-contain rounded-2xlb p-4"
          />
          <label htmlFor="upload-input">
            <div className="relative rounded-full bg-[#915EFF] p-3 mt-5 cursor-pointer">
              Upload Image
              <input
                id="upload-input"
                type="file"
                accept=".jpg,.jpeg,.png"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={handleUpload}
              />
            </div>
          </label>
        </div>
      </motion.div>
      {uploadProgress > 0 && (
            <div className="mt-3">
              Uploading: {Math.round(uploadProgress * 100)}%
              <motion.div
                className="h-1 bg-gray-300 rounded-full mt-2"
                initial={{ width: 0 }}
                animate={{ width: `${uploadProgress * 100}%` }}
              >
                <motion.div
                  className="h-full bg-[#915EFF] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </motion.div>
          </div>
       )}
       {uploadComplete && (
        <button onClick={handleNavigate} className="relative rounded-full bg-[#915EFF] p-3 mt-5 cursor-pointer"> View Result</button>
       )}
    </Tilt>
  );
};
  
const ThroughMRI = () => {
  return (
    <section className={`relative w-full h-screen mx-auto mb-[80px] mt-7`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <div className='flex flex-row '>
            <div>
            <h3 className={`${styles.heroSubText} text-md`}> Through MRI :</h3>
            <p className={`${styles.sectionSubText} m-3 mt-7 text-lg`}>MRI can be used as a helpful tool for predicting 
            Alzheimer's disease by analyzing brain volume, shape, and changes in specific brain regions.
            Although it is not currently a routine diagnostic tool, MRI can assist in the early detection of Alzheimer's disease. 
            By identifying specific changes in the brain, MRI can help healthcare providers create personalized treatment plans and manage symptoms more effectively. 
            Therefore, the use of MRI can improve the quality of life for those with Alzheimer's disease.</p>
            </div>
            <div className="p-4 mb-10 ml-5 mt-0">
              <ServiceCardThroughMRI/>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default ThroughMRI;