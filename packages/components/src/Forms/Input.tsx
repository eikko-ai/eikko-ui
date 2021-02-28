import React from 'react'
import tw, { styled } from 'twin.macro'
import { cx } from '../util'
import { ElementSize } from '../theme'
import { FormControlOptions, useFormControl } from './FormControl'

export type InputSize = ElementSize

export type InputVariant = 'standard' | 'filled' | 'underline' | 'modern' | 'unstyled'

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

const baseStyles = tw``

const Component = styled.input(({}: InputProps) => [baseStyles])

export const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const inputProps = useFormControl<HTMLInputElement>(props)

  return (
    <Component ref={ref} className={cx('Input', props.className)} type="text" {...inputProps} />
  )
})
