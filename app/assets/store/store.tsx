"use client"

import {createContext, useContext, Dispatch, SetStateAction, useState} from "react"

type Plush = {
  id?: string,
  name: string,
  sales:{
    prices: string[],
    sizes: string[]
  },
  image: string,
  qty?: number,
  imageAlt: string
};

interface CartProps {
    cart: Plush[],
    setCart: Dispatch<SetStateAction<Plush[]>>
}

const GlobalCartContext = createContext<CartProps>({
  cart: [],
  setCart: (): Plush[] => [],
});

export const GlobalContextProvider = ({children}: {children: any}) =>{
    const [cart, setCart] = useState<[] | Plush[]>([]);

    return (
      <GlobalCartContext.Provider value={{ cart, setCart }}>
        {children}
      </GlobalCartContext.Provider>
    );
}

export const useGlobalCart = () => useContext(GlobalCartContext);