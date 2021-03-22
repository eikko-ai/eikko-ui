import React, { useState, useCallback, cloneElement } from 'react'
import 'twin.macro'
import { cx, forwardRef, createContext } from '../util'
import { InputProps } from './Input'

type BaseInputProps = Pick<InputProps, 'inputSize' | 'variant'>

export type InputGroupProps = BaseInputProps & React.HTMLAttributes<HTMLDivElement>

type GroupContext = Omit<ReturnType<typeof useInputGroupProvider>, 'htmlProps'>

const [InputGroupProvider, useInputGroup] = createContext<GroupContext>({
  strict: false,
  name: 'InputGroupContext'
})

export { useInputGroup }

function useMounted() {
  const [isMounted, setMounted] = useState(false)
  const mount = useCallback(() => setMounted(true), [])
  const unmount = useCallback(() => setMounted(false), [])
  return { isMounted, mount, unmount }
}

type UseMountedReturn = ReturnType<typeof useMounted>

export const useInputGroupProvider = (props: InputGroupProps) => {
  const { inputSize = 'md', variant = 'standard', ...htmlProps } = props

  const leftElement = useMounted() as UseMountedReturn | undefined
  const rightElement = useMounted() as UseMountedReturn | undefined
  const leftAddon = useMounted() as UseMountedReturn | undefined
  const rightAddon = useMounted() as UseMountedReturn | undefined

  return {
    leftElement,
    rightElement,
    leftAddon,
    rightAddon,
    inputSize,
    variant,
    htmlProps
  }
}

export const InputGroup = forwardRef<InputGroupProps, 'div'>((props: InputGroupProps, ref) => {
  const { children, className, ...rest } = props
  const { htmlProps, ...context } = useInputGroupProvider(rest)

  const content = React.Children.map(children, (child: React.ReactNode) => {
    if (!React.isValidElement(child)) {
      return null
    }

    return cloneElement(child, {
      inputSize: child.props.inputSize || context.inputSize,
      variant: child.props.variant || context.variant
    })
  })

  return (
    <div ref={ref} className={cx('InputGroup', className)} tw="w-full flex relative" {...htmlProps}>
      <InputGroupProvider value={context}>{content}</InputGroupProvider>
    </div>
  )
})
