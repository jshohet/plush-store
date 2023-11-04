import React from 'react'
import { useGlobalCart } from '@/app/assets/store/store'

const CheckoutForm = () => {
  const { cart, setCart } = useGlobalCart();

  
  return (
    <div>CheckoutForm</div>
  )
}

export default CheckoutForm