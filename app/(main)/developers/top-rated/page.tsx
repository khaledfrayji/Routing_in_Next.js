import React from 'react'
import {developers} from '@/app/data/developers'
import Link from 'next/link'

const page = () => {
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-3">Top-Rated Developers</h1>
      <p className="text-gray-600 mb-8">Discover the most highly-rated developers in our community.</p>

      <ul className="list-disc list-inside space-y-2">
        {developers.map((d) => (
          <li key={d.username}>
            <Link href={`/developers/${d.username}`} className="text-gray-900 hover:underline">
              {d.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page