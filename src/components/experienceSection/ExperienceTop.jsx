import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopRight from './ExperienceTopRight'

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-8 justify-center items-center">
        {/* <ExperienceTopLeft/> */}
        <ExperienceTopMiddle/>
        <ExperienceTopRight />
    </div>
  )
}

export default ExperienceTop