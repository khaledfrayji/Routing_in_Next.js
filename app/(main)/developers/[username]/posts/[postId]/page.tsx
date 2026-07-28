import React from 'react'
import {posts} from '@/app/data/posts'

const page = async ({params}: {params: Promise<{username: string; postId: string}>}) => {
    const resolvedParams = await params
    const post = posts.find((p) => p.username === resolvedParams.username && p.postId === resolvedParams.postId)
    return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-1">{post?.title}</h1>
      <p className="text-gray-500 text-sm mb-4">By {resolvedParams.username}</p>
      <p className="text-gray-600">{post?.content}</p>
    </div>
  )
}

export default page
//two dynamic values this time: username AND postId, both come from the URL