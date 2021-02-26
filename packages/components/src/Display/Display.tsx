import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'
import { cx, forwardRef, PropsOf, StyledComponent } from '../util'

export interface DisplayOptions {
  width?: string
  caption?: React.ReactNode | string
  shadow?: boolean
}

const Component: StyledComponent<'div', DisplayOptions> = styled.div(({}: DisplayProps) => [
  tw`block mx-auto my-10 max-w-full`
])

type DisplayProps = PropsOf<typeof Component>

export const Display = forwardRef<DisplayProps, 'div'>((props: DisplayProps, ref: any) => {
  const { children, className, width, shadow = false, caption, ...rest } = props

  return (
    <Component ref={ref} className={cx('Display', className)} {...rest}>
      <div
        className="Display__content"
        tw="block max-w-full mx-auto my-0 rounded overflow-hidden"
        css={[
          shadow && tw`shadow-xl`,
          css`
            width: ${width ? width : 'max-content'};
          `
        ]}
      >
        {children}
      </div>
      <div
        className="Display__caption"
        css={[
          css`
            max-width: 85%;
            margin: ${shadow ? '1.75rem' : '1.25rem'} auto 0;
          `,
          tw`text-sm leading-6 text-gray-500 text-center`
        ]}
      >
        {caption}
      </div>
    </Component>
  )
})
