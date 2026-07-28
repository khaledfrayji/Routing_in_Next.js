import React from 'react'
import {communities} from '@/app/data/communities'
import JoinButton from "@/app/components/JoinButton"

// Next.js 16 change: params is now a Promise, not a plain object
// async = this component can "pause" and wait for something before finishing
const page = async ({params} : {params: Promise<{slug: string}> }) => {

    // await = "pause here until the Promise actually delivers its value"
    // resolvedParams now holds the real object, e.g. { slug: "web-development" }
    const resolvedParams = await params
    // .find() = search the array, return the ONE item matching the condition
    const community = communities.find((c) => c.slug === resolvedParams.slug)
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-3">{community?.name ?? resolvedParams.slug}</h1>
      <p className="text-gray-600 mb-6">{community?.description}</p>
      <JoinButton />
    </div>
  )
}

export default page