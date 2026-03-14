'use client'
import React, { useState } from 'react'

const Counter = () => {
    const [likes, setLikes] = useState(0)   
  return (
  <div>
    <h1>Likes: {likes}</h1>
    <button onClick={() => setLikes(likes + 1)}>
      Like
    </button>
  </div>
  )
}

export default Counter