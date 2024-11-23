"use client"

import { useState } from 'react'
import Image from 'next/image'
import PlayerButton from './JammerButton'
import WideButton from './JammerWideButton'
import Screen from './JammerScreen'
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
    <main className='grid justify-items-start items-center aspect-[365/455] bg-[#200000] p-4'>
      <div className='flex h-full flex-col justify-start'>
        <div>
          <h2 className='text-lg'>graesberg electronics</h2>
        </div>
        <Screen selectedPlayer={selectedPlayer} className='max-w-full' />
      </div>

      <div className='flex flex-col w-full gap-10'>
        <div className='flex justify-evenly w-full'>
          {activePlayers.map((active, index) => (
            <PlayerButton
              key={index}
              active={active}
              onclick={() => handlePlayerSelect(activePlayers, setActivePlayers, index)}
              disabled={running}
            >
              <Image src={arrow} alt="Player arrow" className={`${angles[index]} w-7`} />
            </PlayerButton>
          ))}
        </div>
        <div className='flex justify-between'>
          <WideButton onClick={() => {
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
      </div>
    </main>
  )
}

export default JammerReplica