import React from 'react'
import tw, { css } from 'twin.macro'
import { cx, forwardRef, CompProps } from '../../util'
import { ElementSize } from '../../theme'
import { FormControlOptions, useFormControl, useFormControlContext } from '../FormControl'
import { useInputGroup } from './InputGroup'

export type InputSize = ElementSize

export type InputVariant = 'standard' | 'solid' | 'underline' | 'unstyled'

export interface InputOptions {
  /** The variant of the input: standard, modern, flushed or unstyled. */
  variant?: InputVariant
  /** The size of the input element. */
  inputSize?: InputSize
}

export interface InputProps extends CompProps<'input', InputOptions>, FormControlOptions {}

// BUG: There is a bug in styled-components that make GlobaStyles not being imported in the correct way, therefore overwritting our base styles from tailwind forms (styled-components 5.2.1). To fix this for now let's use important!
export function useInputStyle() {
  return {
    base: [
      tw`w-full block transition-colors`,

      css`
        &:not(:focus, :disabled) {
          ${tw`hover:border-gray-400! dark:hover:border-dark-500!`}
        }

        &:not(:disabled, :read-only) {
          ${tw`active:bg-primary-50 dark:active:bg-dark-800`}
        }
      `
    ],

    size: {
      xs: tw`h-7 text-xs! px-3!`,
      sm: tw`h-8 text-sm! px-3!`,
      md: tw`h-10 text-sm! px-3!`,
      lg: tw`h-12 text-base! px-3.5!`,
      xl: tw`h-14 text-lg! px-4!`
    },

    error: tw`
      border-red-500!
      focus:border-red-500! focus:ring-red-600!
      active:bg-red-50!
      placeholder-red-300
    `,

    disabled: tw`opacity-50 shadow-none cursor-not-allowed`,

    readOnly: tw`select-all shadow-none`,

    variants: {
      standard: tw`
        text-gray-700!
        focus:border-primary-600! focus:ring-primary-600!
        border-gray-300! rounded-md!
        placeholder-gray-400
        shadow-sm
        dark:bg-dark-800 dark:text-gray-100!
        dark:focus:border-primary-600! dark:focus:ring-primary-600!
        dark:border-dark-600!
      `,

      solid: tw``,

      underline: tw``,

      unstyled: tw``
    },

    leftElement: {
      xs: tw`pl-8!`,
      sm: tw`pl-10!`,
      md: tw`pl-12!`,
      lg: tw`pl-14!`,
      xl: tw`pl-16!`
    },

    rightElement: {
      xs: tw`pr-8!`,
      sm: tw`pr-10!`,
      md: tw`pr-12!`,
      lg: tw`pr-14!`,
      xl: tw`pr-16!`
    },

    leftAddon: tw`rounded-none! rounded-r-md! z-10`,

    rightAddon: tw`rounded-none! rounded-l-md! z-10`
  }
}

export const Input = forwardRef<InputProps, 'input'>(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { type = 'text', inputSize } = props
    const inputProps = useFormControl<HTMLInputElement>(props)
    const field = useFormControlContext()
    const group = useInputGroup()
    const styles = useInputStyle()

    const size = inputSize ?? group?.inputSize ?? 'md'

    const variant = props.variant ?? group?.variant ?? 'standard'
    const isDisabled = inputProps.disabled
    const isReadOnly = props.isReadOnly ?? field?.isReadOnly
    const isInvalid = props.isInvalid ?? field?.isInvalid

    const inputStyle = [
      styles.base,
      styles.size[size],
      styles.variants[variant],
      isInvalid && styles.error,
      isDisabled && styles.disabled,
      isReadOnly && styles.readOnly,
      group?.leftElement?.isMounted && styles.leftElement[size],
      group?.rightElement?.isMounted && styles.rightElement[size],
      group?.leftAddon?.isMounted && styles.leftAddon,
      group?.rightAddon?.isMounted && styles.rightAddon
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
  }
)
