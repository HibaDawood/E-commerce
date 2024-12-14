import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="pb-[100px] pt-[100px]">
      <div className="text-center pb-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-myBlue mb-4">
          Our Categories
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-28 h-1 rounded-full bg-myPeach inline-flex" />
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-14">
        {/* Category 1  Tops */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/tops"}>
            <Image
              src={"/picture/top.png"}
              alt="Tops"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-110 h-80"
            />
            <div
              className="hidden lg:block absolute -bottom-24 group-hover:bottom-5 duration-500 scroll-m-20 text-4xl 
              font-extrabold tracking-tight
              bg-myBlue/70 text-center text-myWhite w-full"
            >
              <h1 className="uppercase">Tops</h1>
            </div>
            <div
              className="block lg:hidden absolute bottom-16 duration-500 scroll-m-20 text-4xl 
              font-extrabold tracking-tight
              bg-myBlue/70 text-center text-myWhite w-full"
            >
              <h1 className="uppercase">Tops</h1>
            </div>
          </Link>
        </div>

        {/* Category 2 Pants */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/categorey2"}>
            <Image
              src={"/picture/pantc.png"}
              alt="Pants"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-110 h-80 bg-cover bg-center object-fill"
            />
            <div
              className="hidden lg:block absolute -bottom-24 group-hover:bottom-5 duration-500 scroll-m-20 text-4xl 
              font-extrabold tracking-tight
              bg-myBlue/70 text-center text-myWhite w-full"
            >
              <h1 className="uppercase">Pants</h1>
            </div>

            <div
              className="block lg:hidden absolute bottom-16 duration-500 scroll-m-20 text-4xl 
              font-extrabold tracking-tight
              bg-myBlue/70 text-center text-myWhite w-full"
            >
              <h1 className="uppercase">Pants</h1>
            </div>
          </Link>
        </div>

        {/* Category 3 Accessories */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/categorey3"}>
            <Image
              src={"/picture/accessories.png"}
              alt="Accessories"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-110 h-80 bg-cover bg-center object-fill"
            />
            <div
              className="hidden lg:block absolute -bottom-24 group-hover:bottom-5 duration-500 scroll-m-20 text-4xl 
              font-extrabold tracking-tight
              bg-myBlue/70 text-center text-myWhite w-full"
            >
              <h1 className="uppercase">Accessories</h1>
            </div>
            <div
              className="block lg:hidden absolute bottom-16 duration-500 scroll-m-20 text-4xl 
              font-extrabold tracking-tight
              bg-myBlue/70 text-center text-myWhite w-full"
            >
              <h1 className="uppercase">Accessories</h1>
            </div>
          </Link>
        </div>

        {/* Category 4 shoes */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/categorey4"}>
            <Image
              src={"/picture/shoes.png"}
              alt="Pants"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-110 h-80 bg-cover bg-center object-fill"
            />
            <div
              className="hidden lg:block absolute -bottom-24 group-hover:bottom-5 duration-500 scroll-m-20 text-4xl 
              font-extrabold tracking-tight
              bg-myBlue/70 text-center text-myWhite w-full"
            >
              <h1 className="uppercase">Shoes</h1>
            </div>
            <div
              className="block lg:hidden absolute bottom-16 duration-500 scroll-m-20 text-4xl 
              font-extrabold tracking-tight
              bg-myBlue/70 text-center text-myWhite w-full"
            >
              <h1 className="uppercase">Shoes</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
