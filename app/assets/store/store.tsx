"use client"

import { create } from "domain";
import {createContext, useContext, Dispatch, SetStateAction, useState} from "react"

type Plush = {
  id?: string;
  name: string;
  sales: {
    prices: string[];
    sizes: string[];
  };
  image: string;
  qty?: number;
  imageAlt: string;
  totalPrice?: string | number;
};



interface CartProps {
    cart: Plush[],
    setCart: Dispatch<SetStateAction<Plush[]>>
}

interface TotalProps {
  total: number,
  setTotal: Dispatch<SetStateAction<number>>
}

const GlobalCartContext = createContext<CartProps>({
  cart: [],
  setCart: (): Plush[] => [],
});

const GlobalTotalContext = createContext<TotalProps>({
  total: 0,
  setTotal: (): number => 0
})



export const GlobalContextProvider = ({children}: {children: any}) =>{
    const [cart, setCart] = useState<[] | Plush[]>([]);
    const [total, setTotal] = useState<number>(0);

    return (
      <GlobalTotalContext.Provider value={{ total, setTotal }}>
        <GlobalCartContext.Provider value={{ cart, setCart }}>
          {children}
        </GlobalCartContext.Provider>
      </GlobalTotalContext.Provider>
    );
}

export const useGlobalCart = () => useContext(GlobalCartContext);
export const useGlobalTotal = () => useContext(GlobalTotalContext);