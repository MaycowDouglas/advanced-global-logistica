import 'swiper/css'

import { t, Trans } from '@lingui/macro'
import { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper/types'

import ServicesNavigation from '@/components/ui/molecules/ServicesNavigation'
import SideBySide from '@/components/ui/molecules/SideBySide'
import ImageServiceConsultancy from '@/public/images/service-consultancy.jpg'
import ImageServicePlane from '@/public/images/service-plane.jpg'
import ImageServiceShip from '@/public/images/service-ship.jpg'
import ImageServiceTruck from '@/public/images/service-truck.jpg'

import ServiceIcons from '../atoms/ServiceIcons'

type Sevice = {
  id: number
  name: string
  icon: 'ship' | 'airplane' | 'truck' | 'consultancy'
  image: StaticImageData
  description: string
}

export const servicesData: Sevice[] = [
  {
    id: 0,
    name: t`Marítimo Internacional`,
    icon: 'ship',
    image: ImageServiceShip,
    description: t`Transportamos sua carga nas diversas modalidades do marítimo, tais como FCL, LCL, breakbulk, cargas projeto (heavy lift), granel ou carga rolante/veículos (Ro-Ro).`,
  },
  {
    id: 1,
    name: t`Aéreo Internacional`,
    icon: 'airplane',
    image: ImageServicePlane,
    description: t`Consolidamos e embarcamos sua carga por via aérea, auxiliando-o nos trâmites burocráticos e trazendo maior tranquilidade para sua empresa.`,
  },
  {
    id: 2,
    name: t`Rodoviário Internacional`,
    icon: 'truck',
    image: ImageServiceTruck,
    description: t`Atuamos na rota Brasil/países da América do Sul, no transporte de cargas fracionadas (LTL) ou transporte dedicado (FTL).`,
  },
  {
    id: 3,
    name: t`Consultoria`,
    icon: 'consultancy',
    image: ImageServiceConsultancy,
    description: t`Se sua empresa necessita de consultoria e assessoria nos assuntos relacionados ao comércio internacional na importação e/ou  exportação, a Advance Global está à disposição para atendê-lo, inclusive no desembaraço aduaneiro, fechamento de câmbio e seguro internacional de cargas.`,
  },
]

export default function Services() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)
  const [active, setActive] = useState<number>(0)

  useEffect(() => {
    if (swiper !== null && typeof swiper?.activeIndex === 'number') {
      swiper.slideTo(active)
    }
  }, [active, swiper])

  return (
    <>
      <ServicesNavigation active={active} setActive={setActive} />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActive(swiper.activeIndex)}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        <SwiperSlide className="py-20">
          <SideBySide image={{ src: ImageServiceShip, alt: '' }}>
            <h3 className="mb-4 lg:mb-6 text-lg lg:text-4xl font-bold uppercase">
              <Trans>Marítimo Internacional</Trans>
            </h3>
            <p className="text-sm lg:text-base">
              <Trans>
                Transportamos sua carga nas diversas modalidades do marítimo, tais como FCL, LCL,
                breakbulk, cargas projeto (heavy lift), granel ou carga rolante/veículos (Ro-Ro).
              </Trans>
            </p>
          </SideBySide>
        </SwiperSlide>
        <SwiperSlide className="py-20">
          <SideBySide image={{ src: ImageServicePlane, alt: '' }}>
            <h3 className="mb-4 lg:mb-6 text-lg lg:text-4xl font-bold uppercase">
              <Trans>Aéreo Internacional</Trans>
            </h3>
            <p className="text-sm lg:text-base">
              <Trans>
                Consolidamos e embarcamos sua carga por via aérea, auxiliando-o nos trâmites
                burocráticos e trazendo maior tranquilidade para sua empresa.
              </Trans>
            </p>
          </SideBySide>
        </SwiperSlide>
        <SwiperSlide className="py-20">
          <SideBySide image={{ src: ImageServiceTruck, alt: '' }}>
            <h3 className="mb-4 lg:mb-6 text-lg lg:text-4xl font-bold uppercase">
              <Trans>Rodoviário Internacional</Trans>
            </h3>
            <p className="text-sm lg:text-base">
              <Trans>
                Atuamos na rota Brasil/países da América do Sul, no transporte de cargas fracionadas
                (LTL) ou transporte dedicado (FTL).
              </Trans>
            </p>
          </SideBySide>
        </SwiperSlide>
        <SwiperSlide className="py-20">
          <SideBySide image={{ src: ImageServiceConsultancy, alt: '' }}>
            <h3 className="mb-4 lg:mb-6 text-lg lg:text-4xl font-bold uppercase">
              <Trans>Consultoria</Trans>
            </h3>
            <p className="text-sm lg:text-base">
              <Trans>
                Se sua empresa necessita de consultoria e assessoria nos assuntos relacionados ao
                comércio internacional na importação e/ou exportação, a Advance Global está à
                disposição para atendê-lo, inclusive no desembaraço aduaneiro, fechamento de câmbio
                e seguro internacional de cargas.
              </Trans>
            </p>
          </SideBySide>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
