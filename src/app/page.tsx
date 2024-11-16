"use client"
import { useState } from 'react'
import Link from 'next/link'

const pickRandom = (activePlayers: boolean[]) => {
  let activePlayerIndexes: number[] = []
  activePlayers.forEach((active, index) => active ? activePlayerIndexes = [...activePlayerIndexes, index] : null)

  return activePlayerIndexes[Math.floor(Math.random() * activePlayerIndexes.length)]
}

const Home = () => {
  const [activePlayers, setActivePlayers] = useState([true, true, true])
  
  return (
  <div className='h-screen flex flex-col'>
  <header className='bg-slate-800 text-green-300 text-center p-4 mb-10'>
    <h1>!!Work in progess!!(clearly) Buckshot roulette player picker !!Work in progess!!</h1>
  </header>
  <main className='grid grid-rows-3 grid-cols-3 justify-items-center flex-1'>
    <div 
    className={`${activePlayers[0] ? 'bg-slate-800' : 'bg-slate-300'} text-green-300 w-16 h-16 row-start-2 col-start-1`}
    onClick={() => {
      const newState = [...activePlayers]
      newState[0] = !activePlayers[0]
      setActivePlayers(newState)
    }}
    >
      1
    </div>
    <div
    className={`${activePlayers[1] ? 'bg-slate-800' : 'bg-slate-300'} text-green-300 w-16 h-16 row-start-1 col-start-2`}
    onClick={() => {
      const newState = [...activePlayers]
      newState[1] = !activePlayers[1]
      setActivePlayers(newState)
    }}
    >
      2
    </div>
    <div
    className={`${activePlayers[2] ? 'bg-slate-800' : 'bg-slate-300'} text-green-300 w-16 h-16 row-start-2 col-start-3`}
    onClick={() => {
      const newState = [...activePlayers]
      newState[2] = !activePlayers[2]
      setActivePlayers(newState)
    }}
    >
      3
    </div>

    <button className='row-start-3 col-span-3' onClick={() => alert(`Player ${pickRandom(activePlayers) + 1} has been selected!`)}>Pick a player</button>
  </main>
  <footer className='bg-slate-800 text-green-300 text-center p-4 mt-10'>
    <p>A little &quot;Fuck it, lets have fun&quot; side project by <Link className='underline' href="https://graesberg.com" target='_blank'>Henry Græsberg</Link></p>
    <Link href="https://git.graesberg.com/buckshot-roulette-randomizer" target='_blank' className='underline'>Source code</Link>
  </footer>
  </div>
  );
}

export default Home;
