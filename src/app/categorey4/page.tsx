import BestSellingCard from "@/components/bestSellingCard";
import React from "react";

const Category2 = () => {
  const bestSell = [
    {
      src: "/picture/shoes-01.png",
      title: "BlackPink shoes",
      alt: "BlackPink shoes",
      description: "Colorful shoes for Girls",
      price: 100,
      category: "shoes",
      products: "shoes",
      discount: 0,
    },
    {
      src: "/picture/shoes-2.png",
      title: "Black Shoes",
      alt: "Black Shoes",
      description: "Black Heel Shoes for Girls",
      price: 110,
      category: "shoes",
      products: "shoes",
      discount: 0,
    },
    {
      src: "/picture/shoes-white.png",
      title: "white-Pink Shoes",
      alt: "white-Pink Shoes",
      description: "Bright color Shoes for Girls",
      price: 110,
      category: "shoes",
      products: "shoes",
      discount: 17,
    },
    {
      src: "/picture/shoes.png",
      title: "Baby Pink Color Shoes",
      alt: "Baby Pink Color Shoes",
      description: "Cute color shoes for Girls",
      price: 120,
      category: "shoes",
      products: "shoes",
      discount: 0,
    },
    {
      src: "/picture/sh-1.png",
      title: "LED Light Shoes",
      alt: "LED Light shoes",
      description: "LED Light Shoes for Girls",
      price: 150,
      category: "shoes",
      products: "shoes",
      discount: 0,
    },
    {
      src: "/picture/sh-2.png",
      title: "Comfortable Shoes",
      alt: "Comfortable Shoes",
      description: "Comfortable Shoes for Girls",
      price: 100,
      category: "shoes",
      products: "shoes",
      discount: 10,
    },
    {
      src: "/picture/sh-3.png",
      title: "High Heel Sandels",
      alt: "High Heel Sandels",
      description: "High Heel Sandels for Girls",
      price: 120,
      category: "shoes",
      products: "shoes",
      discount: 0,
    },
    {
      src: "/picture/sh-5.png",
      title: "Beautiful Black Heel",
      alt: "Beautiful Black Heel",
      description: "Beautiful Heel for Girls",
      price: 150,
      category: "shoes",
      products: "shoes",
      discount: 0,
    },
    {
      src: "/picture/sh-6.png",
      title: "Kuromi & Melody Shoes",
      alt: "Top-notch shoes",
      description: "Cute Cartoons Shoes for Girls",
      price: 100,
      category: "shoes",
      products: "shoes",
      discount: 15,
    },
  ];
  return (
    <div className="mb-[100px] mt-[60px]">
      {/* Heading */}
      <div className="text-center pb-14">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-myBlue mb-4 capitalize">
          shoes
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-28 h-1 rounded-full bg-myPeach inline-flex" />
        </div>
      </div>

      {/* Categoey Page */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items, i) => (
          <BestSellingCard
            key={i}
            src={items.src}
            alt={items.alt}
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

export default Category2;
