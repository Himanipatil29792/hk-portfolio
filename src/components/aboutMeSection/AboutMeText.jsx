import React from 'react';

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:text-center md:text-left">
     <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white text-lg">
      Hi, I’m Himani Patil — a Front-End Developer with 6 years of experience crafting responsive, interactive web applications. I'm proficient in React.js, JavaScript, jQuery, HTML5, CSS3, and Bootstrap5, with a strong focus on building user-friendly, visually appealing interfaces.
      <br/> <br/>
      I am an immediate joiner actively exploring new opportunities where I can contribute my expertise and grow as a Front-End Developer. 
      I am passionate about creating intuitive, accessible, and visually appealing web experiences, Writing clean, maintainable, and scalable code, Staying up-to-date with the latest front-end technologies.
     
      </p>
      
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <a className="cursor-pointer text-white hover:text-cyan transition-all duration-500" href="#projects">
          My Projects
        </a>
      </button>
</div>
  )
}

export default AboutMeText