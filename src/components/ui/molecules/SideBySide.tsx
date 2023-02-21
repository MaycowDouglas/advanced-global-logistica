import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

import { classNames } from '@/utils'

type Props = {
  reverse?: boolean
  children: ReactNode
  image: {
    alt: string
    src: string | StaticImageData
  }
}

export default function SideBySide({ image, reverse = false, children }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20 text-center md:text-left">
      <div className={reverse ? 'md:order-last' : ''}>
        <Image src={image.src} alt={image.alt} className="rounded-lg" />
      </div>
      <div>{children}</div>
    </div>
  )
}
