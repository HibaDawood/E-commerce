"use client";
import Image from "next/image";
import React, { useState } from "react"; 

const SlugComponent = () => {
  const [path, setPath] = useState("");
  return (
    <div className="mt-8">
      <Image
        src={ path ? path : "/picture/shirt.png"}
        alt="ecommerce"
        width={400}
        height={300}
        className="h-[27rem]"
      />
      <div className="flex items-center justify-evenly mx-auto mt-2">
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/picture/sh-1.png"}
            alt="shoes"
            width={60}
            height={60}
            onClick={() => setPath("/picture/sh-1.png")}
          />
        </div>
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/picture/acc-4.png"}
            alt="shoes"
            width={60}
            height={60}
            onClick={() => setPath("/picture/acc-4.png")}
          />
        </div>
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/picture/pant-8.png"}
            alt="shoes"
            width={60}
            height={60}
            onClick={() => setPath("/picture/pant-8.png")}
          />
        </div>
       
      </div>
    </div>
  );
};

export default SlugComponent;
