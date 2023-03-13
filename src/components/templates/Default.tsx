import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import ButtonWhatsapp from '@/components/ui/atoms/ButtonWhatsapp'
import Footer from '@/components/ui/organisms/Footer'
import Navbar from '@/components/ui/organisms/Navbar'

type Props = {
  title: string
  description: string
  children: ReactNode
}

export default function TemplateDefault({ title, description, children }: Props) {
  const { locale } = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="relative">
        <Navbar />
        {children}
        {locale === 'pt' && <ButtonWhatsapp phone="+551159903261" />}
        <Footer />
      </div>
    </>
  )
}
