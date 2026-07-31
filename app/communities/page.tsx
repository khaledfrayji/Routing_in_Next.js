import Link from 'next/link'
import React from 'react'
import { communities } from '@/app/data/communities'

const Page = () => {
  return (
    <div className="flex flex-col">
      <h1 className="p-5 text-center text-4xl font-bold">
        LIST OF COMMUNITIES
      </h1>

      <ul className="space-y-4 px-6">
        {communities.map((community) => (
          <li
            key={community.id}
            className="rounded-lg border p-4 hover:bg-gray-100 transition"
          >
            <Link href={`/communities/${community.slug}`}>
              <h2 className="text-xl font-bold text-blue-600 hover:underline">
                {community.name}
              </h2>
            </Link>

            <p className="mt-2 text-gray-600">{community.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
