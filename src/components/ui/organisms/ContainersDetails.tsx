import 'swiper/css'

import ModalContainerFlatRack from '@/components/ui/organisms/ModalContainerFlatrack'
import ModalContainerOpenTop from '@/components/ui/organisms/ModalContainerOpenTop'
import ModalContainerPlataform from '@/components/ui/organisms/ModalContainerPlataform'
import ModalContainerReefer from '@/components/ui/organisms/ModalContainerReefer'
import ModalContainerStandard from '@/components/ui/organisms/ModalContainerStandard'
import { containerData } from '@/utils/containersData'

type Props = {
  name: 'Flatrack' | 'OpenTop' | 'Plataform' | 'Reefer' | 'Standard' | null
}

export default function ContainersDetails({ name }: Props) {
  switch (name) {
    case 'Flatrack':
      return <ModalContainerFlatRack data={containerData.flatrack} />
    case 'OpenTop':
      return <ModalContainerOpenTop data={containerData.openTop} />
    case 'Plataform':
      return <ModalContainerPlataform data={containerData.plataform} />
    case 'Reefer':
      return <ModalContainerReefer data={containerData.refeer} />
    case 'Standard':
      return <ModalContainerStandard data={containerData.standard} />
    default:
      return <></>
  }
}

// import 'swiper/css'

// import { Trans } from '@lingui/macro'
// import Image, { StaticImageData } from 'next/image'
// import { useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'

// import ImageContainerFlatrack from '@/public/images/containers/flatrack.jpg'
// import ImageContainerOpenTop from '@/public/images/containers/open-top.jpg'
// import ImageContainerPlataform from '@/public/images/containers/plataform.jpg'
// import ImageContainerReefer from '@/public/images/containers/reefer.jpg'
// import ImageContainerStandard from '@/public/images/containers/standard.jpg'
// import { classNames } from '@/utils'
// import { constainerData, containerData } from '@/utils/containersData'

// import ModalContainerFlatRack from './ModalContainerFlatrack'

// type Props = {
//   name: 'Flatrack' | 'OpenTop' | 'Plataform' | 'Reefer' | 'Standard' | null
// }

// type ImageProps = {
//   [index: string]: StaticImageData
// }

// const images: ImageProps = {
//   Flatrack: ImageContainerFlatrack,
//   OpenTop: ImageContainerOpenTop,
//   Plataform: ImageContainerPlataform,
//   Reefer: ImageContainerReefer,
//   Standard: ImageContainerStandard,
// }

// type FlatrackSize = "20' Flatrack" | "40' Flatrack High Cube"
// type OpenTopSize = "20' Open Top" | "40' Open Top" | "40' Open Top High Cube"
// type PlataformSize = "20' Plataform" | "40' Plataform"
// type ReeferSize = "20' Reefer" | "40' Reefer High Cube"
// type StandardSize = "20' Standard" | "40' Standard" | "40' Standard High Cube"

// export default function ContainersDetails({ name }: Props) {
//   const [flatrackSize, setFlatrackSize] = useState<FlatrackSize>("20' Flatrack")
//   const [openTopSize, setOpenTopSize] = useState<OpenTopSize>("20' Open Top")
//   const [plataformSize, setPlataformSize] = useState<PlataformSize>("20' Plataform")
//   const [reeferSize, setReeferSize] = useState<ReeferSize>("20' Reefer")
//   const [standardSize, setStandardSize] = useState<StandardSize>("20' Standard")

//   switch (name) {
//     case 'Flatrack':
//       return <ModalContainerFlatRack data={containerData.flatrack} />
//     case 'OpenTop':
//       return (
//         <div className="space-y-5">
//           <div className="grid grid-cols-1 gap-10">
//             <div>
//               <h2 className="text-2xl text-blue-300 font-bold mb-5">{name}</h2>
//               <Image src={images[name]} alt="" />
//             </div>
//             <div>
//               <h3 className="text-xl text-blue-300 font-bold">
//                 <Trans>Selecione um tamanho:</Trans>
//               </h3>
//               <Swiper className="mt-3">
//                 <SwiperSlide className="max-w-[150px]">
//                   <button
//                     onClick={() => setOpenTopSize("20' Open Top")}
//                     className={classNames(
//                       openTopSize === "20' Open Top" ? 'bg-green-light-300' : 'bg-transparent',
//                       'px-4 py-1 rounded-full border-2 border-green-light-300 font-bold uppercase'
//                     )}
//                   >
//                     20&apos; Open Top
//                   </button>
//                 </SwiperSlide>
//                 <SwiperSlide className="max-w-[150px]">
//                   <button
//                     onClick={() => setOpenTopSize("40' Open Top")}
//                     className={classNames(
//                       openTopSize === "40' Open Top" ? 'bg-green-light-300' : 'bg-transparent',
//                       'px-4 py-1 rounded-full border-2 border-green-light-300 font-bold uppercase'
//                     )}
//                   >
//                     40&apos; Open Top
//                   </button>
//                 </SwiperSlide>
//                 <SwiperSlide className="max-w-[230px]">
//                   <button
//                     onClick={() => setOpenTopSize("40' Open Top High Cube")}
//                     className={classNames(
//                       openTopSize === "40' Open Top High Cube"
//                         ? 'bg-green-light-300'
//                         : 'bg-transparent',
//                       'px-4 py-1 rounded-full border-2 border-green-light-300 font-bold uppercase'
//                     )}
//                   >
//                     40&apos; Open Top High Cube
//                   </button>
//                 </SwiperSlide>
//               </Swiper>
//               <div className="bg-neutral-200 p-5 mt-5 space-y-2">
//                 <p className="text-sm">
//                   <strong>
//                     <Trans>Capacidade:</Trans>
//                   </strong>{' '}
//                   {constainerData.openTop[openTopSize].capacity}
//                 </p>
//                 <p className="text-sm">
//                   <strong>
//                     <Trans>ISO Type Group:</Trans>
//                   </strong>{' '}
//                   {constainerData.openTop[openTopSize].typeGroup}
//                 </p>
//                 <p className="text-sm">
//                   <strong>
//                     <Trans>ISO Size Type:</Trans>
//                   </strong>{' '}
//                   {constainerData.openTop[openTopSize].sizeGroup}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg text-blue-300 font-bold mb-5">
//               <Trans>Dimensões internas</Trans>
//             </h3>

