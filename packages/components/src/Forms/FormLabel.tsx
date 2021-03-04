import React from 'react'
import tw from 'twin.macro'
import { cx, forwardRef, CompProps, dataAttr } from '../util'
import { useFormControlContext } from './FormControl'
import { VisuallyHidden } from '../Abstract'

export interface FormLabelOptions {
  /** Hidden label */
  isHidden?: boolean
}

type FormLabelProps = CompProps<'label', FormLabelOptions>

export const FormLabel = forwardRef<FormLabelProps, 'label'>(
  ({ children, isHidden, ...props }: FormLabelProps, ref: any) => {
    const field = useFormControlContext()

    const child = (
      <label
        ref={ref}
        id={props.id ?? field?.labelId}
        htmlFor={props.htmlFor ?? field?.id}
        data-focus={dataAttr(field?.isFocused)}
        data-disabled={dataAttr(field?.isDisabled)}
        data-invalid={dataAttr(field?.isInvalid)}
        data-loading={dataAttr(field?.isLoading)}
        data-readonly={dataAttr(field?.isReadOnly)}
        className={cx('Label', props.className)}
        css={[
          tw`inline-block text-sm font-medium leading-5 mb-1 ml-1`,
          tw`text-gray-700 dark:text-gray-300`,
          field?.isDisabled && tw`text-gray-300`
        ]}
        {...props}
      >
        {children}
        <RequiredIndicator />
      </label>
    )

    return isHidden ? <VisuallyHidden>{child}</VisuallyHidden> : child
  }
)

export const RequiredIndicator = (props: React.HTMLAttributes<HTMLSpanElement>) => {
  const field = useFormControlContext()
  if (!field || !field.isRequired) return null

  const _className = cx('RequiredIndicator', props.className)

  return (
    <span
      {...props}
      className={_className}
      role="presentation"
      aria-hidden="true"
      title="Required"
      css={[tw`ml-1`, field.isDisabled ? tw`text-red-300` : tw`text-red-500`]}
    >
      {props.children || '*'}
    </span>
  )
}
