import { motion } from "framer-motion";

import { styles } from "../components/styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`flex flex-row item-center gap-5`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;