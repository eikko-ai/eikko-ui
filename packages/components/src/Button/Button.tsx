import React from 'react'
import tw, { styled } from 'twin.macro'

export type ButtonVariant = 'solid' | 'secondary' | 'outline' | 'ghost' | 'link' | 'unstyled'

const StyledButton = styled.button(() => [
  tw`text-lg px-8 py-2 rounded focus:outline-none`,
  tw`bg-green-600 text-green-50 shadow-sm hover:shadow-lg`
])

interface ButtonProps {
  /** Controls the basic button style. */
  variant?: ButtonVariant
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}
