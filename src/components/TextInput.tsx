import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TaskInputRootProps {
  children: ReactNode
  //className: string
}


export interface TaskInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot({ children }:TaskInputRootProps) {
  return (
  <div className='flex items-center gap-3 h-12 py-4 px-3 bg-gray-800 rounded focus-within:ring-2 ring-cyan-300 w-full'>
    {children}
  </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
  className?: string
}

function TextInputIcon({ children, className }: TextInputIconProps) {
  return (
  <Slot className='text-gray-400 w-6 h-6' >
    {children}
  </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export function TextInputInput(props: TaskInputInputProps) {

  return (
    <input
     className='bg-transparent outline-none flex-1 placeholder:text-gray-400 text-xs outline-none text-white'
    {...props}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}