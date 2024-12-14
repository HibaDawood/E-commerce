"use client";

import { addToCart } from "@/app/features/cart";
import { useAppDispatch } from "@/app/store/hooks";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCartToast = ( {cartItem} ) => {
  const dispatch = useAppDispatch();
  const notify = () =>
    toast("🌷 Product Added Succesfuly", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <div className="w-fit" onClick={() => dispatch(addToCart(cartItem))}>
        <button
          onClick={notify}
          className="outline outline-myWhite outline-1 text-myWhite group hover:outline-myPeach 
       btn bg-myBlue/60 hover:bg-myBlue/80 h-5 w-36 rounded-3xl"
        >
          <div className="mr-2 h-4 w-4 group-hover:text-myPeach duration-300 text-lg">
            <FaShoppingCart />
          </div>
          Add to Card
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AddToCartToast;
