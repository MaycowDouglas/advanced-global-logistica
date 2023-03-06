import { Dispatch, SetStateAction } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardContainer from '@/components/ui/molecules/CardContainer'
import ImageContainerFlatrack from '@/public/images/containers/flatrack.jpg'
import ImageContainerOpenTop from '@/public/images/containers/open-top.jpg'
import ImageContainerPlataform from '@/public/images/containers/plataform.jpg'
import ImageContainerReefer from '@/public/images/containers/reefer.jpg'
import ImageContainerStandard from '@/public/images/containers/standard.jpg'

type Props = {
  setOverlay: Dispatch<SetStateAction<boolean>>
  setContainer: Dispatch<
    SetStateAction<'Flatrack' | 'OpenTop' | 'Plataform' | 'Reefer' | 'Standard' | null>
  >
}

export default function Containers({ setOverlay, setContainer }: Props) {
  function handleContainer(
    container: 'Flatrack' | 'OpenTop' | 'Plataform' | 'Reefer' | 'Standard' | null
  ) {
    setOverlay(true)
    setContainer(container)
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView="auto"
      className="hover:cursor-grab active:cursor-grabbing"
    >
      <SwiperSlide className="max-w-[300px] flex justify-center">
        <CardContainer
          name="Standard"
          image={{ src: ImageContainerStandard, alt: '' }}
          onClick={() => handleContainer('Standard')}
        />
      </SwiperSlide>
      <SwiperSlide className="max-w-[300px] flex justify-center">
        <CardContainer
          name="Flatrack"
          image={{ src: ImageContainerFlatrack, alt: '' }}
          onClick={() => handleContainer('Flatrack')}
        />
      </SwiperSlide>
      <SwiperSlide className="max-w-[300px] flex justify-center">
        <CardContainer
          name="Plataform"
          image={{ src: ImageContainerPlataform, alt: '' }}
          onClick={() => handleContainer('Plataform')}
        />
      </SwiperSlide>
      <SwiperSlide className="max-w-[300px] flex justify-center">
        <CardContainer
          name="OpenTop"
          image={{ src: ImageContainerOpenTop, alt: '' }}
          onClick={() => handleContainer('OpenTop')}
        />
      </SwiperSlide>
      <SwiperSlide className="max-w-[300px] flex justify-center">
        <CardContainer
          name="Reefer"
          image={{ src: ImageContainerReefer, alt: '' }}
          onClick={() => handleContainer('Reefer')}
        />
      </SwiperSlide>
    </Swiper>
  )
}
