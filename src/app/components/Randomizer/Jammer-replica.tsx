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

  return (
    <main className='flex flex-col justify-items-center items-center gap-10 aspect-[365/455] bg-[#200000] p-4'>
      <div className='w-full'>
        <h2 className='text-lg'>graesberg electronics</h2>
      </div>
      <div className='flex justify-evenly w-full'>
        <PlayerButton
          active={activePlayers[0]}
          chosen={selectedPlayer === 0}
          onclick={() => handlePlayerSelect(activePlayers, setActivePlayers, 0)}
        >
          <Image src={arrow} alt="Player arrow" className='-rotate-90 w-7' />
        </PlayerButton>
        <PlayerButton
          active={activePlayers[1]}
          chosen={selectedPlayer === 1}
          onclick={() => handlePlayerSelect(activePlayers, setActivePlayers, 1)}
        >
          <Image src={arrow} alt="Player arrow" className='w-7' />
        </PlayerButton>
        <PlayerButton
          active={activePlayers[2]}
          chosen={selectedPlayer === 2}
          onclick={() => handlePlayerSelect(activePlayers, setActivePlayers, 2)}
        >
          <Image src={arrow} alt="Player arrow" className='rotate-90 w-7' />
        </PlayerButton>
        <PlayerButton
          active={activePlayers[3]}
          chosen={selectedPlayer === 3}
          onclick={() => handlePlayerSelect(activePlayers, setActivePlayers, 3)}
        >
          <Image src={arrow} alt="Player arrow" className='rotate-180 w-7' />
        </PlayerButton>
      </div>

      <div className='flex justify-between w-full'>
        <WideButton onClick={() => {
          setSelectedPlayer(null)
          for (let i = 0; i < 1000; i++)
          setTimeout(() => {setSelectedPlayer(pickRandom(activePlayers))}, Math.floor(Math.random() * 500 + 300))}}>
          Pick a player
        </WideButton>
        <WideButton onClick={() => {
          setSelectedPlayer(null)
          setActivePlayers([true, true, true, false])
        }}>
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