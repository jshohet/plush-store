"use client";
import React, {useState} from "react";
import { useGlobalCart, useGlobalTotal } from "../../assets/store/store";
import { useSearchParams } from "next/navigation";
import { Plushies, Plush } from "@/app/assets/store/plush";
import Image from "next/image";
import {nanoid } from "@reduxjs/toolkit";

const ItemForm = () => {
  const { cart, setCart } = useGlobalCart();
  const { total, setTotal } = useGlobalTotal();
  const [qty, setQty] = useState(1);
  const searchParams = useSearchParams();
  const currentKey = searchParams.get("key");

  const currentItem: Plush | undefined = Plushies.find(
    (plush) => plush.id === currentKey
  );

  const [selectedSize, setSelectedSize] = useState(
    currentItem?.sales.sizes[0] || "sm"
  );

  function addQty() {
    setQty((prevQty) => (prevQty = prevQty + 1));
  }

  function minusQty() {
    setQty((prevQty) => (prevQty = prevQty - 1));
  }

  function onSelectChange(e: any) {
    const { value } = e.target;
    setSelectedSize(value);
  }

  const totalPriceCalc = (): string => {
    if (currentItem) {
      return (
        qty *
        parseFloat(
          currentItem.sales.prices[
            currentItem.sales.sizes.indexOf(selectedSize)
          ]
        )
      ).toFixed(2);
    } else {
      return "0";
    }
  };

  function addItem(){
    if (currentItem) {
      setCart([
        ...cart,
        {
          ...currentItem,
          id: nanoid(),
          qty: qty,
          totalPrice: totalPriceCalc(),
        },
      ])
      setTotal(total + parseFloat(totalPriceCalc()));
      
    }
  }
    
  return (
    <div className="flex flex-row align-middle justify-center items-center">
      <div>
        {currentItem ? (
          <Image
            src={currentItem.image}
            alt={currentItem.imageAlt}
            width={500}
            height={500}
            className="rounded-full ml-2"
          />
        ) : (
          <h2>
            Item not found. Please return to the main page and select an item.
          </h2>
        )}
      </div>
      <div className="ml-6">
        {currentItem && (
          <div>
            <div>
              <h2 className="font-bold text-xl mb-2">{currentItem.name}</h2>
              <p className="text-lg italic mb-2">
                $
                {
                  currentItem.sales.prices[
                    currentItem.sales.sizes.indexOf(selectedSize)
                  ]
                }
              </p>
              <div className="flex flex-row mb-2">
                {currentItem.sales.sizes.includes("sm") && (
                  <div className="mr-4">
                    <input
                      type="radio"
                      id="sm"
                      name="size"
                      value="sm"
                      onChange={onSelectChange}
                      className="mr-2"
                      defaultChecked
                    />
                    <label htmlFor="sm">Small (5&quot;)</label>
                  </div>
                )}
                {currentItem.sales.sizes.includes("md") && (
                  <div className="mr-4">
                    <input
                      type="radio"
                      id="md"
                      name="size"
                      value="md"
                      onChange={onSelectChange}
                      className="mr-2"
                      defaultChecked
                    />
                    <label htmlFor="md">Medium (10&quot;)</label>
                  </div>
                )}
                {currentItem.sales.sizes.includes("lg") && (
                  <div className="mr-4">
                    <input
                      type="radio"
                      id="lg"
                      name="size"
                      value="lg"
                      onChange={onSelectChange}
                      className="mr-2"
                      defaultChecked
                    />
                    <label htmlFor="lg">Large (15&quot;)</label>
                  </div>
                )}
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  name="qty"
                  value={qty}
                  className="text-center w-16 text-md font-semibold rounded-lg"
                  onChange={(e) => setQty(parseFloat(e.target.value))}
                />
                <button
                  onClick={addQty}
                  className="border-2 border-slate-500 border-solid mx-1 px-2 font-bold rounded-full text-sm hover:bg-green-300">
                  +
                </button>
                <button
                  onClick={minusQty}
                  className="border-2 border-slate-500 border-solid mx-1 px-2 font-bold rounded-full text-sm hover:bg-green-300">
                  -
                </button>
              </div>
            </div>
            <button
              className="border-2 border-slate-500 border-solid px-2 rounded-lg hover:bg-green-300"
              onClick={addItem}>
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemForm;
