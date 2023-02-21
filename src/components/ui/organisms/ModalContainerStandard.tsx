import { Trans } from '@lingui/macro'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import ModalContainer from '@/components/templates/ModalContainer'
import ContainerModalButton from '@/components/ui/atoms/ContainerModalButton'
import ImageContainerStandard from '@/public/images/containers/standard.jpg'

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

type StandardSize = "20' Standard" | "40' Standard" | "40' Standard High Cube"

export default function ModalContainerStandard({ data }: Props) {
  const [standardSize, setStandardSize] = useState<StandardSize>("20' Standard")
  return (
    <ModalContainer
      title="Standard"
      image={ImageContainerStandard}
      capacity={data[standardSize].capacity}
      sizeGroup={data[standardSize].sizeGroup}
      typeGroup={data[standardSize].typeGroup}
      weight={{ divClassName: 'col-span-12 xl:col-span-12', props: data[standardSize].weight }}
      openDoor={{ divClassName: 'col-span-12 xl:col-span-6', props: data[standardSize].openDoor }}
      insideDimensions={{
        divClassName: 'col-span-12 xl:col-span-6',
        props: data[standardSize].insideDimensions,
      }}
      buttons={[
        {
          label: "20' Standard",
          className: 'max-w-[150px]',
          isActive: standardSize === "20' Standard",
          onClick: () => setStandardSize("20' Standard"),
        },
        {
          label: "40' Standard",
          className: 'max-w-[150px]',
          isActive: standardSize === "40' Standard",
          onClick: () => setStandardSize("40' Standard"),
        },
        {
          label: "40' Standard High Cube",
          className: 'max-w-[250px]',
          isActive: standardSize === "40' Standard High Cube",
          onClick: () => setStandardSize("40' Standard High Cube"),
        },
      ]}
    />
  )
}

// ;<div className="bg-neutral-200 p-5 mt-5 space-y-2">
//   <p className="text-sm">
//     <strong>
//       <Trans>Capacidade:</Trans>
//     </strong>
//     {data.capacity}
//   </p>
//   <p className="text-sm">
//     <strong>
//       <Trans>ISO Type Group:</Trans>
//     </strong>
//     {data.typeGroup}
//   </p>
//   <p className="text-sm">
//     <strong>
//       <Trans>ISO Size Type:</Trans>
//     </strong>
//     <span>{data.sizeGroup}</span>
//   </p>
// </div>
