import { FC } from "react"
import Image from "next/image"
import arrow from "@/images/arrow.svg"

interface JammerScreenProps {
  selectedPlayer: number | null
}

interface ScreenPartProps {
  className?: string
  selected: boolean
  rotate?: boolean
}

const angles = ["-rotate-90", "", "rotate-90", "rotate-180"]

const ScreenPart: FC<ScreenPartProps> = ({ className, selected, rotate }) => (
  <div
    className={` ${rotate ? "aspect-[147/67] h-8" : "aspect-[67/147] w-8"} ${selected ? 'bg-green-500' : 'bg-green-950'} ${className}`}
  ></div>
)

const JammerScreen: FC<JammerScreenProps> = ({ selectedPlayer }) => (
  <div className="grid">
    <ScreenPart selected={selectedPlayer === 0} className="col-start-1 row-start-2" />
    <ScreenPart selected={selectedPlayer === 1} className="col-start-2 row-start-1" rotate />
    <ScreenPart selected={selectedPlayer === 2} className="col-start-3 row-start-2" />
    <ScreenPart selected={selectedPlayer === 3} className="col-start-2 row-start-3" rotate />

    <Image
    src={arrow}
    alt="Arrow pointing to selected player"
    className={`
      w-7
      col-start-2
      row-start-2
      ${selectedPlayer != null ? angles[selectedPlayer as number] : 'hidden'}
      place-self-center
      `}
    style={{filter: "invert(0.5) sepia(1) saturate(5) hue-rotate(60deg)"}}
    />
  </div>
)

export default JammerScreen