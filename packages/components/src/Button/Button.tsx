import React from 'react'
import tw, { styled } from 'twin.macro'

export type ButtonVariant = 'solid' | 'secondary' | 'outline' | 'ghost' | 'link' | 'unstyled'

const StyledButton = styled.button(() => [
  tw`text-lg px-8 py-2 rounded focus:outline-none`,
  tw`bg-green-600 border-green-700 border-2`,
  tw`transform transition-transform duration-75`
])

interface ButtonProps {
  /** Controls the basic button style. */
  variant?: ButtonVariant
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}
