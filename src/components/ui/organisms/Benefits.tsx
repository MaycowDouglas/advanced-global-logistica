import 'swiper/css'

import { t, Trans } from '@lingui/macro'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper/types'

import ImageBenefitsAdvancedBoxes from '@/public/images/benefits-advanced-boxes.jpg'
import ImageBenefitsAirplane from '@/public/images/benefits-airplane.jpg'
import ImageBenefitsCallings from '@/public/images/benefits-calling.jpg'
import ImageBenefitsHandshake from '@/public/images/benefits-handshake.jpg'
import { classNames } from '@/utils'

const benefits = [
  {
    image: ImageBenefitsAirplane,
    title: (
      <>
        <Trans>
          TRANSPORTE INTERNACIONAL <br />{' '}
          <span className="text-green-light-300">ÁGIL E SEGURO</span>
        </Trans>
      </>
    ),
    description: (
      <p className="text-sm lg:text-base">
        <Trans>
          Proporcionamos soluções em logística eficientes e personalizadas, para que a mercadoria
          chegue ao local estipulado de forma rápida e segura.
        </Trans>
      </p>
    ),
  },
  {
    image: ImageBenefitsCallings,
    title: (
      <>
        <Trans>
          ATENDIMENTO <br /> <span className="text-green-light-300">PERSONALIZADO</span>
        </Trans>
      </>
    ),
    description: (
      <p className="text-sm lg:text-base">
        <Trans>
          O mundo digital vem se tornando cada vez mais atual, e a Advance Global Logística entende
          que se faz necessário acompanhar essas mudanças, mas mantendo o atendimento personalizado
          com dinamismo, dedicação e cuidados que o seu negócio requer.
        </Trans>
      </p>
    ),
  },
  {
    image: ImageBenefitsHandshake,
    title: (
      <>
        <Trans>
          MENOS BUROCRACIA, <br /> <span className="text-green-light-300">MAIS SATISFAÇÃO</span>
        </Trans>
      </>
    ),
    description: (
      <p className="text-sm lg:text-base">
        <Trans>
          Nosso time é composto por profissionais capacitados e renomados, aptos a auxiliá-lo na
          tomada de decisão.
        </Trans>
      </p>
    ),
  },
  {
    image: ImageBenefitsAdvancedBoxes,
    title: (
      <>
        <Trans>
          MELHOR <br /> <span className="text-green-light-300">CUSTO-BENEFÍCIO</span>
        </Trans>
      </>
    ),
    description: (
      <p className="text-sm lg:text-base">
        <Trans>
          Oferecemos, com excelência, serviços logísticos no âmbito internacional, door-to-door, com
          valor justo e vantajoso. Possuímos sistema automatizado, com atualização e envio diário do
          status do seu processo.
        </Trans>
      </p>
    ),
  },
]

export default function Benefits() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)

  return (
    <Swiper spaceBetween={50} slidesPerView={1} onSwiper={(swiper) => setSwiper(swiper)}>
      {benefits.map((benefit, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className={classNames(
                'relative p-10 pb-32 md:pb-10 md:px-20 xl:px-28 xl:py-16 grow',
                'grid grid-cols-1 md:grid-cols-2 items-center gap-10 xl:gap-20 bg-neutral-200'
              )}
            >
              <div className="relative h-52 xl:h-96 overflow-hidden rounded-2xl">
                <Image src={benefit.image} fill className="object-cover object-center" alt="" />
              </div>
              <div>
                <p className="text-base lg:text-lg text-blue-300 font-bold text uppercase">
                  <Trans>VANTAGENS</Trans>
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold uppercase mt-3 mb-4">
                  {benefit.title}
                </h3>
                {benefit.description}
              </div>

              {swiper && (
                <>
                  <button
                    onClick={() => swiper.slidePrev()}
                    className="absolute z-20 right-20 md:left-5 md:right-auto bottom-5 md:top-1/2 md:bottom-auto md:-translate-y-1/2 p-3 xl:p-4 bg-green-light-400 text-white"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() => swiper.slideNext()}
                    className="absolute z-20 right-5 bottom-5 md:top-1/2 md:-translate-y-1/2 md:bottom-auto p-3 xl:p-4 bg-green-light-400 text-white"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
