import React from 'react'
import tw, { styled } from 'twin.macro'
import { cx } from '../util'
import { ElementSize } from '../theme'
import { FormControlOptions, useFormControl } from './FormControl'

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

export const inputSizeStyles = {
  xs: tw`h-6 text-xs px-2.5`,
  sm: tw`h-8 text-sm px-3`,
  md: tw`h-10 text-base px-3`,
  lg: tw`h-12 text-lg px-3.5`,
  xl: tw`h-14 text-xl px-4`
}

// BUG: There is a bug in styled-components that make GlobaStyles not being imported in the correct way, therefore overwritting our base styles from tailwind forms (styled-components 5.2.1). To fix this for now let's use important!
const baseStyles = tw`
    w-full
    block
    sm:text-sm!
    border-gray-300! dark:border-dark-600! rounded-md!
    shadow-sm!
    dark:text-gray-100
    bg-white dark:bg-dark-800
    hover:border-gray-400! dark:hover:border-dark-500!
    focus:ring-blue-500! focus:border-blue-500! focus:ring-opacity-50!
    active:bg-blue-50 dark:active:bg-dark-800
  `

const Component = styled.input(({ inputSize = 'md' }: InputProps) => [
  baseStyles,
  inputSizeStyles[inputSize]
])

export const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const { type = 'text' } = props
  const inputProps = useFormControl<HTMLInputElement>(props)

  return (
    <Component ref={ref} className={cx('Input', props.className)} type={type} {...inputProps} />
  )
})
