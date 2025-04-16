import React from 'react'

const SubHeroMain = () => {
  return (
    <div className="w-full border-y border-lightGray text-lightGray flex justify-around uppercase xl:text-2xl md:text-1xl sm:text-2xl py-5 items-center gap-4 bg-brown mt-5">
        <marquee><p className="">Front-End Developer &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; UI Developer &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; JavaScript Developer &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; React Developer </p></marquee>
       {/* <p className="md:block sm:hidden">UI Developer</p> 
       <p>Details Master</p> */}
    </div>
  )
}

export default SubHeroMain