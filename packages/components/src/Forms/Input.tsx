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

// BUG: There is a bug in styled-components that make GlobaStyles not being imported in the correct way, therefore overwritting our base styles from tailwind forms (styled-components 5.2.1). To fix this for now let's use important!
const baseStyles = tw`
    w-full!
    block!
    sm:text-sm!
    border-gray-300! rounded-md!
    shadow-sm!
    focus:ring-primary-500! focus:border-primary-500!
  `

const Component = styled.input(({}: InputProps) => [baseStyles])

export const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const { type = 'text' } = props
  const inputProps = useFormControl<HTMLInputElement>(props)

  return (
    <Component ref={ref} className={cx('Input', props.className)} type={type} {...inputProps} />
  )
})
