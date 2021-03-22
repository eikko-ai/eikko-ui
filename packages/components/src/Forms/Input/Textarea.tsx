import React from 'react'
import tw, { styled } from 'twin.macro'
import { cx, forwardRef, CompProps } from '../../util'
import { FormControlOptions, useFormControl, useFormControlContext } from '../FormControl'
import { useInputGroup } from './InputGroup'
import { useInputStyle, InputVariant } from './Input'

export interface TextareaOptions {
  /** The variant of the textarea input: standard, modern, flushed or unstyled. */
  variant?: InputVariant
}

export interface TextareaProps extends CompProps<'textarea'>, TextareaOptions, FormControlOptions {}

export const Textarea = forwardRef<TextareaProps, 'textarea'>(
  (props: TextareaProps, ref: React.Ref<HTMLTextAreaElement>) => {
    const { className, ...rest } = props
    const inputProps = useFormControl<HTMLTextAreaElement>(rest)
    const field = useFormControlContext()
    const group = useInputGroup()
    const styles = useInputStyle()

    const variant = props.variant ?? group?.variant ?? 'standard'
    const isDisabled = inputProps.disabled
    const isReadOnly = props.isReadOnly ?? field?.isReadOnly
    const isInvalid = props.isInvalid ?? field?.isInvalid

    const inputStyle = [
      styles.base,
      styles.variants[variant],
      isInvalid && styles.error,
      isDisabled && styles.disabled,
      isReadOnly && styles.readOnly
    ]

    return (
      <textarea
        ref={ref}
        className={cx('Textarea', props.className)}
        css={inputStyle}
        {...inputProps}
      />
    )
  }
)
