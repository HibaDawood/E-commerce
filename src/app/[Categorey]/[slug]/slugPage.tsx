"use client";
import SlugComponent from "@/components/slugComponent";
import React, { useState } from "react";
import { PiHeartFill } from "react-icons/pi";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useAppSelector } from "../../store/hooks";
import AddToCartToast from "@/components/ui/addToCartToast";

const SlugPage = ({}: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.products);
  const slug = product.filter((val) => val.slug);

  const [cartItem, setCartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image[0],
    slug: slug[0].slug,
    price: slug[0].price,
    discount: slug[0].discount,
    category: slug[0].category,
    size: slug[0].size[0],
    qty: slug[0].qty,
    color: slug[0].color[0],
  });
  return (
    <div>
      <div className="container px-5 mx-auto mt-[15px]">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* image */}
          <SlugComponent />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-5 lg:mt-0">
            {/* title */}
            <h2 className="text-base title-font text-myBlue/70 tracking-widest font-medium">
              {/* Girls Tops */}
              women Tops
            </h2>
            <h1
              className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 mb-1
             text-myBlue"
            >
              Our High Quality Products
            </h1>

            {/* Rating */}
            <div className="rating -pb-6">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-500"
                defaultChecked
              />
            </div>
            <div className="divider mt-1 mb-1"></div>

            {/* description */}
            <p className="leading-relaxed scroll-m-20 -pt-1 text-base font-medium first:mt-0 text-myBlue/70">
              Welcome to Chengs Collection, your trusted destination for
              high-quality tops, pants, accessories, and shoes at unbeatable
              prices. Explore our wide range of products tailored to your style,
              with fast delivery and exceptional customer support. Shop now and
              experience seamless, stress-free shopping!
            </p>
            <div className="flex mt-2 items-center mb-3">
              {/* Color */}
              <div className="flex">
                <span className="mr-3 text-myBlue/80 font-semibold text-base">
                  Color
                </span>
                {slug[0].color.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setCartItem({ ...cartItem, color: item })}
                    className="border-2 border-gray-300 mr-1 bg-white rounded-full w-6 h-6 
            focus:outline-none active:border-black focus:border-black"
                    style={{ backgroundColor: item }}
                  />
                ))}
              </div>
              {/* Size */}
              <div className="flex ml-6 items-center">
                <span className="mr-3 text-myBlue/80 font-semibold text-base">
                  Size
                </span>

                <div className="form-control w-fit max-w-xs bg-myWhite h-fit">
                  <select
                    onChange={(e) =>
                      setCartItem({ ...cartItem, size: e.target.value })
                    }
                    className="select border-none"
                  >
                    <option disabled defaultValue={"Select Size"}>
                      Select Size
                    </option>
                    {slug[0].size.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center -pt-[4px]">
              <span className="mr-3 text-myBlue/80 font-semibold text-base">
                Quantity
              </span>
              <button
                onClick={() =>
                  setCartItem({
                    ...cartItem,
                    qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                  })
                }
                className="outline outline-myWhite outline-1 text-myWhite group hover:outline-myPeach 
       btn bg-myBlue/60 hover:bg-myBlue/80 h-fit w-fit rounded-2xl"
              >
                <div className="mr-2 h-4 w-4 group-hover:text-myPeach duration-300 text-lg">
                  <TiMinus />
                </div>
                Less
              </button>
              <div className="mx-2 scroll-m-20 text-xl font-semibold tracking-tight text-myBlue/80">
                {cartItem.qty}
              </div>
              <button
                onClick={() =>
                  setCartItem({ ...cartItem, qty: ++cartItem.qty })
                }
                className="outline outline-myWhite outline-1 text-myWhite group hover:outline-myPeach 
       btn bg-myBlue/60 hover:bg-myBlue/80 h-fit w-fit rounded-2xl"
              >
                <div className="mr-2 h-4 w-4 group-hover:text-myPeach duration-300 text-lg">
                  <TiPlus />
                </div>
                Add
              </button>
            </div>
            {/* Divider */}
            <div className="divider mt-1 mb-2"></div>

            <div className="flex items-center justify-between -pt-4">
              {/* Price */}
              <div>
                <span
                  className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlue
                  ${
                    cartItem.discount > 0 &&
                    "line-through decoration-2 decoration-myPeach"
                  }`}
                >
                  ${cartItem.price * cartItem.qty}
                </span>

                {/* Dicounted price */}
                {slug[0].discount > 0 && (
                  <span
                    className="ml-3 scroll-m-20 text-2xl font-semibold tracking-tight
                    text-myBlue"
                  >
                    $
                    {(cartItem.price -
                      (cartItem.price * cartItem.discount) / 100) *
                      cartItem.qty}
                  </span>
                )}
              </div>

              <AddToCartToast cartItem={cartItem} />
            </div>
            <button
              className="mt-4 outline outline-myWhite outline-1 text-myWhite group hover:outline-myPeach 
       btn bg-myBlue/60 hover:bg-myBlue/80 h-5 w-full rounded-3xl"
            >
              <div className="mr-2 mb-1 h-4 w-4 group-hover:text-myPeach duration-300 text-xl">
                <PiHeartFill />
              </div>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
