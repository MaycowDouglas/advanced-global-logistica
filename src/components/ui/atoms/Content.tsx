import { HTMLAttributes } from 'react'

import { classNames } from '@/utils'

export const Content = ({ className = '', children, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('px-5 xl:px-16', className)} {...rest}>
    {children}
  </div>
)
