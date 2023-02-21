import { Trans } from '@lingui/macro'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import ModalContainer from '@/components/templates/ModalContainer'
import ContainerModalButton from '@/components/ui/atoms/ContainerModalButton'
import ImageContainerPlataform from '@/public/images/containers/plataform.jpg'

type Props = {
  data: {
    [index: string]: {
      typeGroup: string
      sizeGroup: string
      insideDimensions: {
        feet: {
          minWidth: string
          minLength: string
          widthFloor: string
          heightBottom: string
        }
        millimeters: {
          minWidth: string
          minLength: string
          widthFloor: string
          heightBottom: string
        }
      }
      weight: {
        pounds: {
          maxGross: string
          tareWeight: string
          maxPayload: string
        }
        kilograms: {
          maxGross: string
          tareWeight: string
          maxPayload: string
        }
      }
    }
  }
}

type PlataformSize = "20' Plataform" | "40' Plataform"

export default function ModalContainerPlataform({ data }: Props) {
  const [plataformSize, setPlataformSize] = useState<PlataformSize>("20' Plataform")
  return (
    <ModalContainer
      title="Plataform"
      image={ImageContainerPlataform}
      sizeGroup={data[plataformSize].sizeGroup}
      typeGroup={data[plataformSize].typeGroup}
      weight={{ divClassName: 'col-span-12 xl:col-span-12', props: data[plataformSize].weight }}
      insideDimensions={{
        divClassName: 'col-span-12 xl:col-span-12',
        props: data[plataformSize].insideDimensions,
      }}
      buttons={[
        {
          label: "20' Plataform",
          className: 'max-w-[170px]',
          isActive: plataformSize === "20' Plataform",
          onClick: () => setPlataformSize("20' Plataform"),
        },
        {
          label: "40' Plataform",
          className: 'max-w-[250px]',
          isActive: plataformSize === "40' Plataform",
          onClick: () => setPlataformSize("40' Plataform"),
        },
      ]}
    />
  )
}
