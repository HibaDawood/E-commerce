'use client';

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellingCard from './bestSellingCard';
import { useAppSelector } from '@/app/store/hooks';


const Featuredproducts = () => {
// My Data

const bestSell = [
  {
    src: "/picture/sh-6.png",
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
  {
    src: "/picture/pant-8.png",
    title: "Comfortable soft Trouser",
    alt: "Comfortable soft Trouser",
    description: "Comfortable soft Trouser for Girls",
    price: 90,
    category: "pants",
    products: "pants",
    discount: 0
  },
  {
    src: "/picture/acc-9.png",
    title: "Elegant Earrings",
    alt: "Elegant Earrings",
    description: "Unique Earrings for Girls",
    price: 80,
    category: "accesories",
    products: "accesories",
    discount: 0
  },
  {
    src: "/picture/sh-2.png",
    title: "Kuromi & Melody Shoes",
    alt: "Top-notch shoes",
    description: "Cute Cartoons Shoes for Girls",
    price: 100,
    category: "shoes",
    products: "shoes",
    discount: 15
  },
  {
    src: "/picture/pant-5.png",
    title: "Plane Comfortable Pant",
    alt: "Plane Comfortable Pant",
    description: "Beautiful Pant for Girls",
    price: 90,
    category: "pants",
    products: "pants",
    discount: 0
  },
  
];

      {/* carousel setting */}
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='mt-[100px] mb-[100px]'>

        {/* Heading */}
       <div className="text-center pb-14">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-myBlue mb-4
        text-center capitalize">
          Featured Products
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-28 h-1 rounded-full bg-myPeach inline-flex " />
        </div>
      </div>

{/* Carousel */}
      <Slider {...settings}>
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
      </Slider>
    </div>
  )
}

export default Featuredproducts
