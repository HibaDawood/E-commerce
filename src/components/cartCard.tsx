"use client";
import { addCart, delItem, substractCart } from "@/app/features/cart";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import Image from "next/image";
import React from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { TiMinus, TiPlus } from "react-icons/ti";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <>
      {cartArray.length > 1 &&
        cartArray.map((item, i) => (
          <div key={i} className="flex px-10 py-3">
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="w-[100px] h-[100px]"
            />

            {/* Some Info */}
            <div className="flex px-5 justify-between items-center w-full">
              <div>
                {/* Title */}
                <h2 className="text-lg font-semibold leading-none line-clamp-1 text-myBlue">
                  {item.title}
                </h2>
                {/* Size */}
                <p
                  className="mt-2 text-base text-myBlue/80 font-semibold leading-none 
        line-clamp-1"
                >
                  size:&nbsp;<span>{item.size}</span>
                </p>
                {/* Color */}
                <p
                  className="mt-2 text-base text-myBlue/80 font-semibold leading-none 
        line-clamp-1"
                >
                  size:&nbsp;
                  <span>
                    <button
                      className="border-2 border-gray-300 mr-1 bg-white rounded-full w-[17px] h-[17px] 
            focus:outline-none active:border-none focus:border-none"
                      style={{ backgroundColor: item.color }}
                    />
                  </span>
                </p>

                {/* Quantity */}
                <div className="mt-2 flex items-center">
                  <button
                    onClick={() => dispatch(substractCart(item))}
                    className="outline outline-myWhite outline-1 text-myWhite group hover:outline-myPeach 
       btn bg-myBlue/60 hover:bg-myBlue/80 h-fit w-fit rounded-2xl text-xs px-3"
                  >
                    <div className="h-4 w-4 group-hover:text-myPeach duration-300 text-base">
                      <TiMinus />
                    </div>
                    Less
                  </button>
                  <div className="mx-2 scroll-m-20 text-xl font-semibold tracking-tight text-myBlue/80">
                    {item.qty}
                  </div>
                  <button
                    onClick={() => dispatch(addCart(item))}
                    className="outline outline-myWhite outline-1 text-myWhite group hover:outline-myPeach 
       btn bg-myBlue/60 hover:bg-myBlue/80 h-fit w-fit rounded-2xl text-xs px-3"
                  >
                    <div className=" h-4 w-4 group-hover:text-myPeach duration-300 text-base">
                      <TiPlus />
                    </div>
                    Add
                  </button>
                </div>
                {/* Price and delete */}
                <div className="lg:hidden mt-2 flex flex-col gap-2">
                  <h3 className="text-base font-semibold leading-none line-clamp-1 text-myBlue/80">
                    Price:&nbsp;
                    <span>
                      &#36;
                      {item.discount > 0
                        ? (item.price - (item.price * item.discount) / 100) *
                          item.qty
                        : item.price * item.qty}
                    </span>
                  </h3>

                  <BsTrash3Fill
                    onClick={() => dispatch(delItem(item.uuid))}
                    className="text-xl font-semibold leading-none line-clamp-1 cursor-pointer text-red-600"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-end gap-5">
              <h3 className="text-base font-semibold leading-none line-clamp-1 text-myBlue/80">
                Price:&nbsp;
                <span>
                  &#36;
                  {item.discount > 0
                    ? (item.price - (item.price * item.discount) / 100) *
                      item.qty
                    : item.price * item.qty}
                </span>
              </h3>

              <BsTrash3Fill
                onClick={() => dispatch(delItem(item.uuid))}
                className="text-xl font-semibold leading-none line-clamp-1 cursor-pointer text-red-600"
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default CartCard;
