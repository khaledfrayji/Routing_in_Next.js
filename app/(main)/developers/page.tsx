import React from 'react'
import {developers} from '@/app/data/developers'
import Link from 'next/link'

const page = () => {
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-3">Developers</h1>
      <p className="text-gray-600 mb-8">Meet the developers in our community.</p>

    <div className="flex gap-4 mb-8">
      <Link href="/developers/top-rated" className="text-gray-800 hover:underline text-sm font-medium">Top Rated</Link>
      <Link href="/developers/new-members" className="text-gray-800 hover:underline text-sm font-medium">New Members</Link>
    </div>

      <ul className="list-disc list-inside space-y-2">
        {developers.map((d) => (
            <li key={d.username}>
                <Link
                  href={`/developers/${d.username}`}
                  className="text-gray-900 hover:underline"
                >
                  {d.username}
                </Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default page
//key={d.username} = username is unique per developer