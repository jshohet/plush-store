"use client"
import React, {useState} from 'react'
import { useGlobalCart } from '../assets/store/store'
import Image from 'next/image'
import {BsCart4} from 'react-icons/bs'
import {FaRegTrashAlt} from 'react-icons/fa'
import Link from 'next/link'

const Cart = () => {
  const {cart, setCart} = useGlobalCart();
  const [show, setShow] = useState(false)

  const onCartClick = (e: any) =>{
    setShow(prevShow => !prevShow && cart.length > 0)
  }

  const deleteCartItem = (id: string | undefined) =>{
    setCart((prevItemData) => {
      return prevItemData.filter((item) => {
        return item.id !== id;
      });
    });
  }

  const total = () =>{
    let tot: any = 0;
    cart.forEach((el) => {
      tot += el.totalPrice;
    })
    return parseFloat(tot).toFixed(2);
  }

  const cartDisplay = cart.map((plush) =>{
    return (
      <div key={plush.id} className="flex flex-row">
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
          <p className="ml-6">{plush.totalPrice}</p>
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
  })

  return (
    <div className="flex flex-col h-36 z-50 ">
      <BsCart4
        size={30}
        onClick={onCartClick}
        className="cursor-pointer my-auto mr-2"
      />
      {show && (
        <div className="absolute top-24 right-2 bg-lime-100 rounded-2xl max-h-52 overflow-y-auto">
          <div>{cartDisplay}</div>
          <h3>Total Price: {total()}</h3>
          <Link
            href="../checkout"
            className="flex border-2 border-solid border-black p-2 rounded-xl my-2 mx-auto w-44 justify-center hover:bg-green-200">
            Go to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart