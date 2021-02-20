import React from 'react'
import tw, { styled } from 'twin.macro'
import { Intent } from '../theme'

export type ButtonVariant = 'solid' | 'secondary' | 'outline' | 'ghost' | 'link' | 'unstyled'

export type ButtonIntent = Intent

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps {
  /** The html button type to use. */
  type?: 'button' | 'reset' | 'submit'
  /** The size of the button. */
  size?: ButtonSize
  /** Controls the basic button style. */
  variant?: ButtonVariant
  /** Controls the colour of the button. */
  intent?: ButtonIntent
  /** Sets the button as disabled. */
  isDisabled?: boolean
  /** Show a loading indicator. */
  isLoading?: boolean
  /** If true, the button will be displayed as a block element instead of inline. */
  isWide?: boolean
  /** If true, the button text will be in all caps. */
  isUppercase?: boolean
  // /** The name of the icon to appear to the left of the button text. */
  // leftIcon?: IconName
  // /** The name of the icon to appear to the right of the button text. */
  // rightIcon?: IconName
}

const sizeStyles = {
  xs: tw`h-7 leading-4 py-1.5 px-2.5 text-xs`,
  sm: tw`h-8 leading-4 py-2 px-3 text-sm`,
  md: tw`h-8 leading-5 py-2 px-4 text-sm`,
  lg: tw`h-10 leading-6 py-2 px-4 text-base`,
  xl: tw`h-12 leading-6 py-3 px-6 text-lg`
}

const baseStyles = tw`inline-flex items-center justify-center
text-white font-medium tracking-wide
  border border-transparent rounded shadow-sm
  transition-colors duration-150 ease-in-out`

const variantIntentStyles = {
  solid: {
    primary: tw`
    bg-primary-600 hover:bg-primary-700
      focus:outline-none
      focus:ring focus:ring-offset-0 ring-opacity-10 focus:ring-primary-500`,
    secondary: tw`
    bg-secondary-600 hover:bg-secondary-700
      focus:outline-none
      focus:ring focus:ring-offset-0 ring-opacity-10 focus:ring-secondary-500`,
    light: tw`
    text-gray-700
    bg-white hover:bg-gray-50
    border-gray-300
      focus:outline-none
      focus:ring focus:ring-offset-0 ring-opacity-10 focus:ring-gray-500`,
    dark: tw`
    bg-dark-800 hover:bg-dark-700
      focus:outline-none
      focus:ring focus:ring-offset-0 ring-opacity-10 focus:ring-gray-500`,
    info: tw`
      bg-info-600 hover:bg-info-700
      focus:outline-none
      focus:ring focus:ring-offset-0 ring-opacity-10 focus:ring-info-500`,
    success: tw`
    bg-green-600 hover:bg-green-700
      focus:outline-none
      focus:ring focus:ring-offset-0 ring-opacity-10 focus:ring-green-500`,
    warning: tw`
    bg-yellow-600 hover:bg-yellow-700
      focus:outline-none
      focus:ring focus:ring-offset-0 ring-opacity-10 focus:ring-yellow-500`,
    danger: tw`
    bg-red-600 hover:bg-red-700
      focus:outline-none
      focus:ring focus:ring-offset-0 ring-opacity-10 focus:ring-red-500`
  },
  secondary: {
    primary: tw``,
    secondary: tw``,
    light: tw``,
    dark: tw``,
    info: tw``,
    success: tw``,
    warning: tw``,
    danger: tw``
  },
  outline: {
    primary: tw``,
    secondary: tw``,
    light: tw``,
    dark: tw``,
    info: tw``,
    success: tw``,
    warning: tw``,
    danger: tw``
  },
  ghost: {
    primary: tw``,
    secondary: tw``,
    light: tw``,
    dark: tw``,
    info: tw``,
    success: tw``,
    warning: tw``,
    danger: tw``
  },
  link: {
    primary: tw``,
    secondary: tw``,
    light: tw``,
    dark: tw``,
    info: tw``,
    success: tw``,
    warning: tw``,
    danger: tw``
  },
  unstyled: {
    primary: tw``,
    secondary: tw``,
    light: tw``,
    dark: tw``,
    info: tw``,
    success: tw``,
    warning: tw``,
    danger: tw``
  }
}

const StyledButton = styled.button(
  ({
    size = 'md',
    variant = 'solid',
    intent = 'dark',
    isDisabled,
    isWide,
    isUppercase
  }: ButtonProps) => [
    baseStyles,
    sizeStyles[size],
    isDisabled && tw`opacity-40 cursor-default pointer-events-none`,
    isWide && tw`w-full`,
    isUppercase && tw`uppercase`,
    variantIntentStyles[variant][intent]
  ]
)

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, ...rest } = props
  return <StyledButton {...rest}>{children}</StyledButton>
}
