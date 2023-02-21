import { t, Trans } from '@lingui/macro'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { HiMenu } from 'react-icons/hi'

import { Container } from '@/components/ui/atoms/Container'
import BrandAdvancedGlobal from '@/public/images/brands/advanced-global-logistica.png'
import FlagBRA from '@/public/images/flags/bra.png'
import FlagUSA from '@/public/images/flags/usa.png'
import { classNames } from '@/utils'

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setOpen] = useState(false)
  const { locale: activeLocale, pathname, query, asPath } = router

  return (
    <nav>
      <div
        onClick={() => setOpen(false)}
        className={classNames(
          isOpen ? '' : 'hidden',
          'absolute z-20 top-14 right-0 bottom-0 left-0 bg-black-70'
        )}
      ></div>
      <Container className="z-20">
        <div className="flex items-center lg:items-center py-3 justify-between">
          <Image src={BrandAdvancedGlobal} alt="" />
          <button className="text-2xl lg:hidden" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <FiX /> : <HiMenu />}
          </button>

          <ul className="hidden lg:flex">
            <li className="px-4 uppercase">
              <Link href={t`#sobre-nos`} className="hover:text-green-light-400">
                <Trans>Sobre Nós</Trans>
              </Link>
            </li>
            <li className="px-4 uppercase">
              <Link href={t`#servicos`} className="hover:text-green-light-400">
                <Trans>Nossos Serviços</Trans>
              </Link>
            </li>
            <li className="px-4 uppercase">
              <Link href={t`#blog`} className="hover:text-green-light-400">
                <Trans>Blog</Trans>
              </Link>
            </li>
            <li className="px-4 uppercase">
              <Link href={t`#contato`} className="hover:text-green-light-400">
                <Trans>Contato</Trans>
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex gap-3">
            <Link href={{ pathname, query }} as={asPath} locale="pt">
              <Image
                className={classNames(activeLocale === 'pt' ? '' : 'opacity-50', 'w-auto h-6')}
                src={FlagBRA}
                alt=""
              />
            </Link>
            <Link href={{ pathname, query }} as={asPath} locale="en">
              <Image
                className={classNames(activeLocale === 'en' ? '' : 'opacity-50', 'w-auto h-6')}
                src={FlagUSA}
                alt=""
              />
            </Link>
          </div>

          <div
            className={classNames(
              isOpen ? 'h-auto px-4 py-10' : 'h-0 overflow-hidden',
              'absolute left-0 right-0 top-14 bg-white rounded-b-xl transition-all',
              'lg:hidden'
            )}
          >
            <ul>
              <li className="py-4 border-b-2 uppercase">
                <Link href="#about" as={t`#sobre-nos`}>
                  <Trans>Sobre Nós</Trans>
                </Link>
              </li>
              <li className="py-4 border-b-2 uppercase">
                <Link href="#services" as={t`#servicos`}>
                  <Trans>Nossos Serviços</Trans>
                </Link>
              </li>
              <li className="py-4 border-b-2 uppercase">
                <Link href="#blog" as={t`#blog`}>
                  <Trans>Blog</Trans>
                </Link>
              </li>
              <li className="py-4 border-b-2 uppercase">
                <Link href="#contact" as={t`#contato`}>
                  <Trans>Contato</Trans>
                </Link>
              </li>
            </ul>
            <div className="flex gap-3 mt-7">
              <Link href={{ pathname, query }} as={asPath} locale="pt">
                <Image
                  className={classNames(activeLocale === 'pt' ? '' : 'opacity-50', 'w-auto h-6')}
                  src={FlagBRA}
                  alt=""
                />
              </Link>
              <Link href={{ pathname, query }} as={asPath} locale="en">
                <Image
                  className={classNames(activeLocale === 'en' ? '' : 'opacity-50', 'w-auto h-6')}
                  src={FlagUSA}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}
