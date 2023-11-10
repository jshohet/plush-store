"use client";
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import { Plushies } from "../assets/store/plush";
import Image from "next/image";
import Link from "next/link";

const DisplayBody = () => {
  const [plushies, setPlushies] = useState(Plushies);

  const [sizeCheckbox, setSizeCheckbox] = useState({
    sm: false,
    md: false,
    lg: false,
  });

  const [priceCheckbox, setPriceCheckbox] = useState({
    "10.99": false,
    "15.99": false,
    "20.99": false,
  });

  const plushDisplay = plushies.map((plush) => {
    return (
      <Link key={plush.id} href={`../item?key=${plush.id}`}>
        <div className="flex" key={plush.id}>
          <Image
            src={plush.image}
            width={180}
            height={180}
            alt={plush.imageAlt}
            className="rounded-xl mb-4 mr-2 aspect-square cursor-pointer hover:scale-125 transition-all duration-500"
          />
          <div>
            <h2 className="font-bold flex-wrap">{plush.name}</h2>
            <h3>From {plush.sales.prices[0]}*</h3>
          </div>
        </div>
      </Link>
    );
  });
  //TODO - fix
  function filterHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (
      Object.values(sizeCheckbox).every((x) => x === false) &&
      Object.values(priceCheckbox).every((x) => x === false)
    ) {
      setPlushies(Plushies);
      return;
    } else {
      const filtered = Plushies.filter((plush) => {
        const sizeTrue = Object.keys(sizeCheckbox).filter(
          (key) => sizeCheckbox[key as keyof typeof sizeCheckbox] === true
        );
        const priceTrue = Object.keys(priceCheckbox).filter(
          (key) => priceCheckbox[key as keyof typeof priceCheckbox] === true
        );
        return plush.sales.sizes.some((item) => sizeTrue.includes(item)) || plush.sales.prices.some((item)=>priceTrue.includes(item));
      });
      setPlushies(filtered);
    }
  }

  const handleSizeCheck = (e: any) => {
    const { checked, name } = e.target;
    setSizeCheckbox((prevCheckbox) => {
      return {
        ...prevCheckbox,
        [name]: checked,
      };
    });
  };

  const handlePriceCheck = (e: any) => {
    const { checked, name } = e.target;
    setPriceCheckbox((prevCheckbox) => {
      return {
        ...prevCheckbox,
        [name]: checked,
      };
    });
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <section className="flex flex-col p-5 shadow-xl bg-yellow-200 rounded-xl h-fit mx-4 mb-4">
        <h2 className="text-xl font-bold mx-auto whitespace-nowrap mb-4 ">
          Filter by:{" "}
        </h2>
        <section>
          <div className="flex flex-row justify-evenly sm:flex-col ">
            <div className="mb-1">
              <h3 className="italic mb-2">Size: </h3>
              <div>
                <label htmlFor="sizes" className="mr-1">
                  Small
                </label>
                <input
                  type="checkbox"
                  id="sizes"
                  value="sm"
                  name="sm"
                  onChange={(e) => handleSizeCheck(e)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="sizes" className="mr-1">
                  Medium
                </label>
                <input
                  type="checkbox"
                  id="sizes"
                  value="md"
                  name="md"
                  onChange={(e) => handleSizeCheck(e)}
                />
              </div>
              <div>
                <label htmlFor="sizes" className="mr-1">
                  Large
                </label>
                <input
                  type="checkbox"
                  id="sizes"
                  value="lg"
                  name="lg"
                  onChange={(e) => handleSizeCheck(e)}
                />
              </div>
            </div>
            <div className="sm:mt-2">
              <h3 className="mb-2 italic">Price: </h3>
              <div className="mb-1">
                <label htmlFor="smallPrice" className="mr-1">
                  $10.99
                </label>
                <input
                  type="checkbox"
                  id="smallPrice"
                  value="$10.99"
                  name="10.99"
                  onChange={(e) => handlePriceCheck(e)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="mdPrice" className="mr-1">
                  $15.99
                </label>
                <input
                  type="checkbox"
                  id="mdPrice"
                  value="$15.99"
                  name="15.99"
                  onChange={(e) => handlePriceCheck(e)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="lgPrice" className="mr-1">
                  $20.99
                </label>
                <input
                  type="checkbox"
                  id="lgPrice"
                  value="$20.99"
                  name="20.99"
                  onChange={(e) => handlePriceCheck(e)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button
              onClick={filterHandler}
              type="submit"
              className="flex border-solid border-slate-400 p-2 rounded-xl border-2">
              Apply filters
            </button>
          </div>
        </section>
      </section>
      <section className="grid grid-cols-1 ml-10 md:grid-cols-2 lg:grid-cols-3 w-3/4">
        {plushDisplay}
      </section>
    </div>
  );
};

export default DisplayBody;
