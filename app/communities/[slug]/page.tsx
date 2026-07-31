import React from 'react'

import { communities } from '@/app/data/communities'

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const community = communities.find((c) => c.slug === slug)

  if (!community) {
    return (
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Community not found</h1>
      </section>
    )
  }
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">{community.name}</h1>
      <p className="text-gray-600">{community.slug}</p>
      <p className="text-gray-600">{community.description}</p>
    </section>
  )
}

export default page
