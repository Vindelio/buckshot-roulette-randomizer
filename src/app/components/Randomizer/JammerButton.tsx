import { FC } from "react"

interface JammerButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  active: boolean
  className?: string
  onclick: () => void
  disabled?: boolean
  children?: React.ReactNode
}

const JammerButton: FC<JammerButtonProps> = ({ active, className, onclick, disabled, children, ...props }) => (
<div className="flex flex-col gap-2 items-center">
  <div className={`${active ? 'bg-green-700' : 'bg-slate-950'} w-3 aspect-square`}></div>

  <button
    className={`
      bg-slate-300
      text-slate-950
      justify-self-end
      grid
      place-content-center
      disabled:bg-slate-400
      ${className}`}
    onClick={onclick}
    disabled={disabled}
    {...props}
    >
    {children}
  </button>
</div>
)

export default JammerButton