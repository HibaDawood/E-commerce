'use client';
import CartCard from "@/components/cartCard";
import { useAppSelector } from "../store/hooks";

const CartPage = () => {
    const cartArray = useAppSelector((state) => state.cart);
    const total = cartArray.reduce((total, arr) =>
         {return(total + ((arr.price-(arr.price*arr.discount)/100))*arr.qty)}, 0)
  
  return (
    <div>
       <div className="grid lg:grid-cols-3 grid-cols-1 mx-20">
        {/* Items */}
        <div className="col-span-2">
          <CartCard/>
        </div>
        {/* Summary */}
        <div className="bg-myBlue/5 p-5 rounded-xl">
          {/* Heading */}
          <h1 className="scroll-m-20 text-xl font-semibold tracking-tight text-myBlue">
            Order Summary
          </h1>
          {/* Divider */}
          <div className="divider mt-0 mb-1 text-myBlue/80"></div>
          {/* pricing */}
          <div className="text-base font-medium tracking-tight text-myBlue/80">
            {/* Product Price */}
            <div className="flex items-center justify-between">
              <h2>Sub Total</h2>
              <h2>${total}</h2>
            </div>
            {/* Delivery Charges */}
            <div className="flex items-center justify-between">
              <h2>Delivery Charges</h2>
              <h2>TBD</h2>
            </div>
            {/* Service Charges*/}
            <div className="flex items-center justify-between">
              <h2>Sales Tax</h2>
              <h2>TBD</h2>
            </div>
            {/* Divider */}
            <div className="divider mt-0 mb-1 text-myBlue/80"></div>

            {/* Estimated Total */}
            <div
              className="flex items-center justify-between font-semibold text-lg tracking-tight
            text-myBlue"
            >
              <h2>Estimated Total</h2>
              <h2>${total}</h2>
            </div>

            {/* Divider */}
            <div className="divider mt-0 mb-1 text-myBlue/80"></div>

            {/* Checkout Button */}
            <div className="flex justify-center">
              <button
                className="outline outline-myWhite outline-1 text-myWhite group hover:outline-myPeach 
       btn bg-myBlue/60 hover:bg-myBlue/80 h-fit w-fit tracking-tight
       rounded-2xl uppercase"
              >
                Proceed to checkout
              </button>
            </div>

            {/* Divider */}
            <div className="divider mt-0 mb-1 text-myBlue/80"></div>

            {/* Note */}
            <p
              className="text-sm font-semibold tracking-tight text-myBlue w-[97%]
          text-center italic"
            >
              {`* Delivery Charges and the Sales Tax will be Calculated in the Checkout Page`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
