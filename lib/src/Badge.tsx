import React from 'react'
import { cx } from './util'
import { Intent } from './theme'
import { useTheme } from './hooks'

const useStyle = () => {
  const {
    components: { Badge },
  } = useTheme()

  return {
    baseStyle: Badge.base,
    successStyle: Badge.success,
  }
}

export type BadgeVariant = 'dot' | 'standard'
export type BadgeIntent = Intent

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The value to render in the badge. */
  count?: number
  /** Max count to show. */
  max?: number
  /** If `true`, the badge will be invisible. */
  isInvisible?: boolean
  /** Controls whether the badge is hidden when `badgeContent` is zero. */
  showZero?: boolean
  /** The variant to use. */
  variant?: BadgeVariant
  /** The color of the badge. */
  intent?: BadgeIntent
  /** The vertical anchor position. */
  anchorVertical?: 'top' | 'bottom'
  /** The horizontal anchor position. */
  anchorHorizontal?: 'left' | 'right'
  /** Wrapped shape the badge should overlap. */
  overlap?: 'circle' | 'rectangle'
  /** Outline the badge. */
  outlined?: boolean
  /** Outline color. */
  outlineColor?: string
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (props: BadgeProps, ref: any) => {
    const { children, className, variant = 'standard', count = 0, max = 99, ...rest } = props

    let displayValue = ''
    if (variant !== 'dot') {
      displayValue = count > max ? `${max}+` : count.toString()
    }

    const { baseStyle, successStyle } = useStyle()
    const cls = cx('Badge', className, baseStyle)

    return (
      <span ref={ref} className={cls}>
        {children}
        <span>{displayValue}</span>
      </span>
    )
  }
)
