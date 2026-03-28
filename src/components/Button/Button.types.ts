import type { ReactNode } from 'react'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  type: 'close' | 'social' | 'primary'
  onClick?: () => void
  ariaLabel: string
  href?: string
  children?: ReactNode
}
