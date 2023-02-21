import Link from 'next/link'
import { BsWhatsapp } from 'react-icons/bs'

type Props = {
  phone: string
  message?: string
}

export default function ButtonWhatsapp({ phone, message }: Props) {
  const formatedPhone = phone.replace(/\D/g, '')
  return (
    <div className="group fixed z-50 flex gap-3 items-end bottom-10 right-8">
      <div className="px-4 py-3 hidden group-hover:block rounded-full rounded-tr bg-green-light-200 text-blue-400 transition-all">
        <p>Entre em contato por whatsapp</p>
      </div>
      <Link
        href={`https://api.whatsapp.com/send?phone=${formatedPhone}${
          message !== undefined ? `&text=${message}` : ''
        }`}
        className="inline-flex items-center justify-center p-3 rounded-full bg-green-light-400"
      >
        <BsWhatsapp size={32} className="text-white" />
      </Link>
    </div>
  )
}
