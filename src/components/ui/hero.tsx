import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mb-[50px] mx-14">
      <div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat ">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">
              Futuristics <span className="text-myPeach">Clothes</span>
            </h1>
            <p className="mb-5 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 text-myWhite">
              Upgrade your Wardrop with Sleek & Stylish Apparels and Top-notch
              Shoes.
            </p>
            <button
              className="outline outline-myWhite outline-1 text-myWhite group hover:outline-myPeach 
       btn bg-myBlue/60 hover:bg-myBlue/80 h-5 w-36 
       rounded-3xl"
            >
              <div
                className="mr-2 h-4 w-4 text-lg content-center group-hover:text-myPeach group-hover:animate-bounce
            "
              >
                <FaShoppingBag />
              </div>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
