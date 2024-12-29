"use client";

import Button from "@/components/Button";
import { IProduct, products } from "@/Data";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Imagecomponent from "@/components/Image";


const Dynamicpage = () => {
  const params = useParams();
  const [foundProduct, setFoundProduct] = useState<IProduct | null>(null);
  const [username, setusername] = useState<string>("");
  const [submittedValue, setSubmittedValue] = useState<string[]>([]);

  useEffect(() => {
    const fetchProduct = () => {
      const id = params.id;
      const product = products.find((product) => product.id === Number(id));
      setFoundProduct(product ?? null);
      console.log(product)
    };
    fetchProduct();
  }, [params]);

  if (!foundProduct) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-red-500 text-2xl">Product not found</h1>
      </div>
    );
  }

  const productImage = foundProduct?.imageUrl || "/fallback-image.jpg";

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      setSubmittedValue([...submittedValue, username]);
      setusername(""); // Clear the textarea
    }
  };

  const deleteHandler = (indexToDelete: number) => {
    setSubmittedValue(submittedValue.filter((_, i) => i !== indexToDelete))
  }

  return (
    <div className="px-[48px] py-[36px] bg-[#fcf0f0]">
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-lg bg-[#fff6f6]">
        <div className="w-full lg:w-[370px] lg:h-[400px]  rounded-md bg-blue-600">
          <Imagecomponent
            src={productImage}
            alt="product-images"
            width={600}
            height={600}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="w-full lg:w-[60%] py-5">
          <h1 className="w-[70%] sm:text-xl md:text-2xl lg:text-[28px] font-bold text-[#c8896a]">
            {foundProduct?.longHeading}
          </h1>
          <p className="w-[90%] sm:text-[18px] md:text-[22px] text-[#6a9ac8] lg:text-[24px]">
            {foundProduct?.description}
          </p>
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
                <Button content={"delete"} className={""} onClick={() => deleteHandler(i)} />
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

