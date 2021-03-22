import React from 'react'
import tw from 'twin.macro'
import { cx, forwardRef, CompProps, omit } from '../../util'
import { useSafeLayoutEffect } from '../../hooks'
import { useFormControlContext } from '../FormControl'
import { InputOptions } from './Input'
import { useInputGroup } from './InputGroup'

export interface InputElementOptions extends InputOptions {
  placement?: 'left' | 'right'
}

type InputElementProps = CompProps<'div', InputElementOptions>

const sizeStyle = {
  left: {
    xs: tw`w-7 h-7 pl-3 -ml-0.5`,
    sm: tw`w-8 h-8 pl-3.5 -ml-0.5`,
    md: tw`w-10 h-10 pl-5 -ml-1`,
    lg: tw`w-12 h-12 pl-6 -ml-1.5`,
    xl: tw`w-14 h-14 pl-7 -ml-2`
  },
  right: {
    xs: tw`w-7 h-7 pr-3 -mr-0.5`,
    sm: tw`w-8 h-8 pr-3.5 -mr-0.5`,
    md: tw`w-10 h-10 pr-5 -mr-1`,
    lg: tw`w-12 h-12 pr-6 -mr-1.5`,
    xl: tw`w-14 h-14 pr-7 -mr-2`
  }
}

const InputElement = forwardRef<InputElementProps, 'div'>((props: InputElementProps, ref: any) => {
  const { placement = 'left', ...rest } = props
  const { inputSize } = useInputGroup()
  const field = useFormControlContext()

  const elementProps = omit(rest, ['inputSize', 'variant'])

  return (
    <div
      ref={ref}
      tw="absolute inset-y-0 flex items-center text-gray-400 pointer-events-none"
      css={[
        sizeStyle[placement][inputSize],
        placement === 'left' && tw`left-0`,
        placement === 'right' && tw`right-0`,
        field.isDisabled && tw`opacity-40`,
        field.isInvalid && tw`text-red-500`
      ]}
      {...elementProps}
    />
  )
})

export const InputLeftElement = forwardRef<InputElementProps, 'div'>(
  (props: InputElementProps, ref: any) => {
    const { leftElement } = useInputGroup()

    useSafeLayoutEffect(() => {
      leftElement?.mount()
      return () => leftElement?.unmount()
    }, [])

    return (
      <InputElement
        ref={ref}
        className={cx('InputLeftElement', props.className)}
        placement="left"
        {...props}
      />
    )
  }
)

export const InputRightElement = forwardRef<InputElementProps, 'div'>(
  (props: InputElementProps, ref: any) => {
    const { rightElement } = useInputGroup()

    useSafeLayoutEffect(() => {
      rightElement?.mount()
      return () => rightElement?.unmount()
    }, [])

    return (
      <InputElement
        ref={ref}
        className={cx('InputRightElement', props.className)}
        placement="right"
        {...props}
      />
    )
  }
)
