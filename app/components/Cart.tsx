"use client"
import React from 'react'
import { useGlobalCart } from '../assets/store/store'
import Image from 'next/image'

const Cart = () => {
  const {cart, setCart} = useGlobalCart();

  const cartDisplay = cart.map((plush) =>{
    return (
      <Image
        key={plush.id}
        src={plush.image}
        width={200}
        height={200}
        alt={plush.imageAlt}
      />
    );
  })

  return (
    <div className="flex flex-row">
      {cartDisplay}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Cart