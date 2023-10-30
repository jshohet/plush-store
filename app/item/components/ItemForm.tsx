"use client"
import React from 'react'
import { useGlobalCart } from "../../assets/store/store";

const ItemForm = () => {
  const { cart, setCart } = useGlobalCart();

  


  return (
    <div>ItemForm</div>
  )
}

export default ItemForm