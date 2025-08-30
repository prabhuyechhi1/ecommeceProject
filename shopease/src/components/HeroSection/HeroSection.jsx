import React from 'react'
import HeroImg from '../../assets/image/hero-img-men.png'
import HeroImgGirls from '../../assets/image/img-hero-girls.png'

const HeroSection = () => {
  return (
    <div className="relative flex h-96 w-full py-8 overflow-hidden">
      {/* This is the new div with properties from your design.
        - Position: 'absolute', 'top-[220px]', 'left-[320px]'
        - Layout: 'w-[392px]', 'h-[756px]'
        - Appearance: 'rounded-[10px]', 'rotate-180'
        - Fill: 'bg-[#E0E0E0]'
      */}
      <div className="flex left-[130px] w-[250px] h-96 bg-[#E0E0E0] rounded-[10px] -z-10 relative overflow-hidden">
        <img 
          src={HeroImg}
          alt="Abstract decorative shapes"
          // These classes now control ONLY the image
          className="flex absolute px-7 object-left-bottom top-32 h-[calc(100%-160px)] w-[320%]" 
        />
        </div>    
         <div className="flex left-[160px] w-[700px] h-40 bg-[#E0E0E0] rounded-[10px] -z-10 relative overflow-hidden">
          <img 
          src={HeroImgGirls}
          alt="Abstract decorative shapes"
          // These classes now control ONLY the image
          className="flex px-14 absolute h-full w-full" 
        /> </div>
    </div>
  )
}

export default HeroSection; // Assuming you have a default export