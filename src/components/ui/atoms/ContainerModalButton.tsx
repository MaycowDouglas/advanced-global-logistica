import { ButtonHTMLAttributes } from 'react'

import { classNames } from '@/utils'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean
}

export default function ContainerModalButton({ isActive = false, children, ...rest }: Props) {
  return (
    <button
      className={classNames(
        isActive ? 'bg-green-light-300' : 'bg-transparent',
        'px-4 py-1 rounded-full border-2 border-green-light-300 font-bold uppercase'
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
