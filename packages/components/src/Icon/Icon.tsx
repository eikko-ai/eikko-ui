import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'

interface IconProps {
  foo: string
}

const Icon: React.FC<IconProps> = ({ foo }) => (
  <div className="foo-bar">{foo}</div>
);

export {Icon};
  