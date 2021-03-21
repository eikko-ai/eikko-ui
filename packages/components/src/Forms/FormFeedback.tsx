import React from 'react'
import 'twin.macro'
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
  (props: FormHelpTextProps, ref) => {
    const field = useFormControlContext()

    /**
     * Notify the field context when the help text is rendered on
     * screen, so we can apply the correct `aria-describedby` to the field (e.g. input, textarea)
     */
    useSafeLayoutEffect(() => {
      field?.setHasHelpText.on()
      return () => field?.setHasHelpText.off()
    }, [])

    const _className = cx('FormHelperText', props?.className)

    return (
      <div
        ref={ref}
        className={_className}
        id={props.id ?? field?.helpTextId}
        tw="flex text-sm items-center ml-1 mt-2 text-gray-500"
        {...props}
      />
    )
  }
)

export type FormErrorMessageProps = CompProps<'div'>

/**
 * Used to provide feedback about an invalid input,
 * and suggest clear instrctions on how to fix it.
 */
export const FormErrorMessage = forwardRef<FormErrorMessageProps, 'div'>(
  (props: FormErrorMessageProps, ref) => {
    const field = useFormControlContext()

    if (!field?.isInvalid) return null

    return (
      <div
        {...props}
        ref={ref}
        className={cx('FormErrorMessage', props?.className)}
        id={props.id ?? field?.helpTextId}
        tw="flex text-sm items-center ml-1 mt-2 text-red-600 dark:text-red-500"
      />
    )
  }
)
