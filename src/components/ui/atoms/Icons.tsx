import { SVGProps } from 'react'

import { classNames } from '@/utils'

type Icon = 'envelope' | 'phone' | 'map-marker' | 'smartphone'

type Props = SVGProps<SVGSVGElement> & {
  icon: Icon
}

export default function CustomIcons({ icon, className = '', ...rest }: Props) {
  return (
    <svg
      className={classNames('w-6 h-6 fill-none', className)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {Icons[icon]}
    </svg>
  )
}

const Icons = {
  envelope: (
    <path
      d="M22 7.14286C22 5.95939 21.0548 5 19.8889 5H5.11111C3.94518 5 3 5.95939 3 7.14286M22 7.14286V17.8571C22 19.0406 21.0548 20 19.8889 20H5.11111C3.94518 20 3 19.0406 3 17.8571V7.14286M22 7.14286L12.5 13.5713L3 7.14286"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  phone: (
    <path
      d="M5.11765 3H9.35294L11.4706 8.29412L8.82353 9.88235C9.95749 12.1816 11.8184 14.0425 14.1176 15.1765L15.7059 12.5294L21 14.6471V18.8824C21 19.444 20.7769 19.9826 20.3798 20.3798C19.9826 20.7769 19.444 21 18.8824 21C14.7522 20.749 10.8566 18.9951 7.93076 16.0692C5.00489 13.1434 3.25099 9.24784 3 5.11765C3 4.55601 3.22311 4.01738 3.62024 3.62024C4.01738 3.22311 4.55601 3 5.11765 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  'map-marker': (
    <>
      <path
        d="M11.9997 13.7113C13.553 13.7113 14.8122 12.4034 14.8122 10.79C14.8122 9.17657 13.553 7.86865 11.9997 7.86865C10.4464 7.86865 9.18716 9.17657 9.18716 10.79C9.18716 12.4034 10.4464 13.7113 11.9997 13.7113Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3034 16.2985L13.3256 20.4303C12.974 20.7951 12.4974 21 12.0005 21C11.5035 21 11.0269 20.7951 10.6753 20.4303L6.69656 16.2985C5.64771 15.2091 4.93344 13.821 4.64409 12.3098C4.35473 10.7987 4.50328 9.23237 5.07094 7.80892C5.63861 6.38547 6.59991 5.16884 7.83327 4.31286C9.06663 3.45688 10.5167 3 12 3C13.4833 3 14.9334 3.45688 16.1667 4.31286C17.4001 5.16884 18.3614 6.38547 18.9291 7.80892C19.4967 9.23237 19.6453 10.7987 19.3559 12.3098C19.0666 13.821 18.3523 15.2091 17.3034 16.2985Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  smartphone: (
    <>
      <path
        d="M16.8 2H7.2C6.53726 2 6 2.55964 6 3.25V20.75C6 21.4404 6.53726 22 7.2 22H16.8C17.4627 22 18 21.4404 18 20.75V3.25C18 2.55964 17.4627 2 16.8 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 3H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19V19.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
}
