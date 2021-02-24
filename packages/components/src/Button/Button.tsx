import React, { Fragment } from 'react'
import tw, { styled } from 'twin.macro'
import { cx, dataAttr } from '../util'
import { Intent, ElementSize } from '../theme'
import { Icon, IconType } from '../Icon'
import { Spinner } from '../Spinner'

export type ButtonVariant = 'solid' | 'secondary' | 'outline' | 'ghost' | 'link' | 'unstyled'

export type ButtonIntent = Intent

export type ButtonSize = ElementSize

export interface ButtonOptions {
  /** The size of the button. */
  size?: ButtonSize
  /** Controls the basic button style. */
  variant?: ButtonVariant
  /** Controls the colour of the button. */
  intent?: ButtonIntent
  /** If `true`, the button will be styled in it's active state. */
  isActive?: boolean
  /** Sets the button as disabled. */
  isDisabled?: boolean
  /** Show a loading indicator. */
  isLoading?: boolean
  /** Set a custom spinner element */
  spinner?: React.ReactElement
  /** Shows a loading text when isLoading is true. */
  loadingText?: string
  /** If true, the button will be displayed as a block element instead of inline. */
  isWide?: boolean
  /** If true, the button text will be in all caps. */
  isUppercase?: boolean
  /** The name of the icon to appear to the left of the button text. */
  iconLeft?: IconType
  /** The name of the icon to appear to the right of the button text. */
  iconRight?: IconType
  /** If `true` it floats the icon to the left/right. */
  floatIcon?: boolean
  /** Hyperlink for when button is rendered as an anchor link */
  href?: string
}

export interface ButtonProps extends ButtonOptions, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Custom component to be rendered, defaults to `button`. */
  as?: React.ElementType<any>
  /** The html button type to use. */
  type?: 'button' | 'reset' | 'submit'
}

const sizeStyles = {
  xs: tw`h-7 leading-4 py-1.5 px-2.5 text-xs`,
  sm: tw`h-8 leading-4 py-2 px-3 text-sm`,
  md: tw`h-8 leading-5 py-2 px-4 text-sm`,
  lg: tw`h-10 leading-6 py-2 px-4 text-base`,
  xl: tw`h-12 leading-6 py-3 px-6 text-lg`
}

const baseStyles = tw`
  text-white font-medium tracking-wide
  inline-flex items-center justify-center
  border border-transparent
  rounded
  transition-colors duration-150 ease-in-out
  cursor-pointer
  select-none
  shadow-sm
  focus:outline-none focus:ring ring-opacity-10
`

