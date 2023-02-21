import { LiHTMLAttributes } from 'react'

import { classNames } from '@/utils'

import ServiceIcons from './ServiceIcons'

type Props = LiHTMLAttributes<HTMLLIElement> & {
  active?: boolean
  label: string
  icon: 'ship' | 'airplane' | 'truck' | 'consultancy'
}

export default function ServicesNavigationItem({ label, icon, active = false, ...rest }: Props) {
  return (
    <li
      className={classNames(
        'relative pt-5 flex justify-center border-t-2 text-lg cursor-pointer transition-all',
        active ? 'font-bold text-white' : 'text-neutral-250'
      )}
      {...rest}
    >
      <span
        className={classNames(
          'absolute left-0 top-0 -translate-y-2/3 w-full inline-flex border-[3px] rounded-lg z-10 transition-all',
          active ? 'border-green-light-300' : 'border-transparent'
        )}
      ></span>
      <span className="lg:hidden">
        <ServiceIcons icon={icon} active={active} />
      </span>
      <span className="hidden lg:block">{label}</span>
    </li>
  )
}
