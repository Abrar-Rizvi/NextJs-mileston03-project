
"use client"

import { TbShoppingBagX } from "react-icons/tb";
import Imagecomponent from "./Image";
import Button from "./Button";
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { countContext } from "@/app/context/context";
// import Shoppingcart from "./Shoppingcart";




interface Prop {
    src: string | undefined;
    condition: boolean
    func: () => void
    name: string | undefined
    price: string | undefined;


}
const Minicart = (props: Prop) => {
    const obj = useContext(countContext)


    const router = useRouter()
    const clichHandleToCart = (routerN: string) => {
        router.push(routerN)
    }

    // <Minicart
    // condition={isOpenCart}
    // src={data?.imageUrl}
    // func={clickOpeningCart}
    // name={data?.smallHeading}
    // price={data?.price} />


    return (

        <div className={`${props.condition ? 'block' : 'hidden'} border-t-2 absolute right-0 lg:right-5 top-0 w-full lg:w-[400px] px-[35px] py-[25px]  bg-[#c8896a]    shadow-lg p-10 z-20`}>
       
            <div className="flex justify-between items-center border-b border-[#D9D9D9] pb-5 text-white">
                <h2 className="text-lg  mb-2">Item added to your cart</h2>
                <TbShoppingBagX className={`w-[20px] h-[20px] cursor-pointer`} onClick={props.func} />
            </div>
            <div className="space-y-2 mt-10">
                <div className="flex justify-start gap-x-5 items-start ">
                    <div className="w-[100px] h-[105px] bg-[#FBEBB5] rounded-lg ">
                        <Imagecomponent
                            src={props.src || '/fallback-image.jpg'}
                            width={200}
                            height={200}
                            alt="cart-items-image"

                            className="w-full h-full object-cover" />

                    </div>
                    <div className="flex flex-col text-white">
                        <h1 className="font-semibold text-[22px]">{props.name}</h1>
                        <p>{props.price} </p>
                    </div>
                    {/* <div className="w-[20px] h-[20px] bg-[#9F9F9F] rounded-full flex justify-center items-center "><span className="text-white">x</span></div> */}



                </div>

            </div>
            {/* <div className="mt-10"> */}
            {/* <div className="flex justify-between">
                    <span>subtotal</span>
                    <span className="text-[#B88E2F]">250,000.00</span>
                </div> */}
            {/* </div> */}
            <div className="flex flex-col mt-10">
                <Button
                    content={`View cart (${obj.count})`}
                    className={"border bg-[#c8896a] border-[#fff] text-white w-full px-3 py-2"}
                    onClick={() => clichHandleToCart('/cart')}
                />

                <Button content={"Buy it now"} className={"border mt-2 text-[#c8896a] border-[#c8896a] bg-white w-full px-3 py-2"}
                />
            </div>

        </div>
    )
}

export default Minicart








