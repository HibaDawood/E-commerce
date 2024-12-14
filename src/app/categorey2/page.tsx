import BestSellingCard from "@/components/bestSellingCard";
import React from "react";

const Category2 = () => {
  const bestSell = [
    {
      src: "/picture/pant-1.png",
      title: "White Pant",
      alt: "White Pants",
      description: "Beautiful Pants for Girls",
      price: 100,
      category: "pants",
      products: "pants",
      discount: 0,
    },
    {
      src: "/picture/pant-2.png",
      title: "Plane White Pant",
      alt: "Girls Pants",
      description: "Plane White Pants for Girls",
      price: 120,
      category: "pants",
      products: "pants",
      discount: 0,
    },
    {
      src: "/picture/pant-3.png",
      title: "Gray Pant",
      alt: "Gray Pant",
      description: "Beautiful Pant for Girls",
      price: 110,
      category: "pants",
      products: "pants",
      discount: 10,
    },
    {
      src: "/picture/pant-4.png",
      title: "Black pant",
      alt: "Black pant",
      description: "Beautiful Pant for Girls",
      price: 100,
      category: "pants",
      products: "pants",
      discount: 0,
    },
    {
      src: "/picture/pant-5.png",
      title: "Plane Comfortable Pant",
      alt: "Plane Comfortable Pant",
      description: "Beautiful Pant for Girls",
      price: 90,
      category: "pants",
      products: "pants",
      discount: 10,
    },
    {
      src: "/picture/pant-6.png",
      title: "Comfortable Pant",
      alt: "Comfortable Pant",
      description: "Comfortable Pants for Girls",
      price: 100,
      category: "pants",
      products: "pants",
      discount: 0,
    },
    {
      src: "/picture/pant-7.png",
      title: "Jeans Pant",
      alt: "Jeans Pant",
      description: "Jeans Pant design for Girls",
      price: 120,
      category: "pants",
      products: "pants",
      discount: 0,
    },
    {
      src: "/picture/pant-8.png",
      title: "Comfortable soft Trouser",
      alt: "Comfortable soft Trouser",
      description: "Comfortable soft Trouser for Girls",
      price: 90,
      category: "pants",
      products: "pants",
      discount: 0,
    },
    {
      src: "/picture/pant-9.png",
      title: "cute Jeans",
      alt: "cute Jeans",
      description: "cute Jeans pants for Girls",
      price: 110,
      category: "pants",
      products: "pants",
      discount: 11,
    },
  ];
  return (
    <div className="mb-[100px] mt-[60px]">
      {/* Heading */}
      <div className="text-center pb-14">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-myBlue mb-4 capitalize">
          Pants
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
