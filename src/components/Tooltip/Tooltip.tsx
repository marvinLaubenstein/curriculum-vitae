import { useState } from 'react'
import type { TooltipProps } from './Tooltip.types'
import './Tooltip.css'

export function Tooltip({ label, children, className }: TooltipProps) {
  const [visible, setVisible] = useState(false)

  return (
    <span
      className={`tooltip-wrapper${className ? ` ${className}` : ''}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      <span className={`tooltip${visible ? ' tooltip--visible' : ''}`} role="tooltip">
        {label}
      </span>
    </span>
  )
}
