import { FC } from "react"

interface JammerButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  active: boolean
  chosen: boolean
  className?: string
  onclick: () => void
  children?: React.ReactNode
}

const JammerButton: FC<JammerButtonProps> = ({ active, chosen, className, onclick, children, ...props }) => (
<div className="flex flex-col gap-2 items-center">
  <div className={`${active ? 'bg-green-700' : 'bg-slate-950'} w-3 aspect-square`}></div>

  <button
    className={`
      bg-slate-300
      ${chosen && 'outline'}
      outline-4
      outline-green-500
      text-slate-950
      justify-self-end
      grid
      place-content-center
      ${className}`}
    onClick={onclick}
    {...props}
    >
    {children}
  </button>
</div>
)

export default JammerButton