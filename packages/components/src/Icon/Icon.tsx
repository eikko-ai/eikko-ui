import React from 'react'
import { cx } from '../util'

export type IconType =
  | React.FunctionComponent<{ 'className': string; 'aria-hidden': boolean }>
  | React.ComponentClass<{ 'className': string; 'aria-hidden': boolean }>
  | React.ReactNode
  | JSX.Element
  | string

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  size?: IconSize
  color?: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({
  children,
  size = 'md',
  color,
  className,
  ...other
}) => {
  return React.cloneElement(children as React.ReactElement<any>, {
    size,
    color,
    'role': 'presentation',
    'aria-hidden': true,
    'style': { display: 'block' },
    'className': cx('Icon', className),
    ...other
  })
}
