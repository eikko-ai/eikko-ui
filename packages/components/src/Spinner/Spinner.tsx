import React from 'react'
import tw, { styled } from 'twin.macro'
import { cx } from '../util'
import { ElementSize } from '../theme'
import { VisuallyHidden } from '../Abstract'

export interface SpinnerOptions {
  /** Size of the spinner element. */
  size?: ElementSize
  /** The delay (in ms) before the spinner will appear. */
  delay?: number
  /** Animation speed. */
  speed?: 'slow' | 'normal' | 'fast'
  /** Use an optional label. */
  label?: string
  /** Attempt to center the spinner in the parent element. */
  isCentered?: boolean
}

interface SpinnerProps extends SpinnerOptions, React.HTMLAttributes<HTMLElement> {
  /** Custom component to be rendered. Defaults to div. */
  as?: React.ElementType<any>
}

const sizeStyles = {
  xs: tw`w-2 h-2`,
  sm: tw`w-3 h-3`,
  md: tw`w-4 h-4`,
  lg: tw`w-5 h-5`,
  xl: tw`w-6 h-6`
}

const baseStyles = tw`
  flex
  transition-opacity
  duration-500
  ease-in-out
`

const Component = styled.div(({ isCentered }: SpinnerProps) => [
  baseStyles,
  isCentered && tw`w-full h-full flex items-center self-center justify-center`
])

const SpinnerIcon = ({ size = 'md', speed = 'normal' }: SpinnerProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      css={[
        sizeStyles[size],
        speed == 'slow' && tw`animate-spin-slow`,
        speed == 'normal' && tw`animate-spin`,
        speed == 'fast' && tw`animate-spin-fast`
      ]}
    >
      <circle
        tw="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="8"
      ></circle>
      <path
        tw="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

const SpinnerLabel = ({ children }: SpinnerProps) => (
  <span tw="block mt-2 text-xs font-medium leading-normal tracking-wide">{children}</span>
)

export const Spinner = React.forwardRef(
  (
    { className, as = 'div', delay = 400, label, ...rest }: SpinnerProps,
    ref: React.Ref<HTMLElement>
  ) => {
    const [show, setShow] = React.useState(delay === 0 ? true : false)

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setShow(true)
      }, delay)

      return () => {
        clearTimeout(timer)
      }
    }, [delay])

    return (
      <Component
        as={as}
        className={cx('Spinner', className)}
        css={[show ? tw`opacity-100` : tw`opacity-0`]}
        {...rest}
      >
        <div
          role="status"
          className="Spinner__container"
          tw="text-center flex flex-col items-center"
        >
          <SpinnerIcon className="Spinner__icon" {...rest} />
          {label ? (
            <SpinnerLabel className="Spinner__label">{label}</SpinnerLabel>
          ) : (
            <VisuallyHidden>Loading</VisuallyHidden>
          )}
        </div>
      </Component>
    )
  }
)
