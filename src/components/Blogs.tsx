import { products } from "@/Data"



import Link from "next/link"
import Imagecomponent from "./Image"



const Blogs = () => {
    return (
        <div className="w-full h-auto   flex flex-col bg-[#fcf0f0] pt-[100px]">

            <h1 className="text-[#ccad61] mb-[30px] text-center text-xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold">Explore Our Diverse Collection</h1>

            <div className="flex justify-evenly flex-wrap md:flex-row md:justify-center gap-5">
                {products.map((product) => {
                    return <div key={product.id} className="w-[40%]  md:w-[20%] h-[250px]   bg-[#fff6f6] rounded-md shadow-lg hover:shadow-lg transition-shadow duration-300 ">
                        {/* This is image  */}
                        <Link href={`/${product.id}`}>
                            <Imagecomponent
                                src={product.imageUrl}
                                alt="product-image"
                                width={300}
                                height={300}
                                className=" rounded-md h-[70%] w-full object-cover"
                            />

                            <div className="mt-1">
                                <h4 className="text-[#ccad61] mb-[3px] font-bold sm:text-xl">{product.smallHeading}</h4>
                                <p className="text-[#ccad61] ">{product.price}</p>
                            </div>
                        </Link>




                    </div>

                })}
            </div>
        </div>
    )
}

export default Blogs