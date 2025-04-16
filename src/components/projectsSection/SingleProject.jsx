import React from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { RiUpload2Fill } from "react-icons/ri";

import { motion } from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';

const SingleProject = ({name, para, year, align, image, link, code}) => {
  return (
    <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }} className={`flex w-full sm:flex-col-reverse items-center gap-8 
    ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} justify-end sm:flex-col`}>
        <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <p className="text-white mt-2 mb-2">{para}</p>
        <h2 className={`text-md text-lightGrey font-special sm:text-center ${
            align === "left" ? "md:text-left" : "md:text-left"
          }`}>{year}</h2>
       <div className="flex gap-4">
       <a href={link} target='_black' className={`text-lg mt-2 flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}> Demo<BsFillArrowUpRightCircleFill /></a>
           <a href={code} target='_black' className={`text-lg mt-2 flex gap-2 items-center text-orange hover:text-cyan transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}>Code<RiUpload2Fill  /></a>
       </div>
        </div>
        <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
      </motion.div>
  )
}

export default SingleProject