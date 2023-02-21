import { Trans } from '@lingui/macro'
import Image from 'next/image'

import { Container } from '@/components/ui/atoms/Container'
import { Content } from '@/components/ui/atoms/Content'
import CustomIcons from '@/components/ui/atoms/Icons'
import BrandShort from '@/public/images/brands/brand-short.png'

export default function Footer() {
  return (
    <footer className="bg-blue-300 text-white">
      <Container>
        <Content className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
            <div className="md:col-span-3">
              <Image src={BrandShort} alt="" />
              <p className="mt-3">
                <Trans>Foco no negócio e na excelência na prestação dos serviços</Trans>
              </p>
            </div>
            <div className="md:col-span-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-6">
                    <CustomIcons icon="smartphone" />
                  </span>{' '}
                  <Trans>+55 11 94701-7928</Trans>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6">
                    <CustomIcons icon="phone" />
                  </span>{' '}
                  <Trans>+55 11 5990-3260</Trans>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6">
                    <CustomIcons icon="envelope" />
                  </span>{' '}
                  <Trans>adm@advanceglobal.com.br</Trans>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6">
                    <CustomIcons icon="map-marker" />
                  </span>
                  <Trans>
                    Rua Conceição de Monte Alegre, 107 Torre B 10º Andar Cj.101 - São Paulo/SP CEP
                    04563-060 - BRASIL
                  </Trans>
                </li>
              </ul>
            </div>
            <div className="md:col-span-5 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.780198245513!2d-46.69559528452514!3d-23.612214619358348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce516522cf51a5%3A0xda5459539968510c!2sAdvance%20Global%20Log%C3%ADstica%20Consultoria%20e%20Transporte%20Internacional%20Ltda.!5e0!3m2!1spt-BR!2sbr!4v1676480988195!5m2!1spt-BR!2sbr"
                loading="lazy"
                className="w-full h-44 border-0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="mt-14">
            <p>
              <Trans>© Advance Global 2022 Todos os direitos reservados | Design by</Trans>{' '}
              <a
                href="http://"
                className="text-green-light-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                weper
              </a>
            </p>
          </div>
        </Content>
      </Container>
    </footer>
  )
}
