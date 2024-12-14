import { MdOutlineSupportAgent } from "react-icons/md";
import { PiTruckDuotone } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import React from "react";

const Services = () => {
  return (
    <div className="pb-[50px] -pt-20 overflow-x-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-14">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-myBlue mb-4">
            Our Services
          </h1>

          <div className="flex mt-2 justify-center">
            <div className="w-28 h-1 rounded-full bg-myPeach inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* Delivery */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <div className="text-7xl text-myBlue">
                <PiTruckDuotone />
              </div>
            </div>
            <div className="flex-grow">
              <h2
                className="text-myBlue scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-xl capitalize mb-3 
          group-hover:text-myPeach "
              >
                Free delivery
              </h2>
              <p
                className="text-myBlue scroll-m-20 text-base font-semibold tracking-tight first:mt-0
          group-hover:text-myBlue/70 sm:text-xl"
              >
                Shop More, Save More! Spend $500 or more and get your order
                delivered for free!
              </p>
            </div>
          </div>

          {/* 24/7 Service */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <div className="text-7xl text-myBlue">
                <MdOutlineSupportAgent />
              </div>
            </div>
            <div className="flex-grow">
              <h2
                className="text-myBlue scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-xl capitalize mb-3 
          group-hover:text-myPeach"
              >
                24/7 Service
              </h2>
              <p
                className="text-myBlue scroll-m-20 text-base font-semibold tracking-tight first:mt-0
          group-hover:text-myBlue/70"
              >
                Our services are available 24/7 to meet your needs anytime.
                Enjoy uninterrupted service, day or night!
              </p>
            </div>
          </div>

          {/* Money Back */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <div className="text-7xl text-myBlue">
                <GiTakeMyMoney />
              </div>
            </div>
            <div className="flex-grow">
              <h2
                className="text-myBlue scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-xl capitalize mb-3 
          group-hover:text-myPeach"
              >
                Money Back Guarantee
              </h2>
              <p
                className="text-myBlue scroll-m-20 text-base font-semibold tracking-tight first:mt-0
          group-hover:text-myBlue/70"
              >
                We offer a 100% Money Back Guarantee on your purchases. Get your
                money back if you are not satisfied, no questions asked!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
