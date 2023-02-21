import { Trans } from '@lingui/macro'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import ModalContainer from '@/components/templates/ModalContainer'
import ContainerModalButton from '@/components/ui/atoms/ContainerModalButton'
import ImageContainerOpenTop from '@/public/images/containers/open-top.jpg'

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
        noRoofBars?: {
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
      openRoof: {
        feet: {
          width: string
          length: string
        }
        millimeters: {
          width: string
          length: string
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

type OpenTopSize = "20' Open Top" | "40' Open Top" | "40' Open Top High Cube"

export default function ModalContainerOpenTop({ data }: Props) {
  const [openTopSize, setOpenTopSize] = useState<OpenTopSize>("20' Open Top")
  return (
    <ModalContainer
      title="Open Top"
      image={ImageContainerOpenTop}
      capacity={data[openTopSize].capacity}
      sizeGroup={data[openTopSize].sizeGroup}
      typeGroup={data[openTopSize].typeGroup}
      weight={{ divClassName: 'col-span-12 xl:col-span-6', props: data[openTopSize].weight }}
      openDoor={{ divClassName: 'col-span-12 xl:col-span-6', props: data[openTopSize].openDoor }}
      openRoof={{ divClassName: 'col-span-12 xl:col-span-6', props: data[openTopSize].openRoof }}
      insideDimensions={{
        divClassName: 'col-span-12 xl:col-span-6',
        props: data[openTopSize].insideDimensions,
      }}
      buttons={[
        {
          label: "20' Open Top",
          className: 'max-w-[150px]',
          isActive: openTopSize === "20' Open Top",
          onClick: () => setOpenTopSize("20' Open Top"),
        },
        {
          label: "40' Open Top",
          className: 'max-w-[150px]',
          isActive: openTopSize === "40' Open Top",
          onClick: () => setOpenTopSize("40' Open Top"),
        },
        {
          label: "40' Open Top High Cube",
          className: 'max-w-[250px]',
          isActive: openTopSize === "40' Open Top High Cube",
          onClick: () => setOpenTopSize("40' Open Top High Cube"),
        },
      ]}
    />
  )
}
