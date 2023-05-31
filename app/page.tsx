type Time = {
  datetime: string
}

async function getTime(): Promise<Time> {
  const res = await fetch('http://worldtimeapi.org/api/timezone/America/Chicago')

  return res.json()
}

export default async function Home() {
  const [time] = await Promise.all([getTime()])

  return( 
    <div className='bg-white h-screen w-full p-10'>
      <h1 className='m-10'>{time.datetime}</h1>
    </div>
  )
}

export const revalidate = 3;
