import React, { Fragment, useMemo } from 'react'
import tw, { styled } from 'twin.macro'
import { cx, forwardRef, PropsOf, Comp, dataAttr } from '../util'
import { Intent, ElementSize } from '../theme'
import { Icon, IconType } from '../Icon'
import { Spinner } from '../Spinner'
import { VisuallyHidden } from '../Abstract'

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
  /** If true, the button will be rounded or be a circle if no text is provided. */
  isRounded?: boolean
  /** Shows an icon inside the button. Defaults to left. */
  icon?: IconType
  /** The name of the icon to appear to the left of the button text. */
  iconLeft?: IconType
  /** The name of the icon to appear to the right of the button text. */
  iconRight?: IconType
  /** If `true` it floats the icon to the left/right. */
  floatIcon?: boolean
  /** Hyperlink for when button is rendered as an anchor link */
  href?: string
  /** A label required for accessibility when displaying an icon only.  */
  label?: string
}

const sizeStyles = (hasChildren: boolean) => {
  if (hasChildren) {
    return {
      xs: tw`px-2 py-1.5 text-xs leading-4`,
      sm: tw`px-3 py-2 text-sm leading-4`,
      md: tw`px-4 py-2 text-sm leading-5`,
      lg: tw`px-4 py-2 text-base leading-6`,
      xl: tw`px-6 py-3 text-lg leading-6`
    }
  } else {
    return {
      xs: tw`p-1`,
      sm: tw`p-1.5`,
      md: tw`p-2`,
      lg: tw`p-2.5`,
      xl: tw`p-3`
    }
  }
}

const baseStyles = tw`
  inline-flex items-center justify-center
  text-white font-medium tracking-wide
  border border-transparent rounded shadow-sm
  focus:outline-none focus:ring ring-opacity-10
  transition-colors duration-150 ease-in-out
  select-none
`

const variantIntentStyles = {
  solid: {
    primary: tw`
      bg-primary-700
      hover:bg-primary-800
      active:bg-primary-900
      focus:ring-primary-200`,
    secondary: tw`
      bg-secondary-600
      hover:bg-secondary-700
      active:bg-secondary-800
      focus:ring-secondary-300`,
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
      text-primary-700
      bg-primary-100
      hover:bg-primary-50
      active:bg-primary-200
      focus:ring-primary-300`,
    secondary: tw`
      text-secondary-700
      bg-secondary-100
      hover:bg-secondary-50
      active:bg-secondary-200
      focus:ring-secondary-300`,
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
      text-primary-700
      border-primary-500
      hover:bg-primary-50
      active:bg-primary-100
      focus:ring-primary-300`,
    secondary: tw`
      text-secondary-700
      border-secondary-500
      hover:bg-secondary-50
      active:bg-secondary-100
      focus:ring-secondary-300`,
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
      text-primary-700
      hover:bg-primary-50
      active:bg-primary-100
      focus:ring-primary-300
      shadow-none`,
    secondary: tw`
      text-secondary-700
      hover:bg-secondary-50
      active:bg-secondary-100
      focus:ring-secondary-300
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
      text-primary-700
      hover:underline
      focus:text-primary-900 focus:ring-primary-300
      shadow-none`,
    secondary: tw`
      text-secondary-700
      focus:ring-secondary-300 focus:text-secondary-900
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
      text-primary-700
      shadow-none
      focus:ring-0`,
    secondary: tw`
      text-secondary-700
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

const Component: Comp<
  'button',
  ButtonOptions
> = styled.button(
  ({
    variant = 'solid',
    intent = 'primary',
    isWide,
    isUppercase,
    isDisabled,
    isLoading,
    isRounded
  }: ButtonProps) => [
    baseStyles,
    variantIntentStyles[variant][intent],
    isWide && tw`w-full`,
    isUppercase && tw`uppercase`,
    isDisabled && tw`opacity-40 cursor-default pointer-events-none`,
    isLoading && tw`opacity-90 cursor-not-allowed!`,
    isRounded && tw`rounded-full`
  ]
)

type ButtonProps = PropsOf<typeof Component> & {
  /** The html button type to use. */
  type?: 'button' | 'reset' | 'submit'
}

export const Button = forwardRef<ButtonProps, 'button'>(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      children,
      className,
      as = 'button',
      type = 'button',
      size = 'md',
      isDisabled,
      isLoading,
      isActive,
      icon,
      iconLeft,
      iconRight,
      spinner,
      loadingText,
      isRounded,
      floatIcon,
      onClick,
      href,
      label,
      ...rest
    } = props

    const hasChildren = useMemo(() => !!children, [children])

    return (
      <Component
        as={as}
        ref={ref}
        role="button"
        type={type}
        className={cx('Button', className)}
        href={as === 'a' && isDisabled ? undefined : href}
        onClick={onClick}
        disabled={isDisabled || isLoading}
        aria-disabled={isDisabled}
        aria-label={label}
        data-active={dataAttr(isActive)}
        data-loading={dataAttr(isLoading)}
        tabIndex={isDisabled ? undefined : 0}
        floatIcon={floatIcon}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isActive={isActive}
        isRounded={isRounded}
        size={size}
        css={sizeStyles(hasChildren)[size]}
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
            {(iconLeft || icon) && (
              <ButtonIcon
                className="Button__icon"
                size={size}
                iconLeft={iconLeft || icon}
                floatIcon={floatIcon}
                label={label}
                parentHasChildren={hasChildren}
              />
            )}

            <div css={[floatIcon && tw`flex-1`]}>{children}</div>

            {iconRight && (
              <ButtonIcon
                className="Button__icon"
                size={size}
                iconRight={iconRight}
                floatIcon={floatIcon}
                label={label}
                parentHasChildren={hasChildren}
              />
            )}
          </Fragment>
        )}
      </Component>
    )
  }
)

// -- ButtonIcon

export type ButtonIconProps = React.HTMLAttributes<HTMLElement> & {
  iconLeft?: IconType
  iconRight?: IconType
  floatIcon?: boolean
  label?: string
  parentHasChildren?: boolean
  size: ElementSize
}

const iconSizeStyle = {
  xs: tw`h-4 w-4`,
  sm: tw`h-4 w-4`,
  md: tw`h-5 w-5`,
  lg: tw`h-5 w-5`,
  xl: tw`h-6 w-6`
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

/** The icon to embedd in a button */
export function ButtonIcon({
  size,
  iconLeft,
  iconRight,
  floatIcon,
  label,
  parentHasChildren
}: ButtonIconProps) {
  return (
    <Fragment>
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      {iconLeft && (
        <Icon
          css={[
            iconSizeStyle[size],
            parentHasChildren && leftIconStyle[size],
            floatIcon && [tw`mr-0`]
          ]}
        >
          {iconLeft}
        </Icon>
      )}

      {iconRight && (
        <Icon
          css={[
            iconSizeStyle[size],
            parentHasChildren && rightIconStyle[size],
            floatIcon && [tw`ml-0`]
          ]}
        >
          {iconRight}
        </Icon>
      )}
    </Fragment>
  )
}
