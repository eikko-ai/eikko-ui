import React, { Fragment } from 'react'
import tw from 'twin.macro'
import { ElementSize } from '../theme'
import { Icon, IconType } from '../Icon'
import { VisuallyHidden } from '../Abstract'

export type ButtonIconProps = React.HTMLAttributes<HTMLElement> & {
  iconLeft?: IconType
  iconRight?: IconType
  floatIcon?: boolean
  label?: string
  parentHasChildren?: boolean
  size: ElementSize
}

export function useButtonIconStyle() {
  return {
    size: {
      xs: tw`h-4 w-4`,
      sm: tw`h-4 w-4`,
      md: tw`h-5 w-5`,
      lg: tw`h-5 w-5`,
      xl: tw`h-6 w-6`
    },

    leftIcon: {
      xs: tw`-ml-0.5 mr-2`,
      sm: tw`-ml-0.5 mr-2`,
      md: tw`-ml-1 mr-3`,
      lg: tw`-ml-1 mr-3`,
      xl: tw`-ml-1.5 mr-3`
    },

    rightIcon: {
      xs: tw`ml-2 -mr-0.5`,
      sm: tw`ml-2 -mr-1`,
      md: tw`ml-3 -mr-1`,
      lg: tw`ml-3 -mr-1`,
      xl: tw`ml-3 -mr-1.5`
    }
  }
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
  const styles = useButtonIconStyle()

  return (
    <Fragment>
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      {iconLeft && (
        <Icon
          css={[
            styles.size[size],
            parentHasChildren && styles.leftIcon[size],
            floatIcon && [tw`mr-0`]
          ]}
        >
          {iconLeft}
        </Icon>
      )}

      {iconRight && (
        <Icon
          css={[
            styles.size[size],
            parentHasChildren && styles.rightIcon[size],
            floatIcon && [tw`ml-0`]
          ]}
        >
          {iconRight}
        </Icon>
      )}
    </Fragment>
  )
}
