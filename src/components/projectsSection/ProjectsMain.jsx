import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject';
import { motion } from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';

const projects = [
    {
      name: "Swiggy Clone",
      para:"Built a full-fledged food ordering app with real-time updates. Integrated Swiggy API to fetch restaurant and menu data dynamically. Implemented cart management using Redux Toolkit. Applied optimization techniques to reduce page sizes and load times. Develop user interface by using the React JS.",
      year: "React | Redux | React Router | Tailwind CSS",
      align: "right",
      image: "../../images/web-img1.png",
      link: "https://react-restaurant-food-app.netlify.app/",
      code:"https://github.com/Himanipatil29792/react-course",
    },
    {
      name: "Docintosh",
      para:"Docintosh is a web application designed for medical students and doctors to engage in various interactive activities, such as surveys, polls, and quizzes. Utilizing HTML, CSS, Bootstrap, and JavaScript, this project delivers a visually appealing and user-friendly experience on a wide range of devices.",
      year: "HTML | CSS | JavaScript | jQuery | Bootstrap",
      align: "left",
      image: "../../images/web-img3.png",
      link: "https://docintosh.com/HomeController/index2",
    },
    {
      name: "BrandCare",
      para:"Brandcare specializes in simplifying science for pharma, health, and wellness brands. They craft impactful campaigns, creative strategies, and engaging health communications to connect brands with their audience effectively.",
      year: "HTML | CSS | JavaScript | jQuery | Bootstrap | PHP",
      align: "right",
      image: "../../images/web-img5.png",
      link: "https://www.brandcare.net/",
    },
    {
      name: "Blockchain",
      para:"Bchlx is virtual currency project. Currency name is HLX. User can purchase HLX. By using HLX user can purchase item, transfer coins. Projects connected with blockchain VivaHLX - https://vivahlx.com/, ideclaredaily - https://www.ideclaredaily.com/, nftHLX - https://nfthlx.com/, HelixQI - https://www.helixqi.com/, prhix - https://prhix.com/, useHLX - https://usehlx.com/",
      year: "HTML | CSS | JavaScript | jQuery | Bootstrap | PHP",
      align: "left",
      image: "../../images/web-img2.png",
      link: "https://bchlx.com/",
    },
  
    {
      name: "Sniiks Marketplace",
      para:"Sniiks Marketplace is an easy-to-use online store where you can browse products, view details, and add items to your cart or wishlist. You can choose the quantity you want, preview products, and check out quickly. Managing your wishlist is simple, so you can keep track of your favorite items anytime.",
      year: "HTML | CSS | JavaScript | jQuery | Bootstrap | PHP",
      align: "right",
      image: "../../images/web-img4.png",
      link: "https://sniiks.com/",
    },
  
  ];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
         <motion.div
            variants={fadeIn("down", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            >
            <ProjectsText />
         </motion.div>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index)=>{
            return (
                <SingleProject key={index} 
                name={project.name} 
                para={project.para}
                year={project.year}
                align={project.align}
                image={project.image} 
                link={project.link}
                code={project.code}
                />
            )
        })}
        </div>
    </div>
  )
}

export default ProjectsMain