import React from 'react'
import tw, { css } from 'twin.macro'
import { cx, forwardRef, CompProps, omit } from '../util'
import { useSafeLayoutEffect } from '../hooks'
import { InputOptions, useInputStyle } from './Input'
import { useInputGroup } from './InputGroup'
import { useFormControlContext } from './FormControl'

export interface InputElementOptions extends InputOptions {
  placement?: 'left' | 'right'
}

type InputElementProps = CompProps<'div', InputElementOptions>

const InputElement = forwardRef<InputElementProps, 'div'>((props: InputElementProps, ref: any) => {
  const { placement = 'left', ...rest } = props
  const { inputSize } = useInputGroup()
  const field = useFormControlContext()

  const elementProps = omit(rest, ['inputSize', 'variant'])

  const styles = useInputStyle()

  return (
    <div
      ref={ref}
      // css={[
      //   css`
      //     ${placement}:0;
      //   `,
      //   field.isDisabled && tw`opacity-40`,
      //   // field.isInvalid && errorBorderColor && tw`text-red-500`,
      //   tw`text-gray-500`,
      //   styles.size[inputSize]
      // ]}
      css={[styles.size[inputSize]]}
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
