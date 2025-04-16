import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage';
import { motion } from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';

const AboutMeMain = () => {
  return (
    <div>
        <div id="about" className="flex md:flex-row sm:flex-col justify-between max-w-[1200px] mx-auto items-center px-4 gap-12 mt-[100px]">
             <motion.div variants={fadeIn("right", 0.2)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: false, amount: 0.7 }} >
             <AboutMeText />
             </motion.div>

             <motion.div variants={fadeIn("left", 0.2)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: false, amount: 0.7 }} >
             <AboutMeImage />
             </motion.div>
        </div>
    </div>
  )
}

export default AboutMeMain