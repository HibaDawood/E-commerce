'use client';
import React from "react";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const BestSelling = () => {
  const product = useAppSelector((state) => state.products);
 
  const bestSell = [
    {
      src: "/picture/shirt.png",
      title: "Red Black Shirt",
      alt: "Red Black Shirt",
      description: "Beautiful Shirts for Girls",
      price: 150,
      category: "tops",
      products: "shirt",
      discount: 20
    },
    {
      src: "/picture/pant-2.png",
      title: "white Pant",
      alt: "Girls Pants",
      description: "Unique Pants for Girls",
      price: 120,
      category: "pants",
      products: "pants",
      discount: 0
    },
    {
      src: "/picture/shoes-01.png",
      title: "Black-Pink Shoes",
      alt: "Top-notch shoes",
      description: "Top-notch Shoes for Girls",
      price: 100,
      category: "shoes",
      products: "shoes",
      discount: 0
    },
    
  ];

  return (
    <div className="pb-[100px] pt-[50px]">
      <div className="text-center pb-14">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-myBlue mb-4">
          Best Selling Products
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-28 h-1 rounded-full bg-myPeach inline-flex " />
        </div>
      </div>

      {/* Best Selling Products */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items: any, i) => (
          <BestSellingCard
            key={i}
            src={items.src}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            products={items.products}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
