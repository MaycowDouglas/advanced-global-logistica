import Image, { StaticImageData } from 'next/image'
import { MouseEventHandler } from 'react'
import { FaChevronRight } from 'react-icons/fa'

import Button from '@/components/ui/atoms/Button'
import Card from '@/components/ui/atoms/Card'

type Props = {
  name: string
  onClick: MouseEventHandler<HTMLButtonElement>
  image: {
    alt: string
    src: string | StaticImageData
  }
}

export default function CardContainer({ image, name, onClick }: Props) {
  return (
    <Card>
      <Image src={image.src} alt={image.alt} />
      <div className="text-blue-300">
        <h3 className="mb-2 font-bold text-xl uppercase">{name}</h3>
        <p className="text-lg leading-6">Veja as medidas deste contêiner.</p>
      </div>
      <Button text="Ver medidas" icon={<FaChevronRight />} onClick={onClick} />
    </Card>
  )
}
