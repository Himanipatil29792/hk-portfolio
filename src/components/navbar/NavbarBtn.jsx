import React from 'react';
import { LuArrowDownRight } from "react-icons/lu";


const NavbarBtn = () => {
  return (

    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan hover:border-orange border flex item-center gap-1 bg-gradient-to-r from-cyan to-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
    My Resume
    <p className="sm:hidden md:block">
    <LuArrowDownRight />
    </p>
    </button>
   
  )
}

export default NavbarBtn;