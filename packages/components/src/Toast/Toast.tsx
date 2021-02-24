import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'
import { cx } from '../util'

export interface ToastOptions {
  foo: string
}

interface ToastProps extends ToastOptions, React.HTMLAttributes<HTMLElement> {
  /** Custom component to be rendered. Defaults to div. */
  as?: React.ElementType<any>
}

const baseStyles = tw``

const Component = styled.div(({ foo }: ToastProps) => [baseStyles, foo && tw``])

export const Toast = React.forwardRef((props: ToastProps, ref: React.Ref<HTMLElement>) => {
  const { children, className, as = 'div', ...rest } = props
  return (
    <Component as={as} className={cx('Toast', className)} {...rest}>
      {children}
    </Component>
  )
})
