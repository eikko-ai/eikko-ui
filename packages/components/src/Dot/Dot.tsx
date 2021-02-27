import React, { useMemo } from 'react'
import tw, { styled } from 'twin.macro'
import { cx, forwardRef, PropsOf, Comp } from '../util'
import { Intent, ElementSize, getIntentColor } from '../theme'

export interface DotOptions {
  size?: ElementSize
  intent?: Intent
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

const Component: Comp<'span', DotOptions> = styled.span(() => [tw`inline-flex items-center`])

type DotProps = PropsOf<typeof Component>

export const Dot = forwardRef<DotProps, 'span'>((props: DotProps, ref: any) => {
  const { children, className, size = 'md', intent = 'dark', ...rest } = props
  const intentColor = useMemo(() => getIntentColor(intent), [intent])

  return (
    <Component ref={ref} className={cx('Dot', className)} {...rest}>
      <span
        className="Dot__icon"
        tw="rounded-full select-none"
        css={[
          sizeStyles[size],
          `
          background-color: ${intentColor};
        `
        ]}
      />
      <span className="Dot__label" tw="ml-2 capitalize" css={textSize[size]}>
        {children}
      </span>
    </Component>
  )
})
