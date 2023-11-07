"use client"
import { useGlobalCart, useGlobalTotal } from '@/app/assets/store/store'
import React from 'react'
import Image from 'next/image'
import { FaRegTrashAlt } from "react-icons/fa";
import Link from 'next/link';
import { Plush } from '@/app/assets/store/plush';


const CheckoutForm = () => {
    const {cart, setCart} = useGlobalCart();
    const {total, setTotal} = useGlobalTotal();

    const deleteCartItem = (id: string | undefined) => {
      let heldItem: Plush[];
      //find object Plush in cart that has id = passed in id
      heldItem = cart.filter((item) => {
        return item.id === id;
      });
      setTotal(total - parseFloat(heldItem[0].totalPrice as string));
      setCart((prevItemData) => {
        return prevItemData.filter((item) => {
          return item.id !== id;
        });
      });
    };   

    const checkoutDisplay = cart.map((plush) =>{
        return (
          <div
            key={plush.id}
            className="flex flex-row bg-slate-100 rounded-2xl mx-6 my-2 w-fit">
            <Image
              src={plush.image}
              alt={plush.imageAlt}
              width={80}
              height={50}
              className="rounded-3xl p-1 md:w-[200px] lg:w-[300px]"
            />
            <div className="flex flex-row items-center rounded-lg">
              <p className="font-semibold ml-2">{plush.name}</p>
              <p className="ml-6">{plush.qty}</p>
              <p className="ml-6">${plush.totalPrice}</p>
              <button
                className="mx-10"
                onClick={() => {
                  if (deleteCartItem) {
                    deleteCartItem(plush.id);
                  }
                }}>
                <FaRegTrashAlt size={20} />
              </button>
            </div>
          </div>
        );})

  return (
    <div>
      <div className="flex justify-center my-5">
        <h1 className=" font-bold text-3xl">Your cart: </h1>
      </div>
      {checkoutDisplay.length > 0 ? (
        <div className="flex flex-col items-center">{checkoutDisplay}</div>
      ) : (
        <div className="flex flex-col items-center mb-5">
          <h2>Please add items to your cart! </h2>
        </div>
      )}
      {checkoutDisplay.length > 0 ? (
        <div>
          <div className="flex flex-col mb-10 items-center text-xl">
            <h2>Subtotal: ${total.toFixed(2)}</h2>
            <h2 className=" underline underline-offset-4">
              Tax: ${(total * 0.0625).toFixed(2)}
            </h2>
            <h2 className="font-semibold">
              Total: ${(total * 1.0625).toFixed(2)}
            </h2>
          </div>
          <div className="flex justify-center">
            <Link
              href="../confirmation"
              className="border-2 border-slate-500 hover:bg-green-500 hover:border-slate-800 p-5 text-xl font-bold mb-10 rounded-lg">
              Checkout
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Link
            href="/"
            className="border-2 border-slate-500 hover:bg-green-500 hover:border-slate-800 p-5 text-xl font-bold rounded-lg">
            Return to Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default CheckoutForm