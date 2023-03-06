import { t, Trans } from '@lingui/macro'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

import TemplateDefault from '@/components/templates/Default'
import { Container } from '@/components/ui/atoms/Container'
import { Content } from '@/components/ui/atoms/Content'
import Benefits from '@/components/ui/organisms/Benefits'
import Containers from '@/components/ui/organisms/Containers'
import ContainersDetails from '@/components/ui/organisms/ContainersDetails'
import Services from '@/components/ui/organisms/Services'
import BgHero from '@/public/images/backgrounds/bg-home-hero.jpg'
import BrandExchange from '@/public/images/brands/exchange.png'
import ImageContainer from '@/public/images/container.jpg'
import ImageCoupleTalking from '@/public/images/couple-talking.jpg'
import FlagEUA from '@/public/images/flags/eua.png'
import FlagGBR from '@/public/images/flags/gbr.png'
import FlagUSA from '@/public/images/flags/usa.png'
import ImageGlobal from '@/public/images/global.jpg'
import { classNames } from '@/utils'
import { loadTranslation } from '@/utils/lingui'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!, process.env.NODE_ENV === 'production')

  return {
    props: {
      translation,
    },
  }
}

export default function Home() {
  const [overlay, setOverlay] = useState(false)
  const [container, setContainer] = useState<
    'Flatrack' | 'OpenTop' | 'Plataform' | 'Reefer' | 'Standard' | null
  >(null)

  function handleContainer() {
    setOverlay(false)
    setContainer(null)
  }

  return (
    <TemplateDefault title="" description="">
      <Head>
        <title>Advanced Global</title>
        <meta name="description" content="" />
      </Head>

      {overlay && (
        <div
          onClick={handleContainer}
          className="absolute z-40 top-0 left-0 right-0 bottom-0 bg-black-70"
        ></div>
      )}

      <div
        className={classNames(
          container ? 'block' : 'hidden',
          'fixed top-5 left-1/2 -translate-x-1/2 z-50 w-11/12 xl:w-10/12 h-screen py-14 px-5 rounded-lg bg-neutral-100 overflow-scroll overflow-x-hidden'
        )}
      >
        <button
          className="absolute right-5 top-5 gap-2 flex items-center text-xl text-green-light-400"
          onClick={handleContainer}
        >
          <FaTimes />
          Fechar
        </button>

        <ContainersDetails name={container} />
      </div>

      <section>
        <video src="/videos/coverr.mp4" muted autoPlay loop></video>
      </section>
      <section id={`sobre-nos`}>
        <Container>
          <Content className="py-20 grid grid-cols-1 md:grid-cols-2 md:items-center gap-10 lg:gap-20">
            <div className="order-first md:order-last">
              <Image src={ImageContainer} className="rounded-2xl" alt="" priority />
            </div>
            <div className="text-center md:text-left">
              <h2 className="mb-5 font-bold text-blue-300 text-3xl lg:text-5xl">
                <Trans>Quem Somos</Trans>
              </h2>
              <p className="text-sm lg:text-base">
                <Trans>
                  Fundada em 2019, a Advance Global Logística está localizada em São Paulo, Capital
                  e atua no agenciamento do transporte internacional aéreo, marítimo e rodoviário de
                  cargas, nos principais portos e aeroportos do Brasil; e, apresentando soluções
                  personalizadas e que melhor se adequam às necessidades do seu negócios.
                </Trans>
              </p>
            </div>
          </Content>
        </Container>
      </section>
      <section></section>
      <section id={`servicos`} className="bg-blue-300 text-white">
        <Container className="py-10">
          <Content>
            <div className="text-center md:w-2/3 md:mx-auto">
              <h2 className="mb-6 text-3xl lg:text-5xl text-green-light-300 font-bold uppercase">
                <Trans>Nossos Serviços</Trans>
              </h2>
              <p className="text-sm lg:text-base text-neutral-200">
                <Trans>
                  Conheças nossos principais serviços e veja como podemos ajudá-lo no transporte
                  internacional de cargas e logistica.
                </Trans>
              </p>
            </div>
            <Services />
          </Content>

          <Content>
            <div className="text-center md:w-2/3 md:mx-auto">
              <h3 className="mb-6 text-3xl md:text-5xl md:leading-tight text-green-light-300 font-bold uppercase">
                <Trans>Conheça os tipos de contêiners</Trans>
              </h3>
              <p className="text-sm lg:text-base mb-10">
                <Trans>
                  As especificações fornecidas aqui servem apenas como exemplo, pois os contêineres
                  variam de acordo com o fabricante. Se sua empresa tiver requisitos especiais
                  relacionados a sua remessa, solicitamos que entre em contato conosco.
                </Trans>
              </p>
            </div>

            <Containers setOverlay={setOverlay} setContainer={setContainer} />
          </Content>
        </Container>
      </section>
      <section className="bg-[linear-gradient(180deg,_hsla(201,93%,11%,1),_60%,hsla(0,0%,100%,1)_60%)]">
        <Container>
          <Content className="py-20 grid grid-cols-1 md:grid-cols-2 md:items-center gap-10 lg:gap-32">
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-green-light-300 text-3xl lg:text-5xl font-bold uppercase">
                <Trans>Fechamento de Câmbio</Trans>
              </h2>
              <p className="mb-8 lg:mb-16 text-sm lg:text-base text-white">
                <Trans>
                  Para facilitar e viabilizar acordos comerciais de forma prática e ágil, atuamos em
                  parceria com a Exchange corretora de câmbios, cujo time operacional encontra-se
                  disponível para ajudá-lo nas operações de compra e venda de moedas estrangeiras
                  com maior previsibilidade.
                </Trans>
              </p>
              <h3 className="mb-6 text-xl lg:text-3xl text-white md:text-blue-300 font-bold">
                <Trans>Principais moedas:</Trans>
              </h3>
              <ul className="flex gap-6 text-white md:text-blue-300">
                <li className="flex flex-col xl:flex-row items-center gap-2">
                  <Image className="w-8 h-auto" src={FlagUSA} alt="" /> <strong>Dólar (USD)</strong>
                </li>
                <li className="flex flex-col xl:flex-row items-center gap-2">
                  <Image className="w-8 h-auto" src={FlagEUA} alt="" /> <strong>Euro (EUR)</strong>
                </li>
                <li className="flex flex-col xl:flex-row items-center gap-2">
                  <Image className="w-8 h-auto" src={FlagGBR} alt="" /> <strong>Libra (GBP)</strong>
                </li>
              </ul>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden">
                <div className="relative w-full h-60">
                  <Image
                    fill
                    alt=""
                    src={ImageCoupleTalking}
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col items-center gap-5 p-6 lg:p-10 bg-neutral-200">
                  <Image src={BrandExchange} alt="" />
                  <p className="text-center">
                    <Trans>
                      Todas as nossas soluções são pensadas para atender seus compromissos e os de
                      sua empresa em moeda estrangeira.
                    </Trans>
                  </p>
                  <a
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-green-light-200 font-bold uppercase rounded shadow-lg"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Trans>
                      Saiba Mais <FiChevronRight />
                    </Trans>
                  </a>
                </div>
              </div>
            </div>
          </Content>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <Benefits />
        </Container>
      </section>
      {/* <section className="bg-blue-300 py-10 lg:py-20">
        <Container>
          <Content>
            <h2 className="mb-4 text-green-light-300 text-3xl lg:text-5xl font-bold uppercase">
              Blog
            </h2>
          </Content>
        </Container>
      </section> */}
      <section id={t`contato`}>
        <Container className="md:grid md:grid-cols-2 md:items-center lg:grid-cols-3">
          <div className="relative h-96 md:h-[600px] rounded overflow-hidden">
            <Image src={ImageGlobal} fill className="object-cover object-right" alt="" />
          </div>
          <div className="px-6 py-8 md:py-0 lg:px-14 lg:col-span-2">
            <h2 className="text-blue-300 text-3xl lg:text-5xl font-bold uppercase">
              <Trans>Entre em contato</Trans>
            </h2>
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              <div className="flex flex-col">
                <label htmlFor="nome" className="text-blue-300 font-bold uppercase">
                  <Trans>
                    Seu Nome <span className="text-red-300">*</span>
                  </Trans>
                </label>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder={t`Digite seu nome`}
                  className="outline-none border border-neutral-400 rounded mt-1 p-3 focus:border-2 focus:border-green-light-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-blue-300 font-bold uppercase">
                  <Trans>Seu Email</Trans>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={t`Digite seu email`}
                  className="outline-none border border-neutral-400 rounded mt-1 p-3 focus:border-2 focus:border-green-light-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="telefone" className="text-blue-300 font-bold uppercase">
                  <Trans>Seu Telefone</Trans>
                </label>
                <input
                  id="telefone"
                  type="text"
                  name="telefone"
                  placeholder={t`Digite seu telefone`}
                  className="outline-none border border-neutral-400 rounded mt-1 p-3 focus:border-2 focus:border-green-light-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="telefone" className="text-blue-300 font-bold uppercase">
                  <Trans>Assunto</Trans>
                </label>
                <input
                  id="assunto"
                  type="text"
                  name="assunto"
                  placeholder={t`Qual é o motivo do contato?`}
                  className="outline-none border border-neutral-400 rounded mt-1 p-3 focus:border-2 focus:border-green-light-400"
                />
              </div>
              <div className="flex flex-col lg:col-span-2">
                <label htmlFor="mensagem" className="text-blue-300 font-bold uppercase">
                  <Trans>Mensagem</Trans>
                </label>
                <textarea
                  id="messagem"
                  name="messagem"
                  placeholder={t`Digite sua mensagem`}
                  className="outline-none border border-neutral-400 rounded mt-1 p-3 focus:border-2 focus:border-green-light-400"
                />
              </div>
              <div className="hidden lg:block"></div>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-green-light-200 font-bold uppercase rounded shadow-lg">
                <Trans>Enviar Mensagem</Trans>
              </button>
            </form>
          </div>
        </Container>
      </section>
    </TemplateDefault>
  )
}
