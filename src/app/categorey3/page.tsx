import BestSellingCard from "@/components/bestSellingCard";
import React from "react";

const Category2 = () => {
  const bestSell = [
    {
      src: "/picture/acc-1.png",
      title: "Cute Barbie Hair Ties",
      alt: "Cute Barbie Crunchies",
      description: "Beautiful Barbie Hair Ties for Girls",
      price: 40,
      category: "accesories",
      products: "accesories",
      discount: 0,
    },
    {
      src: "/picture/acc-2.png",
      title: "Girls Hamper Basket",
      alt: "Girls Hamper Basket",
      description: "Hamper Basket for Girls",
      price: 100,
      category: "accesories",
      products: "accesories",
      discount: 10,
    },
    {
      src: "/picture/acc-3.png",
      title: "Hello Kitty mackup Kit",
      alt: "Hello Kitty mackup Kit",
      description: "Cute mackup Kit for Girls",
      price: 150,
      category: "accesories",
      products: "accesories",
      discount: 20,
    },
    {
      src: "/picture/acc-4.png",
      title: "Cute Hair Clips",
      alt: "Cute Hair Clips",
      description: "Cute Hair Clips for Girls",
      price: 90,
      category: "accesories",
      products: "accesories",
      discount: 0,
    },
    {
      src: "/picture/acc-5.png",
      title: "Beautiful Hair Bands",
      alt: "Beautiful Hair Bands",
      description: "Beautiful Hair Bands for Girls",
      price: 110,
      category: "accesories",
      products: "accesories",
      discount: 15,
    },
    {
      src: "/picture/acc-6.png",
      title: "Cute Cartoon Necklace",
      alt: "Cute Cartoon Necklace",
      description: "Cute Cartoon Necklace for Girls",
      price: 70,
      category: "accesories",
      products: "accesories",
      discount: 0,
    },
    {
      src: "/picture/acc-7.png",
      title: "Beautiful Princess Crown",
      alt: "Princess Crown",
      description: "Beautiful Crowns for Girls",
      price: 120,
      category: "accesories",
      products: "accesories",
      discount: 0,
    },
    {
      src: "/picture/acc-8.png",
      title: "Cute Necklaces for Couple",
      alt: "Couple Necklaces for Lovers",
      description: "Cute Couple Necklaces for Lovers",
      price: 90,
      category: "accesories",
      products: "accesories",
      discount: 15,
    },
    {
      src: "/picture/acc-9.png",
      title: "Elegant Earrings",
      alt: "Elegant Earrings",
      description: "Unique Earrings for Girls",
      price: 80,
      category: "accesories",
      products: "accesories",
      discount: 0,
    },
  ];
  return (
    <div className="mb-[100px] mt-[60px]">
      {/* Heading */}
      <div className="text-center pb-14">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-myBlue mb-4 capitalize">
          Accessories
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
