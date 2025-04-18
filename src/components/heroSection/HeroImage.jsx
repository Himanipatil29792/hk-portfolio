import React from 'react'
// import { PiHexagonThin } from "react-icons/pi";
import { LiaCircle } from "react-icons/lia";
import { motion } from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';

const HeroImage = () => {
  return (
    <motion.div variants={fadeIn("left", 0.2)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: false, amount: 0 }} 
                          className="h-full flex item-center justify-center lg:my-0 sm:my-5">
        <img src="../../images/profile-pic.png" alt="Himani Patil" className="max-h-[350px] w-auto rounded-full" />
        <div className="absolute lg:bottom-[-30%] md:bottom-[-20%] sm:bottom-[-14%] -z-10 flex justify-center item-center animate-pulse">
            {/* <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" /> */}
            <LiaCircle className="md:h-[90%] sm:h-[120%] min-h-[550px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />

         </div>
    </motion.div> 
  )
}

export default HeroImage;

