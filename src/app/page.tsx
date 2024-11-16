"use client"
import { useState } from 'react'

const pickRandom = (activePlayers: boolean[]) => {
  let activePlayerIndexes: number[] = []
  activePlayers.forEach((active, index) => active ? activePlayerIndexes = [...activePlayerIndexes, index] : null)

  return activePlayerIndexes[Math.floor(Math.random() * activePlayerIndexes.length)]
}

const Home = () => {
  const [activePlayers, setActivePlayers] = useState([true, true, true])
  
  return (
   <main className='grid grid-rows-3 grid-cols-3 justify-items-center'>
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
  );
}

export default Home;
