import React from "react";
import { useGlobalCart, useGlobalTotal } from "../../assets/store/store";
import Image from "next/image";

const CheckoutForm = () => {
  const { cart, setCart } = useGlobalCart();
  const {total, setTotal} = useGlobalTotal();

  const checkoutDisplay = cart.map((plush) => {
    <div key={plush.id}>
      <Image src={plush.image} width={180} height={180} alt={plush.imageAlt} />
      hi
    </div>;
  });

  return <div>checkoutForm</div>;
};

export default CheckoutForm;
