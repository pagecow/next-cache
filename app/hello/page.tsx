"use client"

import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState('');
  
  useEffect(() => {
    getTime()
  }, [])

  async function getTime() {
    const res = await fetch('https://worldtimeapi.org/api/timezone/America/Chicago')
    const data = await res.json()
    console.log("data: ", data.datetime)

    setTime(data.datetime)
  }

  return( 
    <div className='bg-white h-screen w-full p-10'>
      <h1 className='m-10'>{time}</h1>
    </div>
  )
}
