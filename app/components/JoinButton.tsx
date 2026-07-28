"use client"
import {useState} from 'react'

const JoinButton = () => {
    const [joined, setjoined] = useState(false)
  return (
    <button
      onClick={() => setjoined(!joined)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        joined
          ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
        {joined ? "Joined" : "Join Community"}
    </button>
  )
}

export default JoinButton
//useState is how a React component remembers a value across clicks, 
// instead of forgetting everything and starting over every time.

// const [joined, setJoined] = useState(false)
//   joined = a "box" holding true/false, starts at false
//   setJoined = the tool used to change what's in that box

// onClick={() => setJoined(!joined)}
//   when clicked, flip the box to the opposite value

// {joined ? "Joined" : "Join Community"}
//   if the box says true, show "Joined"
//   if the box says false, show "Join Community"