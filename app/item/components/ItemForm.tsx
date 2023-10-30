"use client"
import React, { useEffect, useState } from 'react'
import { useGlobalCart } from "../../assets/store/store";
import { useSearchParams } from 'next/navigation';
import { Plushies, Plush } from '@/app/assets/store/plush';
import Image from "next/image";


const ItemForm = () => {
  const { cart, setCart } = useGlobalCart();
  const [qty, setQty] = useState(1);
  const searchParams = useSearchParams();
  const currentKey = searchParams.get("key")  

  const currentItem: Plush | undefined = Plushies.find(
    (plush) => plush.id === currentKey
  );

  const [selectedSize, setSelectedSize] = useState(currentItem?.sales.sizes[0] || "sm");


  function addQty(){
    setQty(prevQty => prevQty = prevQty+1)
  }

  function minusQty(){
    setQty((prevQty) => (prevQty = prevQty - 1));

  }

  function onSelectChange(e: any){
    const {value} = e.target;
    setSelectedSize(value)
  }

  const totalPriceCalc = (): string =>{
    if (currentItem) {
    return (qty * parseFloat( currentItem.sales.prices[currentItem.sales.sizes.indexOf(selectedSize)])).toFixed(2);      
    }else{
      return "0";
    }
  }
//TODO - fix ids so delete works but can add more than one of each item
console.log(cart)

  return (
    <div className="flex flex-row">
      <div>
        {currentItem && (
          <Image
            src={currentItem.image}
            alt={currentItem.imageAlt}
            width={500}
            height={500}
            className="rounded-full ml-20"
          />
        )}
      </div>
      <div>
        {currentItem && (
          <div>
            <div>
              <h2>{currentItem.name}</h2>
              <p>
                {
                  currentItem.sales.prices[
                    currentItem.sales.sizes.indexOf(selectedSize)
                  ]
                }
              </p>
              <div>
                {currentItem.sales.sizes.includes("sm") && (
                  <div>
                    <label htmlFor="sm">Small (5&quot;)</label>
                    <input
                      type="radio"
                      id="sm"
                      name="size"
                      value="sm"
                      onChange={onSelectChange}
                    />
                  </div>
                )}
                {currentItem.sales.sizes.includes("md") && (
                  <div>
                    <label htmlFor="md">Medium (10&quot;)</label>
                    <input
                      type="radio"
                      id="md"
                      name="size"
                      value="md"
                      onChange={onSelectChange}
                    />
                  </div>
                )}
                {currentItem.sales.sizes.includes("lg") && (
                  <div>
                    <label htmlFor="lg">Large (15&quot;)</label>
                    <input
                      type="radio"
                      id="lg"
                      name="size"
                      value="lg"
                      onChange={onSelectChange}
                    />
                  </div>
                )}
              </div>
              <input
                type="number"
                name="qty"
                value={qty}
                className="text-center w-16"
              />
              <button onClick={addQty}>+</button>
              <button onClick={minusQty}>-</button>
            </div>
            <button
              onClick={() =>
                setCart([
                  ...cart,
                  {
                    ...currentItem,
                    qty: qty,
                    totalPrice: totalPriceCalc()
                  },
                ])
              }>
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemForm