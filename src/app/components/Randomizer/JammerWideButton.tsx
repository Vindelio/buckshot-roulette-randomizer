import { FC } from "react"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string
  onClick: () => void
  children?: React.ReactNode
  disabled?: boolean
}

const WideButton: FC<ButtonProps> = ({ className, onClick, children, disabled, ...props }) => (
  <button
  className={`min-w-20 w-[40%] border-b-8 border-b-slate-500 border-l-8 border-l-slate-600 p-2 bg-slate-200 text-slate-950 disabled:bg-slate-400 ${className}`}
  onClick={onClick}
  disabled={disabled}
  {...props}
  >
    {children}
  </button>
)

export default WideButton