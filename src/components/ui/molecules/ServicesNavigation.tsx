import { t } from '@lingui/macro'
import { Dispatch, SetStateAction } from 'react'

import ServicesNavigationItem from '@/components/ui/atoms/ServicesNavigationItem'
import { servicesData } from '@/components/ui/organisms/Services'

type Props = {
  active: number
  setActive: Dispatch<SetStateAction<number>>
}

export default function ServicesNavigation({ active, setActive }: Props) {
  return (
    <ul className="grid grid-cols-4 text-center mt-10">
      <ServicesNavigationItem
        icon="ship"
        label={t`Marítimo Internacional`}
        active={active === 0}
        onClick={() => setActive(0)}
      />
      <ServicesNavigationItem
        icon="airplane"
        label={t`Aéreo Internacional`}
        active={active === 1}
        onClick={() => setActive(1)}
      />
      <ServicesNavigationItem
        icon="truck"
        label={t`Rodoviário Internacional`}
        active={active === 2}
        onClick={() => setActive(2)}
      />
      <ServicesNavigationItem
        icon="consultancy"
        label={t`Consultoria`}
        active={active === 3}
        onClick={() => setActive(3)}
      />
    </ul>
  )
}
