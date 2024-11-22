import Link from 'next/link'
import { FC } from 'react'

interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {
  className?: string
}

const Footer: FC<FooterProps> = ({ className, ...props }) => (
  <footer className={`bg-slate-800 text-green-300 text-center p-4 mt-10 ${className}`} {...props}>
    <p>A little &quot;Fuck it, lets have fun&quot; side project by <Link className='underline' href="https://graesberg.com" target='_blank'>Henry Græsberg</Link></p>
    <Link href="https://git.graesberg.com/buckshot-roulette-randomizer" target='_blank' className='underline'>Source code</Link>
  </footer>
)

export default Footer