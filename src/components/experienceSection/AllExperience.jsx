import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';

const experiences = [
    {
      job: "UI Developer",
      company: "Docintosh Technology, Mumbai",
      date: "Dec 2022 - Mar 2024",
      responsibilities: [
        "Created HTML PDFs and email templates in Mailchimp for special campaigns.",
        "Built interactive pages for surveys, polls, and quizzes.",
        "Applied SEO techniques like meta tags and keywords to boost search visibility.",
    
      ],
    },
    {
      job: "Sr. UI/UX Developer",
      company: "Softonauts Infotech, Mumbai",
      date: "Jan 2020 - Nov 2022",
      responsibilities: [
        "Designed responsive UIs like landing pages, admin panels, emails, and PDFs.",
        "Improved SEO for better site speed and search rankings.",
        "Turned static HTML into dynamic, mobile-friendly pages."
      
      ],
    },
    {
      job: "UI Developer",
      company: "NextGen Technology, Pune",
      date: "Aug 2016 - Nov 2018",
      responsibilities: [
        "Converted static HTML templates into fully responsive and dynamic web pages.",
        "Created functional and user-centric designs aligned with clients' business and personal requirements.",
      
      ],
    },
  ];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
        {experiences.map((experience, index)=>{
            return (<>
                <SingleExperience key={index} experience={experience} />
                {index < 2 ? (
                  <motion.div
                     variants={fadeIn("right", 0)}
                     initial="hidden"
                     whileInView="show"
                      viewport={{ once: false, amount: 0.7 }}
                      >
                     <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" /> 
                  </motion.div>
                ) : ("")}
            </>)
        })}
    </div>
  )
}

export default AllExperience