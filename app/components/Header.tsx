import React from 'react'
import Cart from './Cart'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex items-center">
      <h1 className="font-bold text-3xl mx-auto">Chew Plush &trade;</h1>
      <Cart />
    </div>
  );
}

export default Header