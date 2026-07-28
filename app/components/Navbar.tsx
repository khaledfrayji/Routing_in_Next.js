"use client"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <h1 className="text-lg font-semibold text-gray-900">DevCommunity</h1>
      <ul className="flex gap-6 text-sm text-gray-600">
        <li>
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/communities" className="hover:text-blue-600">
            Communities
          </Link>
        </li>
        <li>
          <Link href="/topics" className="hover:text-blue-600">
            Topics
          </Link>
        </li>
        <li>
          <Link href="/developers" className="hover:text-blue-600">
            Developers
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar