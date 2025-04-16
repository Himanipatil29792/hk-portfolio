import React from 'react';
import HeroText from './HeroText';
import HeroImage from './HeroImage';
import HeroGradient from './HeroGradient';

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
    <div className="flex md:flex-row sm:flex-col justify-between max-w-[1200px] mx-auto items-center px-4 relative">
      <HeroText />
      <HeroImage/>
      <HeroGradient />
    </div>
    </div>
  )
}

export default HeroMain;