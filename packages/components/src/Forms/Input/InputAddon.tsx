import React from 'react'
import tw from 'twin.macro'
import { cx, forwardRef, CompProps } from '../../util'
import { useSafeLayoutEffect } from '../../hooks'
import { useInputGroup } from './InputGroup'
import { useFormControlContext } from '../FormControl'

type Placement = 'left' | 'right'

export interface InputAddonOptions {
  /** Addon placement on the input element.  */
  placement?: Placement
}

export function useInputAddonStyle() {
  return {
    base: tw`inline-flex items-center border border-gray-300 bg-gray-50 text-gray-500`,
    size: {
      left: {
        xs: tw`px-3 rounded-l-md sm:text-xs`,
        sm: tw`px-3 rounded-l-md sm:text-sm`,
        md: tw`px-3 rounded-l-md sm:text-sm`,
        lg: tw`px-3.5 rounded-l-md sm:text-base`,
        xl: tw`px-4 rounded-l-md sm:text-lg`
      },
      right: {
        xs: tw`px-3 rounded-r-md sm:text-xs`,
        sm: tw`px-3 rounded-r-md sm:text-sm`,
        md: tw`px-3 rounded-r-md sm:text-sm`,
        lg: tw`px-3 rounded-r-md sm:text-base`,
        xl: tw`px-3 rounded-r-md sm:text-lg`
      }
    },
    placement: {
      left: tw`border-r-0 order-first`,
      right: tw`border-l-0 order-last`
    }
  }
}

type InputAddonProps = CompProps<'div', InputAddonOptions>

/**
 * InputAddon
 *
 * Element to append or prepend to an input
 */
export const InputAddon = forwardRef<InputAddonProps, 'div'>(
  ({ children, placement = 'left', ...rest }: InputAddonProps, ref) => {
    const { inputSize } = useInputGroup()
    const field = useFormControlContext()
    const styles = useInputAddonStyle()

    return (
      <div
        ref={ref}
        tw="inline-flex items-center border border-gray-300 bg-gray-50 text-gray-500"
        css={[
          styles.base,
          styles.placement[placement],
          styles.size[placement][inputSize],
          field?.isDisabled && tw`opacity-40`
        ]}
      >
        {children}
      </div>
    )
  }
)

/**
 * InputLeftAddon
 *
 * Element to append to the left of an input
 */
export const InputLeftAddon = forwardRef<InputAddonProps, 'div'>((props: InputAddonProps, ref) => {
  const { leftAddon } = useInputGroup()

  useSafeLayoutEffect(() => {
    leftAddon?.mount()
    return () => leftAddon?.unmount()
  }, [])

  return (
    <InputAddon
      ref={ref}
      className={cx('InputLeftAddon', props.className)}
      placement="left"
      {...props}
    />
  )
})

/**
 * InputRightAddon
 *
 * Element to append to the right of an input
 */
export const InputRightAddon = forwardRef<InputAddonProps, 'div'>((props: InputAddonProps, ref) => {
  const { rightAddon } = useInputGroup()

  useSafeLayoutEffect(() => {
    rightAddon?.mount()
    return () => rightAddon?.unmount()
  }, [])

  return (
    <InputAddon
      ref={ref}
      className={cx('InputRightAddon', props.className)}
      placement="right"
      {...props}
    />
  )
})
