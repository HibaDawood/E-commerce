import React from "react";

const About = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-myWhite dark:bg-myBlue dark:text-myBlue/70 -pt-[10px]">
        <div className="container relative mx-auto px-4 py-10 lg:px-4 lg:py-14 xl:max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 font-bold text-5xl text-myBlue/95 dark:text-myBlue/70">
              ABOUT
              <span className="text-myPeach dark:text-myPeach/80"> US</span>
            </h1>
            <h2
              className="mx-auto text-xl font-medium leading-relaxed text-myBlue/80 
        lg:w-2/3 dark:text-myBlue/70 mb-20"
            >
              Welcome to Chengs Collection, your one-stop destination for trendy
              and stylish girls fashion! Explore our exclusive collection of
              tops, pants, accessories, and shoes designed to elevate your
              wardrobe effortlessly. We pride ourselves on delivering
              high-quality, chic, and affordable styles that keep you ahead of
              the trends. Shop with us and embrace the confidence that comes
              with fashion that fits perfectly!
            </h2>
          </div>

          <div className="relative mx-5 lg:mx-60 mb-16">
            <div
              className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16  rounded-full border
         border-myBlue/90 lg:size-72 dark:border-myBlue/85"
            ></div>
            <div
              className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border
         border-myPeach lg:size-72 dark:border-myPeach/85"
            ></div>
            <div
              className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border
         border-myBlue/90 lg:size-72 dark:border-myBlue/85"
            ></div>
            <div
              className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border
         border-myPeach lg:size-72 dark:border-myPeach/85"
            ></div>
            <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-mybiscuiti lg:-m-8 dark:bg-mybiscuiti/30"></div>
            <div
              className="absolute inset-0 -m-6 rotate-1 rounded-xl shadow-inner lg:-m-8
         dark:bg-blue-900/75"
            ></div>
            <div
              className="relative rounded-lg shadow-lg w-[48rem] h-72 about-img bg-no-repeat
            bg-cover"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
