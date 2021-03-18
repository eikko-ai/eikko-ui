import React from 'react'
import tw from 'twin.macro'
import { cx, forwardRef, CompProps } from '../util'
import { useSafeLayoutEffect } from '../hooks'
import { useFormControlContext } from './FormControl'

type FormHelpTextProps = CompProps<'div'>

/**
 * FormHelperText
 *
 * Assistive component that conveys additional guidance
 * about the field, such as how it will be used and what
 * types in values should be provided
 */
export const FormHelperText = forwardRef<FormHelpTextProps, 'div'>(
  (props: FormHelpTextProps, ref: any) => {
    return <div>Hello</div>
  }
)
