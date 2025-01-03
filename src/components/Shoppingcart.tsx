"use client"
import React, {useContext} from 'react'
import Button from './Button'
import Image from 'next/image'
import { AiFillDelete } from "react-icons/ai";
import { countContext,dataContext } from '@/app/context/context';


const Shoppingcart = () => {
    const obj = useContext(countContext)
    const objData = useContext(dataContext)
    console.log(objData)
  return (
      
    <div className='px-16 py-12 flex justify-between '>
      {/* product details section starting..........................................................*/}
      <div className='max-w-[65%] h-[350px] w-full '>
        <div className='h-[50px] bg-[#c8896a] text-white flex items-center justify-center'>
          <ul className='flex gap-20 font-bold'>
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>

        </div>
        {/* product details section ending.......................................................... */}



        {/* bottom part of products detail starting.................................. */}
        <div className=' flex justify-between items-center relative mt-[40px] '>
          <div className="w-[100px] h-[105px] rounded-lg ">
            <Image src={objData.data.imageUrl} alt="cart-items-image" width={200} height={200} 
     className="w-[100px] h-[95px] object-cover"
          />
          </div>


          <h1 className="font-semibold text-[16px] relative -left-7">{objData.data.smallHeading}</h1>
          <p> <span className="text-[#B88E2F] relative -left-[47px]">{objData.data.price}</span></p>
          <div className='w-[50px] h-[50px] rounded-lg flex justify-center items-center
          relative -left-[50px]
          '>{obj.count}</div>
          <p className='relative -left-5'>250,000.00</p>
          <AiFillDelete className='w-10 h-10 text-[#B88E2F] relative -left-8 cursor-pointer' />
        </div>
      </div>

      {/* bottom part of products detailending.................................. */}







{/* Cart total box sections starting......................................................... */}
      <div className='max-w-[30%] w-full bg-[#c8896a] text-white  '>
        <div className=' py-3 px-12 space-y-8 flex flex-col items-between'>
          <h2 className="text-[36px] font-semibold text-center">Cart Totals</h2>
          <ul className='space-y-5'>
            <div className='flex justify-between items-center '>
              <li className='font-bold'>Subtotal</li>
              <li className='text-white'>Rs. 250,000.00</li>
            </div>

            <div className='flex justify-between items-center'>
              <li className='font-bold'>Total</li>
              <li className='text-white font-bold'>Rs. 250,000.00</li>
            </div>
          </ul>
          <div className=' flex justify-center'>
            {/* <Button content="Check Out"
              classname="w-[180px] h-[55px] flex justify-center items-center border-1 border-black rounded-[15px] text-[18px] cursor-pointer" /> */}
              <Button 
              content="Check Out"
              className="w-[180px] h-[55px] flex justify-center items-center border-1 border-black text-[#c8896a] bg-white  rounded-[15px] text-[18px] cursor-pointer" />

              
          </div>
        </div>
      </div>
      
{/* Cart total box sections ending......................................................... */}







    </div>
  )
}

export default Shoppingcart