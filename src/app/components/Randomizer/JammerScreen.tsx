import { FC } from "react"
import Image from "next/image"
import arrow from "@/images/arrow.svg"

interface JammerScreenProps {
  selectedPlayer: number | null
  className?: string
}

const angles = ["-rotate-90", "", "rotate-90", "rotate-180"]

const borderSelected = ["border-l-green-500", "border-t-green-500", "border-r-green-500", "border-b-green-500"]

const JammerScreen: FC<JammerScreenProps> = ({ selectedPlayer, className }) => (
  <div className={`aspect-square${className}`}> 
    <div className={`
    h-full
    border-green-950
    border-[2rem]
    ${selectedPlayer != null ? borderSelected[selectedPlayer as number] : null
    }
    `}>
      <Image
      src={arrow}
      alt="Arrow pointing to selected player"
      className={`
        w-full
        ${selectedPlayer != null ? `
        ${angles[selectedPlayer as number]}
        ` : 
        'opacity-0'}
        `}
        style={{filter: "invert(0.5) sepia(1) saturate(5) hue-rotate(105deg)"}}
      />
    </div>
  </div>
)

export default JammerScreen