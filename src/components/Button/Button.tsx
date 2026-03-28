import './Button.css'
import type { ButtonProps } from './Button.types'

export function Button({
  type,
  onClick,
  ariaLabel,
  href,
  children,
  className,
  ...rest
}: ButtonProps) {
  const ButtonTag = href ? 'a' : 'button'
  const baseClass = `button button--${type}`
  const mergedClassName = className ? `${baseClass} ${className}` : baseClass
  const props = href ? { href } : { onClick, type: 'button' as const }

  return (
    <ButtonTag
      className={mergedClassName}
      aria-label={ariaLabel}
      {...props}
      {...rest}
    >
      {children}
    </ButtonTag>
  )
}
