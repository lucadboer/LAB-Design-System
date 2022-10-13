import { clsx } from 'clsx'

import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Button({ children, asChild, className }: ButtonProps) {

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
     className={clsx(
      'text-black font-semibold bg-cyan-500 py-3 px-4 rounded w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
      className

    )}
    >
      {children}
    </Comp>
  )
}