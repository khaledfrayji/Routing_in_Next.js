'use client'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="p-5 text-center text-4xl font-bold">
        <h1>This is the DEVELOPERS page!</h1>
      </div>
      <div className="px-5 text-center">
        <Link href="/developers/join">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
            Join our Developer Community
          </button>
        </Link>
      </div>

      <a className="font-bold" href="/developers/top-rated">
        * Top Rated
      </a>
      <a className="font-bold" href="/developers/new-members">
        * New Members
      </a>
      <hr />
      <a className="font-bold" href="/developers/profile">
        - Developer X
      </a>
      <a className="font-bold" href="/developers/profile">
        - Developer Y
      </a>
      <a className="font-bold" href="/developers/profile">
        - Developer Z
      </a>
    </div>
  )
}

export default page
