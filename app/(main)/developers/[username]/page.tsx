import React from 'react'
import {developers} from '@/app/data/developers'
import {posts} from '@/app/data/posts'
import Link from 'next/link'

const page = async ({params} : {params: Promise<{username: string}>}) => {
    const resolvedParams = await params
    const dev = developers.find((d) => d.username === resolvedParams.username)
    const devposts = posts.filter((p) => p.username === resolvedParams.username)
    return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-1">{resolvedParams.username}</h1>
      <p className="text-blue-600 text-sm font-medium mb-4">{dev?.role}</p>
      <p className="text-gray-600 mb-8">{dev?.bio}</p>

      {devposts.length > 0 && (
        <>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Posts</h2>
        <ul className="space-y-3">
          {devposts.map((p) => (
            <li key={p.postId}>
              <Link
                href={`/developers/${resolvedParams.username}/posts/${p.postId}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {p.title}
              </Link>
            </li>
          ))} 
        </ul>
         </>
     )}
    </div>
  )
}

export default page