import { HTMLAttributes } from 'react'

export default function Card({ children, ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <article className="w-60 px-4 py-6 gap-6 grid rounded-lg bg-neutral-200" {...rest}>
      {children}
    </article>
  )
}
