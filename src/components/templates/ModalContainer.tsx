import 'swiper/css'

import { Trans } from '@lingui/macro'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import ButtonWhatsapp from '../ui/atoms/ButtonWhatsapp'
import ContainerModalButton from '../ui/atoms/ContainerModalButton'

type Props = {
  title: string
  image: StaticImageData
  children?: ReactNode
  capacity?: string
  typeGroup: string
  sizeGroup: string
  openRoof?: {
    divClassName: string
    props: {
      feet: {
        width: string
        length: string
      }
      millimeters: {
        width: string
        length: string
      }
    }
  }
  openDoor?: {
    divClassName: string
    props: {
      feet: {
        width: string
        height: string
      }
      millimeters: {
        width: string
        height: string
      }
    }
  }
  insideDimensions: {
    divClassName: string
    props: {
      feet: {
        width?: string
        length?: string
        height?: string
        minWidth?: string
        minLength?: string
        widthFloor?: string
        heightBottom?: string
      }
      millimeters?: {
        width?: string
        length?: string
        height?: string
        minWidth?: string
        minLength?: string
        widthFloor?: string
        heightBottom?: string
      }
      noRoofBars?: {
        height: string
      }
    }
  }
  weight: {
    divClassName: string
    props: {
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
  buttons: {
    label: string
    isActive: boolean
    onClick: () => void
    className: string
  }[]
}

export default function ModalContainer({
  title,
  image,
  capacity,
  sizeGroup,
  typeGroup,
  weight,
  openRoof,
  openDoor,
  insideDimensions,
  buttons,
}: Props) {
  return (
    <div className="grid grid-cols-12 gap-y-5 xl:gap-x-20 xl:px-16">
      <div className="col-span-12 xl:col-span-4">
        <h3 className="mb-4 font-bold text-blue-300 text-3xl">{title}</h3>
        <Image src={image} alt="" />
      </div>
      <div className="col-span-12 xl:col-span-8">
        <h4 className="mb-4 font-bold text-blue-300 text-2xl">
          <Trans>Selecione um tamanho:</Trans>
        </h4>
        <Swiper width={250} className="mt-3">
          {buttons.map((button, index) => (
            <SwiperSlide key={index} className={button.className}>
              <ContainerModalButton isActive={button.isActive} onClick={button.onClick}>
                {button.label}
              </ContainerModalButton>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="bg-neutral-200 p-7 mt-6 space-y-2">
          {capacity !== undefined && (
            <p className="text-sm lg:text-lg">
              <strong>
                <Trans>Capacidade:</Trans>{' '}
              </strong>
              {capacity}
            </p>
          )}
          <p className="text-sm lg:text-lg">
            <strong>
              <Trans>ISO Type Group:</Trans>{' '}
            </strong>
            {typeGroup}
          </p>
          <p className="text-sm lg:text-lg">
            <strong>
              <Trans>ISO Size Type:</Trans>{' '}
            </strong>
            {sizeGroup}
          </p>
        </div>
      </div>
      <div className={insideDimensions.divClassName}>
        <h4 className="mb-4 font-bold text-blue-300 text-2xl">
          <Trans>Dimensões internas</Trans>
        </h4>
        <div className="xl:hidden grid grid-cols-2 gap-5">
          <div className="p-3 bg-neutral-200 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
            <div className="mb-3">
              <p className="font-bold text-sm">
                <Trans>Medida</Trans>
              </p>
              <p>
                <Trans>Milímetros</Trans>
              </p>
            </div>
            {insideDimensions.props.millimeters?.length && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Comprimento</Trans>
                </p>
                <p>{insideDimensions.props.millimeters.length}</p>
              </div>
            )}
            {insideDimensions.props.millimeters?.minLength && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Comprimento Min</Trans>
                </p>
                <p>{insideDimensions.props.millimeters.minLength}</p>
              </div>
            )}
            {insideDimensions.props.millimeters?.width && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Largura</Trans>
                </p>
                <p>{insideDimensions.props.millimeters.width}</p>
              </div>
            )}
            {insideDimensions.props.millimeters?.widthFloor && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Largura Piso</Trans>
                </p>
                <p>{insideDimensions.props.millimeters.widthFloor}</p>
              </div>
            )}
            {insideDimensions.props.millimeters?.minWidth && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Largura Min</Trans>
                </p>
                <p>{insideDimensions.props.millimeters.minWidth}</p>
              </div>
            )}
            {insideDimensions.props.millimeters?.height && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Altura</Trans>
                </p>
                <p>{insideDimensions.props.millimeters.height}</p>
              </div>
            )}
            {insideDimensions.props.millimeters?.heightBottom && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Altura Inferior</Trans>
                </p>
                <p>{insideDimensions.props.millimeters.heightBottom}</p>
              </div>
            )}
          </div>
          <div className="p-3 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
            <div className="mb-3">
              <p className="font-bold text-sm">
                <Trans>Medida</Trans>
              </p>
              <p>
                <Trans>Pés</Trans>
              </p>
            </div>
            {insideDimensions.props.feet?.length && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Comprimento</Trans>
                </p>
                <p>{insideDimensions.props.feet.length}</p>
              </div>
            )}
            {insideDimensions.props.feet?.minLength && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Comprimento Min</Trans>
                </p>
                <p>{insideDimensions.props.feet.minLength}</p>
              </div>
            )}
            {insideDimensions.props.feet?.width && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Largura</Trans>
                </p>
                <p>{insideDimensions.props.feet.width}</p>
              </div>
            )}
            {insideDimensions.props.feet?.widthFloor && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Largura Piso</Trans>
                </p>
                <p>{insideDimensions.props.feet.widthFloor}</p>
              </div>
            )}
            {insideDimensions.props.feet?.minWidth && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Largura Min</Trans>
                </p>
                <p>{insideDimensions.props.feet.minWidth}</p>
              </div>
            )}
            {insideDimensions.props.feet?.height && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Altura</Trans>
                </p>
                <p>{insideDimensions.props.feet.height}</p>
              </div>
            )}
            {insideDimensions.props.feet?.heightBottom && (
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Altura Inferior</Trans>
                </p>
                <p>{insideDimensions.props.feet.heightBottom}</p>
              </div>
            )}
          </div>
        </div>
        <table className="hidden lg:table w-full text-left border-collapse shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
          <thead>
            <tr>
              <th className="px-3 py-2">
                <Trans>Medidas</Trans>
              </th>
              {insideDimensions.props.millimeters?.length && (
                <th>
                  <Trans>Comprimento</Trans>
                </th>
              )}
              {insideDimensions.props.millimeters?.minLength && (
                <th>
                  <Trans>Comprimento Min</Trans>
                </th>
              )}
              {insideDimensions.props.millimeters?.width && (
                <th>
                  <Trans>Largura</Trans>
                </th>
              )}
              {insideDimensions.props.millimeters?.widthFloor && (
                <th>
                  <Trans>Largura Piso</Trans>
                </th>
              )}
              {insideDimensions.props.millimeters?.minWidth && (
                <th>
                  <Trans>Largura Min</Trans>
                </th>
              )}
              {insideDimensions.props.millimeters?.height && (
                <th>
                  <Trans>Altura</Trans>
                </th>
              )}
              {insideDimensions.props.millimeters?.heightBottom && (
                <th>
                  <Trans>Altura Inferior</Trans>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-neutral-200">
              <th className="px-3 py-2">
                <Trans>Milímetros</Trans>
              </th>
              {insideDimensions.props.millimeters?.length && (
                <td>{insideDimensions.props.millimeters.length}</td>
              )}
              {insideDimensions.props.millimeters?.minLength && (
                <td>{insideDimensions.props.millimeters.minLength}</td>
              )}
              {insideDimensions.props.millimeters?.width && (
                <td>{insideDimensions.props.millimeters.width}</td>
              )}
              {insideDimensions.props.millimeters?.widthFloor && (
                <td>{insideDimensions.props.millimeters.widthFloor}</td>
              )}
              {insideDimensions.props.millimeters?.minWidth && (
                <td>{insideDimensions.props.millimeters.minWidth}</td>
              )}
              {insideDimensions.props.millimeters?.height && (
                <td>{insideDimensions.props.millimeters.height}</td>
              )}
              {insideDimensions.props.millimeters?.heightBottom && (
                <td>{insideDimensions.props.millimeters.heightBottom}</td>
              )}
            </tr>
            <tr className="odd:bg-neutral-200">
              <th className="px-3 py-2">
                <Trans>Libras</Trans>
              </th>
              {insideDimensions.props.feet?.length && <td>{insideDimensions.props.feet.length}</td>}
              {insideDimensions.props.feet?.minLength && (
                <td>{insideDimensions.props.feet.minLength}</td>
              )}
              {insideDimensions.props.feet?.width && <td>{insideDimensions.props.feet.width}</td>}
              {insideDimensions.props.feet?.widthFloor && (
                <td>{insideDimensions.props.feet.widthFloor}</td>
              )}
              {insideDimensions.props.feet?.minWidth && (
                <td>{insideDimensions.props.feet.minWidth}</td>
              )}
              {insideDimensions.props.feet?.height && <td>{insideDimensions.props.feet.height}</td>}
              {insideDimensions.props.feet?.heightBottom && (
                <td>{insideDimensions.props.feet.heightBottom}</td>
              )}
            </tr>
            {insideDimensions.props?.noRoofBars && (
              <tr className="odd:bg-neutral-200">
                <th className="px-3 py-2">
                  <Trans>Sem barras de tejadilho</Trans>
                </th>
                <td colSpan={3} className="px-3 py-2 text-right">
                  {insideDimensions.props.noRoofBars.height}mm
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {openDoor && (
        <div className={openDoor.divClassName}>
          <h4 className="mb-4 font-bold text-blue-300 text-2xl">
            <Trans>Abertura de porta</Trans>
          </h4>
          <div className="grid grid-cols-2 gap-5 lg:hidden">
            <div className="p-3 bg-neutral-200 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Medida</Trans>
                </p>
                <p>
                  <Trans>Milímetros</Trans>
                </p>
              </div>
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Largura</Trans>
                </p>
                <p>{openDoor.props.millimeters.width}</p>
              </div>
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Altura</Trans>
                </p>
                <p>{openDoor.props.millimeters.height}</p>
              </div>
            </div>
            <div className="p-3 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Medida</Trans>
                </p>
                <p>
                  <Trans>Pés</Trans>
                </p>
              </div>
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Largura</Trans>
                </p>
                <p>{openDoor.props.feet.width}</p>
              </div>
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Altura</Trans>
                </p>
                <p>{openDoor.props.feet.height}</p>
              </div>
            </div>
          </div>

          <table className="hidden lg:table w-full text-left border-collapse shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
            <thead>
              <tr className="">
                <th className="px-3 py-2">
                  <Trans>Medidas</Trans>
                </th>
                <th>
                  <Trans>Largura</Trans>
                </th>
                <th>
                  <Trans>Altura</Trans>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-neutral-200">
                <th className="px-3 py-2">
                  <Trans>Milímetros</Trans>
                </th>
                <td>{openDoor.props.millimeters.width}</td>
                <td>{openDoor.props.millimeters.height}</td>
              </tr>
              <tr className="odd:bg-neutral-200">
                <th className="px-3 py-2">
                  <Trans>Pés</Trans>
                </th>
                <td>{openDoor.props.feet.width}</td>
                <td>{openDoor.props.feet.height}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {openRoof && (
        <div className={openRoof.divClassName}>
          <h4 className="mb-4 font-bold text-blue-300 text-2xl">
            <Trans>Abertura do Telhado</Trans>
          </h4>

          <div className="grid grid-cols-2 gap-5 lg:hidden">
            <div className="p-3 bg-neutral-200 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Medida</Trans>
                </p>
                <p>
                  <Trans>Milímetros</Trans>
                </p>
              </div>
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Largura</Trans>
                </p>
                <p>{openRoof.props.millimeters.width}</p>
              </div>
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Altura</Trans>
                </p>
                <p>{openRoof.props.millimeters.length}</p>
              </div>
            </div>
            <div className="p-3 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Medida</Trans>
                </p>
                <p>
                  <Trans>Pés</Trans>
                </p>
              </div>
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Largura</Trans>
                </p>
                <p>{openRoof.props.feet.width}</p>
              </div>
              <div className="mb-3">
                <p className="font-bold text-sm">
                  <Trans>Altura</Trans>
                </p>
                <p>{openRoof.props.feet.length}</p>
              </div>
            </div>
          </div>

          <table className="hidden lg:table w-full text-left border-collapse shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
            <thead>
              <tr className="">
                <th className="px-3 py-2">
                  <Trans>Medidas</Trans>
                </th>
                <th>
                  <Trans>Largura</Trans>
                </th>
                <th>
                  <Trans>Altura</Trans>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-neutral-200">
                <th className="px-3 py-2">
                  <Trans>Milímetros</Trans>
                </th>
                <td>{openRoof.props.millimeters.width}</td>
                <td>{openRoof.props.millimeters.length}</td>
              </tr>
              <tr className="odd:bg-neutral-200">
                <th className="px-3 py-2">
                  <Trans>Pés</Trans>
                </th>
                <td>{openRoof.props.feet.width}</td>
                <td>{openRoof.props.feet.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className={weight.divClassName}>
        <h4 className="mb-4 font-bold text-blue-300 text-2xl">
          <Trans>Peso</Trans>
        </h4>

        <div className="grid grid-cols-2 gap-5 lg:hidden">
          <div className="p-3 bg-neutral-200 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
            <div className="mb-3">
              <p className="font-bold text-sm">
                <Trans>Medida</Trans>
              </p>
              <p>
                <Trans>Quilogramas</Trans>
              </p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-sm">
                <Trans>Bruto Máximo</Trans>
              </p>
              <p>{weight.props.kilograms.maxGross}</p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-sm">
                <Trans>Tara (Peso)</Trans>
              </p>
              <p>{weight.props.kilograms.tareWeight}</p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-sm">
                <Trans>Carga útil máxima</Trans>
              </p>
              <p>{weight.props.kilograms.maxPayload}</p>
            </div>
          </div>
          <div className="p-3 shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
            <div className="mb-3">
              <p className="font-bold text-sm">
                <Trans>Medida</Trans>
              </p>
              <p>
                <Trans>Libras</Trans>
              </p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-sm">
                <Trans>Bruto Máximo</Trans>
              </p>
              <p>{weight.props.pounds.maxGross}</p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-sm">
                <Trans>Tara (Peso)</Trans>
              </p>
              <p>{weight.props.pounds.tareWeight}</p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-sm">
                <Trans>Carga útil máxima</Trans>
              </p>
              <p>{weight.props.pounds.maxPayload}</p>
            </div>
          </div>
        </div>

        <table className="hidden lg:table w-full text-left border-collapse shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
          <thead>
            <tr className="">
              <th className="px-3 py-2">
                <Trans>Medidas</Trans>
              </th>
              <th>
                <Trans>Bruto Máximo</Trans>
              </th>
              <th>
                <Trans>Tara (Peso)</Trans>
              </th>
              <th>
                <Trans>Carga útil máxima</Trans>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-neutral-200">
              <th className="px-3 py-2">
                <Trans>Quilogramas</Trans>
              </th>
              <td>{weight.props.kilograms.maxGross}</td>
              <td>{weight.props.kilograms.tareWeight}</td>
              <td>{weight.props.kilograms.maxPayload}</td>
            </tr>
            <tr className="odd:bg-neutral-200">
              <th className="px-3 py-2">
                <Trans>Libras</Trans>
              </th>
              <td>{weight.props.pounds.maxGross}</td>
              <td>{weight.props.pounds.tareWeight}</td>
              <td>{weight.props.pounds.maxPayload}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
