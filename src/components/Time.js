import React, { useState } from 'react'

export default function Time() {
  const [date, setDate] = useState(new Date())
  setTimeout(() => setDate(new Date()), 1000)
  return (
    // <button>
    <div>{date.toLocaleString()}</div>
    // </button>
  )
}
