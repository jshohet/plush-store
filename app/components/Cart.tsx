"use client";
import React, { useEffect, useState } from "react";
import { useGlobalCart, useGlobalTotal } from "../assets/store/store";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { nanoid } from "@reduxjs/toolkit";
import { Plush } from "../assets/store/plush";

const Cart = () => {
  const { cart, setCart } = useGlobalCart();
  const [show, setShow] = useState(false);
  const {total, setTotal} = useGlobalTotal();

  const onCartClick = (e: any) => {
    setShow((prevShow) => !prevShow && cart.length > 0);
  };

  const deleteCartItem = (id: string | undefined) => {
    let heldItem: Plush[];
    //find object Plush in cart that has id = passed in id
    heldItem = cart.filter((item) => {
      return item.id === id
    })
    setTotal(total - parseFloat(heldItem[0].totalPrice as string))
    setCart((prevItemData) => {
      return prevItemData.filter((item) => {        
        return item.id !== id;
      });
    })    
  };   

  const cartDisplay = cart.map((plush) => {
    return (
      <div key={nanoid()} className="flex flex-row ease-in duration-300 transition-all">
        <Image
          src={plush.image}
          width={50}
          height={50}
          alt={plush.imageAlt}
          className="rounded-3xl p-1"
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
    );
  });  

  
  
  return (
    <div className="flex flex-col h-36 z-50 mr-2">
      <BsCart4
        size={30}
        onClick={onCartClick}
        className="cursor-pointer my-auto mr-2"
      />
      {show && (
        <div className="absolute top-24 right-2 bg-lime-100 rounded-2xl max-h-52 overflow-y-auto ease-in-out duration-700 ml-2">
          <div>{cartDisplay}</div>
          {cartDisplay.length > 0 && (
            <div>
              <h3 className="ml-2">
                <span className="italic">Total Price:</span> $
                {total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h3>
              <Link
                href="../checkout"
                className="flex border-2 border-solid border-black p-2 rounded-xl my-2 mx-auto w-44 justify-center hover:bg-green-200">
                Go to Checkout
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
