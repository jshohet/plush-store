import React from 'react'
import Cart from './Cart'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="font-bold text-3xl mx-auto cursor-pointer">
        <h1>Chew Plush &trade;</h1>
      </Link>
      <Cart />
    </div>
  );
}

export default Header