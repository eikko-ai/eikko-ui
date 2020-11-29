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
    variantStyle: {
      standard: Badge.variant.standard,
      dot: Badge.variant.dot,
    },
    intentStyle: {
      primary: Badge.intent.primary,
      secondary: Badge.intent.secondary,
      light: Badge.intent.light,
      dark: Badge.intent.dark,
      info: Badge.intent.info,
      success: Badge.intent.success,
      warning: Badge.intent.warning,
      danger: Badge.intent.danger,
    },
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
    const {
      children,
      className,
      variant = 'standard',
      intent = 'dark',
      count = 0,
      max = 99,
      ...rest
    } = props

    let displayValue = ''
    if (variant !== 'dot') {
      displayValue = count > max ? `${max}+` : count.toString()
    }

    const { baseStyle, variantStyle, intentStyle } = useStyle()

    return (
      <span className={cx('Badge', className, baseStyle)} ref={ref} {...rest}>
        {children}
        <span className={cx(variantStyle[variant], intentStyle[intent])}>{displayValue}</span>
      </span>
    )
  }
)
