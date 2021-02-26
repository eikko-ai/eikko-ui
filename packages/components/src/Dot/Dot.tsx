import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'
import { cx } from '../util'
import { Intent, ElementSize } from '../theme'

export interface DotOptions {
  size?: ElementSize
  intent?: Intent
}

interface DotProps extends DotOptions, React.HTMLAttributes<HTMLElement> {
  /** Custom component to be rendered. Defaults to div. */
  as?: React.ElementType<any>
}

const sizeStyles = {
  xs: tw`w-1 h-1`,
  sm: tw`w-2 h-2`,
  md: tw`w-2.5 h-2.5`,
  lg: tw`w-3 h-3`,
  xl: tw`w-4 h-4`
}

const textSize = {
  xs: tw`text-xs`,
  sm: tw`text-sm`,
  md: tw`text-base`,
  lg: tw`text-lg`,
  xl: tw`text-xl`
}

const getColor = function (intent: Intent) {
  const colors: { [key in Intent]?: string } = {
    primary: theme`colors.primary.600`,
    secondary: theme`colors.secondary.600`,
    light: theme`colors.light.300`,
    dark: theme`colors.dark.600`,
    info: theme`colors.info.600`,
    success: theme`colors.success.600`,
    warning: theme`colors.warning.500`,
    danger: theme`colors.danger.600`
  }
  return colors[intent] || colors['dark']
}

export const Dot = React.forwardRef((props: DotProps, ref: React.Ref<HTMLElement>) => {
  const { children, className, as = 'span', size = 'md', intent = 'dark', ...rest } = props
  return (
    <span as={as} className={cx('Dot', className)} tw="inline-flex items-center" {...props}>
      <span
        className="Dot__icon"
        tw="rounded-full select-none"
        css={[
          sizeStyles[size],
          `
          background-color: ${getColor(intent)};
        `
        ]}
      />
      <span className="Dot__label" tw="ml-2 capitalize" css={textSize[size]}>
        {children}
      </span>
    </span>
  )
})
