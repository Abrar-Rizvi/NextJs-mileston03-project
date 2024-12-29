
// import Image from "next/image"
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // Specify the weights you need
    display: 'swap',
})



const Logo = () => {
  return (
  
    <div className=''>
     
<div className="w-[100px] h-[50px] rounded-full ">

        <h1 className={`sm:text-xl md:text-2xl lg:text-3xl font-bold text-white py-2 flex justify-around items-center ${dancingScript.className}`}>Blog.</h1>
</div>
       




    </div>
  )
}

export default Logo