"use client"

import { useState } from 'react'
import Image from 'next/image'
import PlayerButton from './JammerButton'
import WideButton from './JammerWideButton'
import arrow from '@/images/arrow.svg'

const pickRandom = (activePlayers: boolean[]) => {
  if (activePlayers.length === 0) return null

  let activePlayerIndexes: number[] = []
  activePlayers.forEach((active, index) => active ? activePlayerIndexes = [...activePlayerIndexes, index] : null)

  const randomPlayer = activePlayerIndexes[Math.floor(Math.random() * activePlayerIndexes.length)]

  return randomPlayer
}

const handlePlayerSelect = (activePlayers: boolean[], setActivePlayers: (activePlayers: boolean[]) => void, playerNumber: number) => {
  const newState = [...activePlayers]
  newState[playerNumber] = !activePlayers[playerNumber]
  setActivePlayers(newState)
}

const JammerReplica = () => {
  const [activePlayers, setActivePlayers] = useState([true, true, true, false])
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null)

  const [running, setRunning] = useState(false)

  const angles = ["-rotate-90", "", "rotate-90", "rotate-180"]

  return (
    <main className='flex flex-col justify-items-center items-center gap-10 aspect-[365/455] bg-[#200000] p-4'>
      <div className='w-full'>
        <h2 className='text-lg'>graesberg electronics</h2>
      </div>
      <div className='flex justify-evenly w-full'>
        {activePlayers.map((active, index) => (
          <PlayerButton
            key={index}
            active={active}
            chosen={selectedPlayer === index}
            onclick={() => handlePlayerSelect(activePlayers, setActivePlayers, index)}
            disabled={running}
          >
            <Image src={arrow} alt="Player arrow" className={`${angles[index]} w-7`} />
          </PlayerButton>
        ))}
      </div>

      <div className='flex justify-between w-full'>
        <WideButton onClick={() => {
          setSelectedPlayer(null)
          const interval = setInterval(() => {setSelectedPlayer(pickRandom(activePlayers))}, Math.floor(Math.random() * 100))
          setRunning(true)
          setTimeout(() => {clearInterval(interval); setRunning(false)}, Math.floor(Math.random() * 10 * 500 + 300))
        }}
        {...(activePlayers.every(active => !active) ? {disabled: true} : {})}
        disabled={running}
        >
          Pick a player
        </WideButton>

        <WideButton onClick={() => {
          setSelectedPlayer(null)
          setActivePlayers([true, true, true, false])
        }}
        disabled={running}
        >
          Reset
        </WideButton>
      </div>

      <div className='row-start-6 col-span-3'>
          {selectedPlayer != null && selectedPlayer != 3 && <p>Player nr. <span className='font-bold text-red-600'>{selectedPlayer + 1}</span> picked</p>}
          {selectedPlayer === 3 && <p><span className='font-bold text-red-600'>You</span> were selected</p>}
        </div>
    </main>
  )
}

export default JammerReplica