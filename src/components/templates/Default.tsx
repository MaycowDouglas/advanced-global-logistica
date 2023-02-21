import Head from 'next/head'
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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="relative">
        <Navbar />
        {children}
        <ButtonWhatsapp phone="" message="" />
        <Footer />
      </div>
    </>
  )
}
