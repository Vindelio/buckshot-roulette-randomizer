"use client"
import { useState } from 'react'
import Link from 'next/link'

const pickRandom = (activePlayers: boolean[]) => {
  if (activePlayers.length === 0) return null

  let activePlayerIndexes: number[] = []
  activePlayers.forEach((active, index) => active ? activePlayerIndexes = [...activePlayerIndexes, index] : null)

  const randomPlayer = activePlayerIndexes[Math.floor(Math.random() * activePlayerIndexes.length)]

  return randomPlayer
}

const Home = () => {
  const [activePlayers, setActivePlayers] = useState([true, true, true, false])
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null)
  
  return (
  <div className='h-screen flex flex-col'>
  <header className='bg-slate-800 text-green-300 text-center p-4 mb-10'>
    <h1>!!Work in progess!!(clearly) Buckshot roulette player picker !!Work in progess!!</h1>
  </header>
  <main className='grid grid-rows-6 grid-cols-3 justify-items-center items-center flex-1'>
    <button 
    className={`${activePlayers[0] ? 'bg-slate-800' : 'bg-slate-300'} ${selectedPlayer === 0 && 'outline'} outline-4 outline-green-500 text-green-300 w-16 h-16 row-start-2 col-start-1 grid place-content-center`}
    onClick={() => {
      const newState = [...activePlayers]
      newState[0] = !activePlayers[0]
      setActivePlayers(newState)
    }}
    >
      1
    </button>
    <button
    className={`${activePlayers[1] ? 'bg-slate-800' : 'bg-slate-300'} ${selectedPlayer === 1 && 'outline'} outline-4 outline-green-500 text-green-300 w-16 h-16 row-start-1 col-start-2 grid place-content-center`}
    onClick={() => {
      const newState = [...activePlayers]
      newState[1] = !activePlayers[1]
      setActivePlayers(newState)
    }}
    >
      2
    </button>
    <button
    className={`${activePlayers[2] ? 'bg-slate-800' : 'bg-slate-300'} ${selectedPlayer === 2 && 'outline'} outline-4 outline-green-500 text-green-300 w-16 h-16 row-start-2 col-start-3 grid place-content-center`}
    onClick={() => {
      const newState = [...activePlayers]
      newState[2] = !activePlayers[2]
      setActivePlayers(newState)
    }}
    >
      3
    </button>
    <button
    className={`${activePlayers[3] ? 'bg-slate-800' : 'bg-slate-300'} ${selectedPlayer === 3 && 'outline'} outline-4 outline-green-500 text-green-300 w-16 h-16 row-start-3 col-start-2 grid place-content-center`}
    onClick={() => {
      const newState = [...activePlayers]
      newState[3] = !activePlayers[3]
      setActivePlayers(newState)
    }}
    >
      4
    </button>

    <button className='row-start-4 col-span-3 rounded-md w-36 p-4 bg-slate-800' onClick={() => {
      setSelectedPlayer(null)
      for (let i = 0; i < 1000; i++)
      setTimeout(() => {setSelectedPlayer(pickRandom(activePlayers))}, Math.floor(Math.random() * 500 + 300))}
    }>
      Pick a player
    </button>

    <button className='row-start-5 col-span-3 rounded-md w-36 p-4 bg-slate-800' onClick={() => {
      setSelectedPlayer(null)
      setActivePlayers([true, true, true, false])
    }}>
      Reset
    </button>

    <div className='row-start-6 col-span-3'>
      {selectedPlayer != null && <p>Player nr. <span className='font-bold text-red-600'>{selectedPlayer + 1}</span> picked</p>}
    </div>
  </main>
  <footer className='bg-slate-800 text-green-300 text-center p-4 mt-10'>
    <p>A little &quot;Fuck it, lets have fun&quot; side project by <Link className='underline' href="https://graesberg.com" target='_blank'>Henry Græsberg</Link></p>
    <Link href="https://git.graesberg.com/buckshot-roulette-randomizer" target='_blank' className='underline'>Source code</Link>
  </footer>
  </div>
  );
}

export default Home;
