import React from 'react'

export type Booleanish = boolean | 'true' | 'false'

export type As = React.ElementType<any>

export type PropsOf<T extends As> = React.ComponentPropsWithRef<T>

export type PropsWithAs<T extends As, P> = P &
  Omit<React.ComponentPropsWithRef<T>, 'as' | 'color' | keyof P> & {
    as?: T
  }

export type PropsFromAs<T extends As, P> = (PropsWithAs<T, P> & { as: T }) & PropsWithAs<T, P>

export interface ComponentWithAs<T extends As, P> {
  <TT extends As>(props: PropsWithAs<TT, P>): React.ReactElement | null
  (props: PropsWithAs<T, P>): React.ReactElement | null
  displayName?: string
  propTypes?: React.WeakValidationMap<PropsWithAs<T, P>>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: Partial<PropsWithAs<T, P>>
  /**
   * @private
   */
  id?: string
}

export function forwardRef<P, T extends As>(
  comp: (
    props: PropsFromAs<T, Omit<P, 'children' | 'as'>>,
    ref: React.RefObject<any>
  ) => React.ReactElement | null
) {
  return (React.forwardRef(comp as any) as unknown) as ComponentWithAs<
    T,
    Omit<P, 'children' | 'as'>
  >
}