const variantIntentStyles = {
  solid: {
    primary: tw`
      bg-b_petrol-700
      hover:bg-b_petrol-800
      active:bg-b_petrol-900
      focus:ring-b_petrol-200`,
    secondary: tw`
      bg-b_green-600
      hover:bg-b_green-700
      active:bg-b_green-800
      focus:ring-b_green-300`,
    light: tw`
      text-light-700
      bg-white
      border-light-300
      hover:bg-light-50
      active:bg-light-100
      focus:ring-gray-200`,
    dark: tw`
      bg-dark-800
      hover:bg-dark-700
      active:bg-dark-600
      focus:ring-gray-300`,
    info: tw`
      bg-info-600
      hover:bg-info-700
      active:bg-info-800
      focus:ring-info-300`,
    success: tw`
      bg-success-600
      hover:bg-success-700
      active:bg-success-800
      focus:ring-success-300`,
    warning: tw`
      bg-warning-600
      hover:bg-warning-700
      active:bg-warning-800
      focus:ring-warning-400`,
    danger: tw`
      bg-danger-600
      hover:bg-danger-700
      active:bg-danger-800
      focus:ring-danger-300`
  },
  secondary: {
    primary: tw`
      text-b_petrol-700
      bg-b_petrol-100
      hover:bg-b_petrol-50
      active:bg-b_petrol-200
      focus:ring-b_petrol-300`,
    secondary: tw`
      text-b_green-700
      bg-b_green-100
      hover:bg-b_green-50
      active:bg-b_green-200
      focus:ring-b_green-300`,
    light: tw`
      text-light-700
      bg-light-100
      hover:bg-light-50
      active:bg-light-200
      focus:ring-light-200`,
    dark: tw`
      text-dark-700
      bg-dark-200
      hover:bg-dark-100
      active:bg-light-300
      focus:ring-dark-300`,
    info: tw`
      text-info-700
      bg-info-100
      hover:bg-info-50
      active:bg-info-200
      focus:ring-info-300`,
    success: tw`
      text-success-700
      bg-success-100
      hover:bg-success-50
      active:bg-success-200
      focus:ring-success-300`,
    warning: tw`
      text-warning-700
      bg-warning-100
      hover:bg-warning-50
      active:bg-warning-200
      focus:ring-warning-300`,
    danger: tw`
      text-danger-700
      bg-danger-100
      hover:bg-danger-50
      active:bg-danger-200
      focus:ring-danger-300`
  },
  outline: {
    primary: tw`
      text-b_petrol-700
      border-b_petrol-500
      hover:bg-b_petrol-50
      active:bg-b_petrol-100
      focus:ring-b_petrol-300`,
    secondary: tw`
      text-b_green-700
      border-b_green-500
      hover:bg-b_green-50
      active:bg-b_green-100
      focus:ring-b_green-300`,
    light: tw`
      text-light-700
      border-light-500
      hover:bg-light-50
      active:bg-light-100
      focus:ring-light-200`,
    dark: tw`
      text-dark-700
      border-dark-500
      bg-dark-50
      hover:bg-dark-200
      active:bg-dark-300
      focus:ring-dark-300`,
    info: tw`
      text-info-700
      border-info-500
      hover:bg-info-50
      active:bg-info-100
      focus:ring-info-300`,
    success: tw`
      text-success-700
      border-success-500
      hover:bg-success-50
      active:bg-success-100
      focus:ring-success-300`,
    warning: tw`
      text-warning-700
      border-warning-500
      hover:bg-warning-50
      active:bg-warning-100
      focus:ring-warning-300`,
    danger: tw`
      text-danger-700
      border-danger-500
      hover:bg-danger-50
      active:bg-danger-100
      focus:ring-danger-300`
  },
  ghost: {
    primary: tw`
      text-b_petrol-700
      hover:bg-b_petrol-50
      active:bg-b_petrol-100
      focus:ring-b_petrol-300
      shadow-none`,
    secondary: tw`
      text-b_green-700
      hover:bg-b_green-50
      active:bg-b_green-100
      focus:ring-b_green-300
      shadow-none`,
    light: tw`
      text-light-700
      hover:bg-light-50
      active:bg-light-100
      focus:ring-light-200
      shadow-none`,
    dark: tw`
      text-dark-700
      hover:bg-dark-200
      active:bg-dark-300
      focus:ring-dark-300
      shadow-none`,
    info: tw`
      text-info-700
      hover:bg-info-50
      active:bg-info-100
      focus:ring-info-300
      shadow-none`,
    success: tw`
      text-success-700
      hover:bg-success-50
      active:bg-success-100
      focus:ring-success-300
      shadow-none`,
    warning: tw`
      text-warning-700
      hover:bg-warning-50
      active:bg-warning-100
      focus:ring-warning-300
      shadow-none`,
    danger: tw`
      text-danger-700
      hover:bg-danger-50
      active:bg-danger-100
      focus:ring-danger-300
      shadow-none`
  },
  link: {
    primary: tw`
      text-b_petrol-700
      hover:underline
      focus:text-b_petrol-900 focus:ring-b_petrol-300
      shadow-none`,
    secondary: tw`
      text-b_green-700
      focus:ring-b_green-300 focus:text-b_green-900
      hover:underline
      shadow-none`,
    light: tw`
      text-gray-700
      hover:underline
      focus:ring-light-200 focus:text-light-900
      shadow-none`,
    dark: tw`
      text-dark-700
      hover:underline
      focus:ring-dark-300 focus:text-dark-900
      shadow-none`,
    info: tw`
      text-info-700
      hover:underline
      focus:ring-info-300 focus:text-info-900
      shadow-none`,
    success: tw`
      text-success-700
      hover:underline
      focus:ring-success-300 focus:text-success-900
      shadow-none`,
    warning: tw`
      text-warning-700
      hover:underline
      focus:ring-warning-300 focus:text-warning-900
      shadow-none`,
    danger: tw`
      text-danger-700
      hover:underline
      focus:ring-danger-300 focus:text-danger-900
      shadow-none`
  },
  unstyled: {
    primary: tw`
      text-b_petrol-700
      shadow-none
      focus:ring-0`,
    secondary: tw`
      text-b_green-700
      shadow-none
      focus:ring-0`,
    light: tw`
      text-light-700
      shadow-none
      focus:ring-0`,
    dark: tw`
      text-dark-700
      shadow-none
      focus:ring-0`,
    info: tw`
      text-info-700
      shadow-none
      focus:ring-0`,
    success: tw`
      text-success-700
      shadow-none
      focus:ring-0`,
    warning: tw`
      text-warning-700
      shadow-none
      focus:ring-0`,
    danger: tw`
      text-danger-700
      shadow-none
      focus:ring-0`
  }
}

