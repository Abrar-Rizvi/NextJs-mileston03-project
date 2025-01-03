"use client";

import Button from "@/components/Button";


import { useState, useEffect,  useContext} from "react";
import { useParams } from "next/navigation";
import Imagecomponent from "@/components/Image";
import Quantity from "@/components/Quantity";

import Minicart from "@/components/Minicart";
import { dataContext } from "../context/context";







const Dynamicpage = () => {
  
const [username, setusername] = useState<string>('');
const [submittedValue, setSubmittedValue] = useState<string[]>([]);
const [isOpenCart, setIsOpenCart] = useState<boolean>(false)
  const obj = useContext(dataContext)
  console.log(obj)
 
 

  const { id } = useParams();

 
  

  const clickOpeningCart = () => {
    
    setIsOpenCart(!isOpenCart)
  }


  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const res = await fetch(`/api/products/${id}`)
        const dataObj = await res.json()
        obj.setData(dataObj)
      } else {
        console.error('Product not found');
        obj.setData(null);
      }


    };
    fetchProduct();
  }, [id]);

 

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username?.trim()) {
      setSubmittedValue([...submittedValue, username]);
      setusername(''); // Clear the textarea
    }
  };

  const deleteHandler = (indexToDelete: number) => {
    setSubmittedValue(submittedValue.filter((_, i) => i !== indexToDelete))
  }

  return (
    <div className="relative px-[48px] py-[36px] ">
      <Minicart
        condition={isOpenCart}
        src={obj.data?.imageUrl}
        func={clickOpeningCart}
        name={obj.data?.smallHeading}
        price={obj.data?.price} />
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-lg bg-[#fff6f6]">
        <div className="w-full lg:w-[370px] lg:h-[400px]  rounded-md">

          <Imagecomponent

            src={obj.data?.imageUrl || "/fallback-image.jpg"}
            alt="product-images"
            width={600}
            height={600}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="w-full lg:w-[60%] py-5 px-2 lg:px-0">
          <h1 className="w-[70%] sm:text-xl md:text-2xl lg:text-[28px] font-bold text-[#c8896a]">
            {obj.data?.longHeading}
          </h1>
          <p className="w-[90%] sm:text-[18px] md:text-[22px] text-[#6a9ac8] lg:text-[24px]">
            {obj.data?.description}
          </p>
          <Quantity />
          {/* adding button of add to cart and buy it now */}
          <div className="flex mt-5">
            <Button content={`Add to cart`} className={"border bg-[#c8896a] border-[#c8896a] text-white w-full px-3 py-2"}
              onClick={clickOpeningCart}
            />

          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <h1 className="text-3xl text-[#6a9ac8]">Comments</h1>
        <div className="w-full">
          <form onSubmit={submitHandler}>
            <div className="form-div">
              <textarea
                id="comment"
                rows={3}
                className="p-2 outline-none border-2 rounded w-full"
                placeholder="Write your comments"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              ></textarea>
            </div>
            <Button
              content="Add Comments"
              className="inline rounded px-5 py-2 mt-5 text-white bg-[#c8896a]"

            />
          </form>
        </div>
        <div className="mt-5">
          {submittedValue.length > 0 ? (
            submittedValue.map((value, i) => (
              <div key={i} className="flex justify-between items-center border-b py-2 w-full ">

                <p className="flex-1  w-full max-w-[1200px] break-words ">{value}</p>
                <Button content={"delete"} onClick={() => deleteHandler(i)} />
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dynamicpage;







function setData(data: any) {
  throw new Error("Function not implemented.");
}

