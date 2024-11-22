import { FC } from "react"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string
  onClick: () => void
  children?: React.ReactNode
}

const WideButton: FC<ButtonProps> = ({ className, onClick, children, ...props }) => (
  <button className={`rounded-md w-40 p-4 bg-slate-200 text-slate-950 ${className}`} onClick={onClick} {...props}>
    {children}
  </button>
)

export default WideButton