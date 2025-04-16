
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";
import { SiJquery } from "react-icons/si";
import SingleSkills from "./SingleSkills";
import { FaSass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { motion } from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';

const skills = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3Alt,
    },
    {
      skill: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      skill: "ReactJS",
      icon: FaReact,
    },
    {
      skill: "Redux",
      icon: SiRedux,
    },
    {
      skill: "TailwindCSS",
      icon: RiTailwindCssFill,
    },
    {
      skill:"Bootstrap",
      icon: BsBootstrapFill,
    },
    // {
    //   skill: "JQuery",
    //   icon: SiJquery,
    // },
    // {
    //   skill: "Sass",
    //   icon: FaSass,
    // },
    {
      skill: "Github",
      icon: FaGithub,
    }
    // {
    //   skill: "TypeScript",
    //   icon: SiTypescript,
    // },
    // {
    //   skill: "NextJS",
    //   icon: SiNextdotjs,
    // },
  ];

const AllSkills = () => {
  return (
    <div>
        <div className="flex items-center justify-center relative gap-2 max-w-[1200px]">
            {skills.map((item,index)=>{
                return  <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
            <SingleSkills key={index} text={item.skill} imgSvg={<item.icon />} />
            </motion.div>
            })}
        </div>
    </div>
  )
}

export default AllSkills