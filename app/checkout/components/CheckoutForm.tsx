"use client"
import { useGlobalCart, useGlobalTotal } from '@/app/assets/store/store'
import React from 'react'
import Image from 'next/image'
import { FaRegTrashAlt } from "react-icons/fa";


const CheckoutForm = () => {
    const {cart, setCart} = useGlobalCart();
    const {total, setTotal} = useGlobalTotal();

    const checkoutDisplay = cart.map((plush) =>{
        return (
          <div key={plush.id} className="flex flex-row bg-slate-100 rounded-2xl mx-6 my-4">
            <Image
              src={plush.image}
              alt={plush.imageAlt}
              width={200}
              height={200}
              className="rounded-3xl p-1"
            />
            <div className="flex flex-row items-center rounded-lg">
              <p className="font-semibold ml-2">{plush.name}</p>
              <p className="ml-6">{plush.qty}</p>
              <p className="ml-6">${plush.totalPrice}</p>
              <button
                className="mx-10"
                onClick={() => {
                  
                }}>
                <FaRegTrashAlt size={20} />
              </button>
            </div>
          </div>
        );})

  return (
    <div>{checkoutDisplay}</div>
  )
}

export default CheckoutForm