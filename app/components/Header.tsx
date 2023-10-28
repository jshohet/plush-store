import React from 'react'
import Cart from './Cart'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <Link href="./item">item page</Link>
      <Cart /></div>
  )
}

export default Header