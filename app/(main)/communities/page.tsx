import React from 'react'
import {communities} from '@/app/data/communities'
import Link from 'next/link'

const page = () => {
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-3">Communities</h1>
      <p className="text-gray-600 mb-8">Explore developers communities by topic</p>

      <ul className="list-disc list-inside space-y-2">
        {communities.map((c) => (
            <li key={c.slug}>
                <Link
                  href={`/communities/${c.slug}`}
                  className="text-gray-900 hover:underline"
                >
                  {c.name}
                </Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default page