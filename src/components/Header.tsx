import React from 'react'
import Logo from './Logo'
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // Specify the weights you need
    display: 'swap',
})

const Header = () => {
  return (
    <div className='w-full h-[50px]  bg-[#c8896a] py-2 flex justify-around items-center'>
        <Logo />
        <h1 className={`sm:text-xl md:text-2xl lg:text-3xl font-bold text-white ${dancingScript.className}`}>Your Blog for All Things Lifestyle & Tech!</h1>
    </div>
  )
}

export default Header