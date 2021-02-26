import * as React from 'react'

export type Merge<T1, T2> = Omit<T1, Extract<keyof T1, keyof T2>> & T2

export type SafeMerge<T, P> = P & Omit<T, keyof P>

export type UnionStringArray<T extends Readonly<string[]>> = T[number]

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export type AnyFunction<T = any> = (...args: T[]) => any

export type FunctionArguments<T extends Function> = T extends (...args: infer R) => any ? R : never // eslint-disable-line

export type Dict<T = any> = Record<string, T>

export type ReactNodeOrRenderProp<P> = React.ReactNode | ((props: P) => React.ReactNode)

export type Booleanish = boolean | 'true' | 'false'

export type ObjectOrArray<T, K extends keyof any = keyof any> = T[] | Record<K, T>

export type StringOrNumber = string | number

export type Assign<T, U> = {
  [P in keyof (T & U)]: P extends keyof T ? T[P] : P extends keyof U ? U[P] : never
}

export type HTMLProps<T = any> = Omit<React.HTMLAttributes<T>, 'color' | 'width' | 'height'> &
  React.RefAttributes<T>

export type PropGetter<T extends HTMLElement = any, P = {}> = (
  props?: SafeMerge<HTMLProps<T>, P>,
  ref?: React.Ref<any> | React.RefObject<any>
) => SafeMerge<HTMLProps<T>, P>

export type As = React.ElementType<any>

export type PropsOf<T extends As> = React.ComponentPropsWithRef<T>

export type WithAs<P, T extends As> = P &
  Omit<PropsOf<T>, 'as' | keyof P> & {
    as?: T
  }

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

export type StyledComponent<T extends As, P> = (
  props: Omit<PropsOf<T>, 'as' | keyof P> & P & { as?: As; children?: React.ReactNode }
) => JSX.Element

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
