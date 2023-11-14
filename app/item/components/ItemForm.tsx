"use client";
import React, {useState} from "react";
import { useGlobalCart, useGlobalTotal } from "../../assets/store/store";
import { useSearchParams } from "next/navigation";
import { Plushies, Plush } from "@/app/assets/store/plush";
import Image from "next/image";
import {nanoid } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemForm = () => {
  const { cart, setCart } = useGlobalCart();
  const { total, setTotal } = useGlobalTotal();
  const [qty, setQty] = useState(1);
  const searchParams = useSearchParams();
  const currentKey = searchParams.get("key");

    console.log(qty);


  const currentItem: Plush | undefined = Plushies.find(
    (plush) => plush.id === currentKey
  );

  const [selectedSize, setSelectedSize] = useState(
    currentItem?.sales.sizes[0] || "sm"
  );

  function addQty() {
    if (isNaN(qty)) {
      setQty(1)
    }
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
    if (qty < 1 || isNaN(qty)) {
      toast.warn("Please select a valid quantity.");
      return;
    }
    if(qty > 99){
      toast.warn("We don't have that many plushies in stock!")
      return;
    }    
    if(cart.length > 10){
      toast.warn("Please check out and start a new cart to add more items.")
      return
    }
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
      toast.success("Item added to cart! 🐵");
    }
  }
    console.log(isNaN(qty))
  
  return (
    <div className="flex flex-row align-middle justify-center items-center">
      <div>
        {currentItem ? (
          <Image
            src={currentItem.image}
            alt={currentItem.imageAlt}
            width={200}
            height={200}
            className="rounded-full ml-2 md:w-[500px]"
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
              <div className="flex flex-col lg:flex-row mb-2">
                {currentItem.sales.sizes.includes("sm") && (
                  <div className="mr-4">
                    <input
                      type="radio"
                      id="sm"
                      name="size"
                      value="sm"
                      onChange={onSelectChange}
                      className="mr-2"
                      defaultChecked={currentItem.sales.sizes[0] === "sm"}
                    />
                    <label htmlFor="sm ">Small (5&quot;)</label>
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
                      defaultChecked={currentItem.sales.sizes[0] === "md"}
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
                      defaultChecked={currentItem.sales.sizes[0] === "lg"}
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
                  min={1}
                  maxLength={6}
                  id="qtyPut"
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
            <ToastContainer
              position="bottom-left"
              autoClose={2000}
              theme="dark"
              pauseOnHover
              hideProgressBar={true}
              bodyClassName="toast-body"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemForm;
