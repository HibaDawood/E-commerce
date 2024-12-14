"use client";

import BestSellingCard from "@/components/bestSellingCard";
const CategoryPage = ({ }: { params: { categorey: string } }) => {


  const bestSell = [
    {
      src: "/picture/shirt.png",
      title: "Red Black Shirt",
      alt: "Red Black Shirt",
      description: "Beautiful Shirts for Girls",
      price: 150,
      category: "tops",
      products: "shirt",
      discount: 20,
    },
    {
      src: "/picture/top-2.png",
      title: "Gray Top",
      alt: "Gray Top",
      description: "Butterfly Gray Top for Girls",
      price: 120,
      category: "tops",
      products: "shirt",
      discount: 0,
    },
    {
      src: "/picture/top.png",
      title: "Printed Elegant Top",
      alt: "Printed Top",
      description: "Elegant Top for Girls",
      price: 110,
      category: "tops",
      products: "shirt",
      discount: 0,
    },
    {
      src: "/picture/top-3.png",
      title: "Offwhite Top",
      alt: "Offwhite Top",
      description: "Beautiful Top for Girls",
      price: 150,
      category: "tops",
      products: "shirt",
      discount: 30,
    },
    {
      src: "/picture/top-4.png",
      title: "Beautiful Pink Shirt",
      alt: "Beautiful Pink Shirt",
      description: "Beautiful Pink Shirt for Girls",
      price: 100,
      category: "tops",
      products: "shirt",
      discount: 0,
    },
    {
      src: "/picture/top-5.png",
      title: "Stylish Shirt",
      alt: "Stylish Shirt",
      description: "Stylish Shirt for Girls",
      price: 150,
      category: "tops",
      products: "shirt",
      discount: 25,
    },
    {
      src: "/picture/top-6.png",
      title: "White Beautiful Shirt",
      alt: "White Beautiful Shirt",
      description: "White Beautiful Shirt for girls",
      price: 120,
      category: "tops",
      products: "shirt",
      discount: 0,
    },
    {
      src: "/picture/top-9.png",
      title: "Red Stylish Shirt",
      alt: "Red Stylish Shirt",
      description: "Red Stylish Shirt for Girls",
      price: 170,
      category: "tops",
      products: "shirt",
      discount: 0,
    },
    {
      src: "/picture/top-8.png",
      title: "Purple Top",
      alt: "Purple Top",
      description: "Beautiful Top for Girls",
      price: 180,
      category: "pants",
      products: "white-pants",
      discount: 25,
    },
  ];
  return (
    <div className="mb-[100px] mt-[60px]">
      {/* Heading */}
      <div className="text-center pb-14">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-myBlue mb-4 capitalize">
          Tops
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
            alt={items.title}
            title={items.alt}
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

export default CategoryPage;
