import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'

export type IconType =
  | string
  | React.FunctionComponent<{ 'className': string; 'aria-hidden': boolean }>
  | React.ComponentClass<{ 'className': string; 'aria-hidden': boolean }>

interface IconProps {
  foo: string
}

const Icon: React.FC<IconProps> = ({ foo }) => <div className="foo-bar">{foo}</div>

export { Icon }
