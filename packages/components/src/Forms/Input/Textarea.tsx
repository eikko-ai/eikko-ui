import React from 'react'
import tw, { styled } from 'twin.macro'
import { cx, forwardRef, Comp, CompProps } from '../../util'
import { FormControlOptions, useFormControl } from '../FormControl'
import { InputOptions, Input } from './Input'

export interface TextareaOptions extends InputOptions {}

export type TextareaProps = FormControlOptions & CompProps<'textarea', TextareaOptions>

const StyledTextarea: Comp<'textarea', TextareaProps> = styled(Input)`
  ${tw`min-h-20 leading-tight`}
`

export const Textarea = forwardRef<TextareaProps, 'textarea'>((props, ref) => {
  const { className, rows, ...rest } = props
  const inputProps = useFormControl<HTMLTextAreaElement>(rest)

  return (
    // <Input
    //   as="textarea"
    //   ref={ref}
    //   className={cx('Textarea', className)}
    //   rows={rows}
    //   {...inputProps}
    // />

    // <StyledTextarea
    //   as="textarea"
    //   ref={ref}
    //   className={cx('Textarea', className)}
    //   rows={rows}
    //   {...inputProps}
    // />

    <div>Hello</div>
  )
})
