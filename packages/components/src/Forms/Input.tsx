import React from 'react'
import tw, { css, theme } from 'twin.macro'
import { cx } from '../util'
import { ElementSize } from '../theme'
import { FormControlOptions, useFormControl } from './FormControl'
import { useInputGroup } from './InputGroup'

export type InputSize = ElementSize

export type InputVariant = 'standard' | 'solid' | 'underline' | 'unstyled'

export interface InputOptions {
  /** The variant of the input: standard, modern, flushed or unstyled. */
  variant?: InputVariant
  /** The size of the input element. */
  inputSize?: InputSize
}

export interface InputProps
  extends InputOptions,
    FormControlOptions,
    React.InputHTMLAttributes<HTMLInputElement> {}

// BUG: There is a bug in styled-components that make GlobaStyles not being imported in the correct way, therefore overwritting our base styles from tailwind forms (styled-components 5.2.1). To fix this for now let's use important!
export function useInputStyle() {
  return {
    base: [
      tw`w-full block sm:text-sm! transition-colors`,

      css`
        &::placeholder {
          color: ${theme`colors.gray.400`};
        }

        &:not(:focus, :disabled) {
          ${tw`hover:border-gray-400! dark:hover:border-dark-500!`}
        }

        &:not(:disabled) {
          ${tw`active:bg-blue-50 dark:active:bg-dark-800`}
        }
      `
    ],

    size: {
      xs: tw`h-6 text-xs px-2.5`,
      sm: tw`h-8 text-sm px-3`,
      md: tw`h-10 text-base px-3`,
      lg: tw`h-12 text-lg px-3.5`,
      xl: tw`h-14 text-xl px-4`
    },

    error: tw``,

    disabled: tw`bg-red-100 opacity-70 cursor-not-allowed`,

    variants: {
      standard: tw`
        bg-white dark:bg-dark-800
        text-gray-700 dark:text-gray-100
        focus:ring-blue-500! focus:border-blue-500! focus:ring-opacity-60!
        border-gray-300! dark:border-dark-600! rounded-md!
        shadow-sm!
      `,

      solid: tw``,

      underline: tw``,

      unstyled: tw``
    },

    leftElement: {
      xs: tw`pl-8!`,
      sm: tw`pl-9!`,
      md: tw`pl-10!`,
      lg: tw`pl-11!`,
      xl: tw`pl-12!`
    },

    rightElement: {
      xs: tw`pr-8!`,
      sm: tw`pr-9!`,
      md: tw`pr-10!`,
      lg: tw`pr-11!`,
      xl: tw`pr-12!`
    }
  }
}

export const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const { type = 'text', inputSize } = props
  const inputProps = useFormControl<HTMLInputElement>(props)
  const group = useInputGroup()
  const styles = useInputStyle()

  const size = inputSize ?? group?.inputSize ?? 'md'
  const variant = props.variant ?? group?.variant ?? 'standard'
  const isDisabled = inputProps.disabled

  const inputStyle = [
    styles.base,
    styles.size[size],
    styles.variants[variant],
    styles.error,
    isDisabled && styles.disabled,
    group?.leftElement?.isMounted && styles.leftElement[size],
    group?.rightElement?.isMounted && styles.rightElement[size]
    // group?.leftAddon?.isMounted && styles.leftAddon,
    // group?.rightAddon?.isMounted && styles.rightAddon,
  ]

  return (
    <input
      ref={ref}
      className={cx('Input', props.className)}
      type={type}
      css={inputStyle}
      {...inputProps}
    />
  )
})