const leftIconStyle = {
  xs: tw`-ml-0.5 mr-2`,
  sm: tw`-ml-0.5 mr-2`,
  md: tw`-ml-1 mr-3`,
  lg: tw`-ml-1 mr-3`,
  xl: tw`-ml-1.5 mr-3`
}

const rightIconStyle = {
  xs: tw`ml-2 -mr-0.5`,
  sm: tw`ml-2 -mr-1`,
  md: tw`ml-3 -mr-1`,
  lg: tw`ml-3 -mr-1`,
  xl: tw`ml-3 -mr-1.5`
}

const Component = styled.button(
  ({
    size = 'md',
    variant = 'solid',
    intent = 'primary',
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

export const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    children,
    className,
    as = 'button',
    type = 'button',
    size = 'md',
    isDisabled,
    isLoading,
    isActive,
    iconLeft,
    iconRight,
    spinner,
    loadingText,
    floatIcon,
    href,
    onClick,
    ...rest
  } = props
  return (
    <Component
      as={as}
      ref={ref}
      role="button"
      type={type}
      href={as === 'a' && isDisabled ? undefined : href}
      className={cx('Button', className)}
      isDisabled={isDisabled}
      active={isActive}
      disabled={isDisabled || isLoading}
      aria-disabled={isDisabled}
      data-active={dataAttr(isActive)}
      data-loading={dataAttr(isLoading)}
      tabIndex={isDisabled ? undefined : 0}
      onClick={onClick}
      size={size}
      floatIcon={floatIcon}
      {...rest}
    >
      {isLoading && (
        <Fragment>
          {spinner ? (
            spinner
          ) : (
            <Spinner delay={50} size={size} css={loadingText && tw`-ml-1 mr-2`} />
          )}
          {loadingText && <span tw="ml-2">{loadingText}</span>}
        </Fragment>
      )}

      {!isLoading && (
        <Fragment>
          {iconLeft && <ButtonIcon size={size} iconLeft={iconLeft} floatIcon={floatIcon} />}
          <div css={[floatIcon && tw`flex-1`]}>{children}</div>
          {iconRight && <ButtonIcon size={size} iconRight={iconRight} floatIcon={floatIcon} />}
        </Fragment>
      )}
    </Component>
  )
})

// -- ButtonIcon

export type ButtonIconProps = {
  iconLeft?: IconType
  iconRight?: IconType
  floatIcon?: boolean
  size: ElementSize
}

/** The icon to embedd in a button */
export function ButtonIcon({ size, iconLeft, iconRight, floatIcon, ...rest }: ButtonIconProps) {
  return (
    <Fragment>
      {iconLeft && (
        <Icon {...rest} css={[leftIconStyle[size], floatIcon && [tw`mr-0`]]}>
          {iconLeft}
        </Icon>
      )}

      {iconRight && (
        <Icon {...rest} css={[rightIconStyle[size], floatIcon && [tw`ml-0`]]}>
          {iconRight}
        </Icon>
      )}
    </Fragment>
  )
}
