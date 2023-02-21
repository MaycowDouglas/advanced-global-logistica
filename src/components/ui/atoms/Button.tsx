import { ButtonHTMLAttributes, ReactNode } from 'react'

import { classNames } from '@/utils'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode
  text: string
  pill?: boolean
  color?: 'primary'
  outline?: boolean
}

export default function Button({
  icon,
  text,
  pill = false,
  color = 'primary',
  outline = false,
  className = '',
  ...rest
}: Props) {
  const theme = {
    primary: {
      fill: 'border-2 border-green-light-300 bg-green-light-300 text-blue-300 font-bold hover:border-green-light-400 hover:bg-green-light-400',
      outline:
        'border-2 border-green-light-400 bg-transparent text-blue-300 font-bold hover:bg-green-light-100',
    },
  }

  return (
    <button
      className={classNames(
        className,
        pill ? 'rounded-full' : 'rounded-md',
        theme[color][outline ? 'outline' : 'fill'],
        'px-5 py-2 gap-2 inline-flex items-center justify-center transition-all'
      )}
      {...rest}
    >
      <span className="mt-1">{text.toUpperCase()}</span>
      {icon !== undefined && icon}
    </button>
  )
}
