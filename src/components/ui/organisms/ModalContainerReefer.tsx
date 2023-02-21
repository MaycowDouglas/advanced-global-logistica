import { Trans } from '@lingui/macro'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import ModalContainer from '@/components/templates/ModalContainer'
import ContainerModalButton from '@/components/ui/atoms/ContainerModalButton'
import ImageContainerReefer from '@/public/images/containers/reefer.jpg'

type Props = {
  data: {
    [index: string]: {
      capacity: string
      typeGroup: string
      sizeGroup: string
      insideDimensions: {
        feet: {
          width: string
          length: string
          height: string
        }
        millimeters: {
          width: string
          length: string
          height: string
        }
      }
      openDoor: {
        feet: {
          width: string
          height: string
        }
        millimeters: {
          width: string
          height: string
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

type ReeferSize = "20' Reefer" | "40' Reefer High Cube"

export default function ModalContainerReefer({ data }: Props) {
  const [reeferSize, setReeferSize] = useState<ReeferSize>("20' Reefer")
  return (
    <ModalContainer
      title="Reefer"
      image={ImageContainerReefer}
      capacity={data[reeferSize].capacity}
      sizeGroup={data[reeferSize].sizeGroup}
      typeGroup={data[reeferSize].typeGroup}
      weight={{ divClassName: 'col-span-12 xl:col-span-12', props: data[reeferSize].weight }}
      openDoor={{ divClassName: 'col-span-12 xl:col-span-6', props: data[reeferSize].openDoor }}
      insideDimensions={{
        divClassName: 'col-span-12 xl:col-span-6',
        props: data[reeferSize].insideDimensions,
      }}
      buttons={[
        {
          label: "20' Reefer",
          className: 'max-w-[130px]',
          isActive: reeferSize === "20' Reefer",
          onClick: () => setReeferSize("20' Reefer"),
        },
        {
          label: "40' Reefer High Cube",
          className: 'max-w-[250px]',
          isActive: reeferSize === "40' Reefer High Cube",
          onClick: () => setReeferSize("40' Reefer High Cube"),
        },
      ]}
    />
  )
}
