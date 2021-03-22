import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'
import { cx, forwardRef, PropsOf, Comp } from '../../util'

export interface CheckboxOptions {
  foo: string
}

const Component: Comp<'div', CheckboxOptions> = styled.div(({ foo }: CheckboxProps) => [tw`block`])

type CheckboxProps = PropsOf<typeof Component>

export const Checkbox = forwardRef<CheckboxProps, 'div'>((props: CheckboxProps, ref: any) => {
  const { children, className, ...rest } = props

  return (
    <Component ref={ref} className={cx('Checkbox', className)} {...rest}>
      {children}
    </Component>
  )
})
