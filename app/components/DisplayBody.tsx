"use client";
import React, { useState, useEffect } from "react";
import { Plushies } from "../assets/store/plush";
import Image from "next/image";
import { useGlobalCart } from "../assets/store/store";

const DisplayBody = () => {
  const [plushies, setPlushies] = useState(Plushies);
  const {cart, setCart} = useGlobalCart();

  // const handleImageClick = () =>{
  //   setCart(prevCart => [...prevCart, {
  //     name: plush
  //   }])
  

  const plushDisplay = plushies.map((plush) => {
    return (
      <div key={plush.id}>
        <Image
          src={plush.image}
          width={200}
          height={200}
          alt={plush.imageAlt}
          onClick={() => setCart([...cart, plush])}
        />
      </div>
    );
  });

  return <div className="grid grid-cols-4 ml-10">{plushDisplay}</div>;
};

export default DisplayBody;