//             <div className="grid grid-cols-2 gap-5">
//               <div className="p-3 space-y-2 bg-neutral-200 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Medida</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>Milímetros</Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Comprimento</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>
//                       {constainerData.openTop[openTopSize].insideDimensions.milimeters.length}
//                     </Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Largura</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>
//                       {constainerData.openTop[openTopSize].insideDimensions.milimeters.width}
//                     </Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Altura</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>
//                       {constainerData.openTop[openTopSize].insideDimensions.milimeters.height}
//                     </Trans>
//                   </p>
//                 </div>
//               </div>
//               <div className="p-3 space-y-2 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Medida</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>Pés</Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Comprimento</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>
//                       {constainerData.openTop[openTopSize].insideDimensions.feet.length}
//                     </Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Largura</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>{constainerData.openTop[openTopSize].insideDimensions.feet.width}</Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Altura</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>
//                       {constainerData.openTop[openTopSize].insideDimensions.feet.height}
//                     </Trans>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg text-blue-300 font-bold mb-5">
//               <Trans>Peso</Trans>
//             </h3>

//             <div className="grid grid-cols-2 gap-5">
//               <div className="p-3 space-y-2 bg-neutral-200 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Medida</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>Quilogramas</Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Bruto Máximo</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>{constainerData.flatrack[flatrackSize].weight.kilograms.maxGross}</Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Tara (Peso)</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>
//                       {constainerData.flatrack[flatrackSize].weight.kilograms.tareWeight}
//                     </Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Carga útil máxima</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>
//                       {constainerData.flatrack[flatrackSize].weight.kilograms.maxPayload}
//                     </Trans>
//                   </p>
//                 </div>
//               </div>
//               <div className="p-3 space-y-2 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Medida</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>Libras</Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Bruto Máximo</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>{constainerData.flatrack[flatrackSize].weight.pounds.maxPayload}</Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Tara (Peso)</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>{constainerData.flatrack[flatrackSize].weight.pounds.tareWeight}</Trans>
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-sm">
//                     <Trans>Carga útil máxima</Trans>
//                   </h4>
//                   <p className="text-sm">
//                     <Trans>{constainerData.flatrack[flatrackSize].weight.pounds.maxPayload}</Trans>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     case 'Plataform':
//       return (
//         <>
//           <div>
//             <div>
//               <h2 className="text-2xl text-blue-300 font-bold">{name}</h2>
//               <Image src={images[name]} alt="" />
//             </div>
//             <div>
//               <h3 className="text-xl text-blue-300 font-bold">
//                 <Trans>Selecione um tamanho</Trans>
//               </h3>
//               <Swiper></Swiper>
//               <div>
//                 <p>
//                   <strong></strong>
//                 </p>
//                 <p>
//                   <strong></strong>
//                 </p>
//                 <p>
//                   <strong></strong>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div></div>
//           <div></div>
//         </>
//       )
//     case 'Reefer':
//       return (
//         <>
//           <div>
//             <div>
//               <h2 className="text-2xl text-blue-300 font-bold">{name}</h2>
//               <Image src={images[name]} alt="" />
//             </div>
//             <div>
//               <h3 className="text-xl text-blue-300 font-bold">
//                 <Trans>Selecione um tamanho</Trans>
//               </h3>
//               <Swiper></Swiper>
//               <div>
//                 <p>
//                   <strong></strong>
//                 </p>
//                 <p>
//                   <strong></strong>
//                 </p>
//                 <p>
//                   <strong></strong>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div></div>
//           <div></div>
//         </>
//       )
//     case 'Standard':
//       return (
//         <>
//           <div>
//             <div>
//               <h2 className="text-2xl text-blue-300 font-bold">{name}</h2>
//               <Image src={images[name]} alt="" />
//             </div>
//             <div>
//               <h3 className="text-xl text-blue-300 font-bold">
//                 <Trans>Selecione um tamanho</Trans>
//               </h3>
//               <Swiper></Swiper>
//               <div>
//                 <p>
//                   <strong></strong>
//                 </p>
//                 <p>
//                   <strong></strong>
//                 </p>
//                 <p>
//                   <strong></strong>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div></div>
//           <div></div>
//         </>
//       )

//     default:
//       return <></>
//   }
// }
