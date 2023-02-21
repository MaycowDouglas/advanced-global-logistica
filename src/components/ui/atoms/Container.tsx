import { HTMLAttributes } from 'react'

import { classNames } from '@/utils'

export const Container = ({
  className = '',
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('z-10 relative container', className)} {...rest}>
    {children}
  </div>
)
