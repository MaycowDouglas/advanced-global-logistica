import { Trans } from '@lingui/macro'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import ModalContainer from '@/components/templates/ModalContainer'
import ContainerModalButton from '@/components/ui/atoms/ContainerModalButton'
import ImageContainerFlatrack from '@/public/images/containers/flatrack.jpg'

type Props = {
  data: {
    [index: string]: {
      typeGroup: string
      sizeGroup: string
      insideDimensions: {
        feet: {
          height: string
          minWidth: string
          minLength: string
          widthFloor: string
          heightBottom: string
        }
        millimeters: {
          height: string
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

type FlatrackSize = "20' Flatrack" | "40' Flatrack High Cube"

export default function ModalContainerFlatRack({ data }: Props) {
  const [flatrackSize, setFlatrackSize] = useState<FlatrackSize>("20' Flatrack")

  return (
    <ModalContainer
      title="Flatrack"
      image={ImageContainerFlatrack}
      sizeGroup={data[flatrackSize].sizeGroup}
      typeGroup={data[flatrackSize].typeGroup}
      weight={{ divClassName: 'col-span-12 xl:col-span-12', props: data[flatrackSize].weight }}
      insideDimensions={{
        divClassName: 'col-span-12 xl:col-span-12',
        props: data[flatrackSize].insideDimensions,
      }}
      buttons={[
        {
          label: "20' Flatrack",
          className: 'max-w-[150px]',
          isActive: flatrackSize === "20' Flatrack",
          onClick: () => setFlatrackSize("20' Flatrack"),
        },
        {
          label: "40' Flatrack High Cube",
          className: 'max-w-[250px]',
          isActive: flatrackSize === "40' Flatrack High Cube",
          onClick: () => setFlatrackSize("40' Flatrack High Cube"),
        },
      ]}
    />
  )
}
