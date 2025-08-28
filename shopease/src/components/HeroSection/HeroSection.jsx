import React from 'react'
import HeroImg from '../../assets/image/hero_mobileIphone.png'

const HeroSection = () => {
  return (
    <div className="relative flex items-center h-80 w-full pr-80 py-8">
      {/* Empty space on left */}
      <div className=" h-full w-[500px]"></div>

      {/* Black background only on right side */}
      <div className="bg-black h-full w-[800px] flex justify-end justify-center items-center pl-48">
        <img src={HeroImg} alt="Hero" className="h-full object-contain" />
      </div>
    </div>
  )
}

export default HeroSection
