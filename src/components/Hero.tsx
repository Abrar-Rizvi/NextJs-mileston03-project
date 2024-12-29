import Image from 'next/image'
import React from 'react'
// import ImageComponent from './Image'


const Hero = () => {
  return (
    <div className='w-full h-screen  '>

        <Image
          src="/images2/hero2.jpg"
          alt="hero-image"
          width={600}
          height={600}
         
          className='w-full h-full object-cover'
        />
      
    


    </div>
  )
}

export default Hero