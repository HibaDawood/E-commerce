import React from "react";

const Promotion = () => {
  return (
    <div className="pb-[50px] pt-[50px] overflow-x-hidden">
      {/* Heading */}
      <div className="text-center pb-14">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-myBlue mb-4">
          Our Promotions
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-28 h-1 rounded-full bg-myPeach inline-flex" />
        </div>
      </div>

      {/* Promotion section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-14">
        {/* 1st Child */}
        <div className="hero h-[25rem] promo-child-1 rounded-xl">
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1
                className="scroll-m-20 text-5xl font-bold tracking-tight 
      uppercase text-myWhite"
              >
                Get Upto <span className="text-myPeach">50%</span> off
              </h1>
              <p className="mt-4 scroll-m-20 pb-2 text-base font-medium tracking-tight first:mt-0 text-myWhite">
                Get up to 50% off on your favorite items! Shop now and save big
                before the offer ends. Do not miss out!
              </p>
            </div>
          </div>
        </div>
        {/* 2nd child */}

        <div className="hero h-[25rem] promo-child-2 rounded-xl">
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1
                className="scroll-m-20 text-5xl font-bold tracking-tight 
      uppercase text-myWhite"
              >
                Get Upto <span className="text-myPeach">30%</span> off
              </h1>
              <p className="mt-4 scroll-m-20 pb-2 text-base font-medium tracking-tight first:mt-0 text-myWhite">
                Grab up to 30% off on amazing deals! Hurry, shop now and save
                big while the offer lasts!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
