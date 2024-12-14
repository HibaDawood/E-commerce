import Image from "next/image";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { PiHeartFill } from "react-icons/pi";
import Link from "next/link";

const BestSellingCard = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  products,
  discount,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  products: string;
  discount: number;
}) => {
  return (
    <div>
      <Link href={`/${category}/${products}`}>
        <div
          className="w-[350px] h-[30rem] p-4 mx-auto shadow-xl rounded-xl relative
      will-change-transform group bg-myWhite"
        >
          {/* Image div */}
          <div className="block relative h-[16rem] rounded overflow-hidden">
            <Image
              src={src}
              alt="card-1-shirt"
              width={350}
              height={250}
              className=""
            />
          </div>
          {/* typography div */}
          <div className="card-body text-left pl-2 pt-[16px]">
            {title && (
              <h2 className="scroll-m-20 border-b  text-2xl font-semibold tracking-tight first:mt-0 text-myBlue">
                {title}
              </h2>
            )}
            {description && (
              <p className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlue/70">
                {description}
              </p>
            )}

            {price && (
              <div className="flex gap-4">
                <p
                  className={`mt-2 scroll-m-20 text-lg font-semibold tracking-tight text-myBlue line-clamp-1 
              ${
                discount > 0 && "line-through decoration-2 decoration-myPeach"
              }`}
                >
                  ${price}
                </p>

                {/* Discounted Price */}
                {discount > 0 && (
                  <p className="mt-2 scroll-m-20 text-lg font-semibold tracking-tight text-myBlue line-clamp-1">
                    ${price - (price * discount) / 100}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Button div */}
          <div className="-mt-4 mx-3">
            
            <button
              className="outline outline-myWhite outline-1 text-myWhite group hover:outline-myPeach 
       btn bg-myBlue/60 hover:bg-myBlue/80 h-5 w-36 rounded-3xl"
            >
              <div className="mr-2 h-4 w-4 group-hover:text-myPeach duration-300 text-lg">
                <FaShoppingCart />
              </div>
              Add to Card
            </button>

            <button
              className="outline outline-myWhite outline-1 text-myWhite group hover:outline-myPeach 
       btn bg-myBlue/60 hover:bg-myBlue/80 h-5 w-36 rounded-3xl "
            >
              <div className="mr-2 h-4 w-4 group-hover:text-myPeach duration-300 text-xl">
                <PiHeartFill />
              </div>
              Buy Now
            </button>
            {discount > 0 && (
              <div
                className="scroll-m-20 text-base font-medium tracking-tight text-myWhite
            bg-myPeach absolute top-0 left-2 w-[90px] p-2 text-center uppercase 
            rounded-tl-xl rounded-bl-xl myDiscountChit"
              >{`${discount}
             % off`}</div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BestSellingCard;
