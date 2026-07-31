import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex p-5 bg-gray-600 text-white items-center justify-between shadow-md">
      <Link href="/" className="text-xl font-bold hover:text-blue-400">
        App Logo
      </Link>
      <ul className="flex space-x-4">
        <li className="pb-2 border-b-3 border-transparent hover:border-blue-400 hover:text-blue-400 transition-all duration-300 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="pb-2 border-b-3 border-transparent hover:border-blue-400 hover:text-blue-400 transition-all duration-300 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="pb-2 border-b-3 border-transparent hover:border-blue-400 hover:text-blue-400 transition-all duration-300 cursor-pointer">
          <Link href="/communities">Communities</Link>
        </li>
        <li className="pb-2 border-b-3 border-transparent hover:border-blue-400 hover:text-blue-400 transition-all duration-300 cursor-pointer">
          <Link href="/toppics">Toppics</Link>
        </li>
        <li className="pb-2 border-b-3 border-transparent hover:border-blue-400 hover:text-blue-400 transition-all duration-300 cursor-pointer">
          <Link href="/developers">Developpers</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
