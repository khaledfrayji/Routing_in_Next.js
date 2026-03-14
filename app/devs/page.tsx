import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='text-5xl text-purple-700 font-bold text-center'>Devs</h1>
        <ul>
           <Link href="/devs/1">
              <li className='text-2xl text-gray-700 font-medium text-center'>Dev 1</li>
           </Link>
           <Link href="/devs/2">
              <li className='text-2xl text-gray-700 font-medium text-center'>Dev 2</li>
           </Link>
           <Link href="/devs/3">
              <li className='text-2xl text-gray-700 font-medium text-center'>Dev 3</li>
           </Link>
        </ul>
    </div>
  )
}

export default page