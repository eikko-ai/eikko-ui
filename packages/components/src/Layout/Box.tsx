import React from 'react'
import tw, { css } from 'twin.macro'
import { forwardRef, CompProps } from '../util'
import { Spinner } from '../Spinner'

export interface BoxOptions {
  /** The display property for the box element. Defaults to 'block' */
  display?:
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'contents'
    | 'hidden'
  /** The size of the shadow to use. */
  elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner'
  /** The size of the shadow to use when hovering the element. */
  hoverElevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner'
  /** Sets the element as disabled. */
  isDisabled?: boolean
  /** Show a loading indicator. */
  isLoading?: boolean
  /** Set a custom spinner element. */
  spinner?: React.ReactElement
  /** The loading spinner size (in px). */
  spinnerSize?: string
  /** Shows a loading text when isLoading is true. */
  loadingText?: string
}

export function useBoxStyle({ display, elevation, hoverElevation }: BoxOptions) {
  return {
    base: [tw`text-gray-900 transition-all`],

    display: [
      display === 'block' && tw`block`,
      display === 'inline-block' && tw`inline-block`,
      display === 'inline' && tw`inline`,
      display === 'flex' && tw`flex`,
      display === 'inline-flex' && tw`inline-flex`,
      display === 'grid' && tw`grid`,
      display === 'inline-grid' && tw`inline-grid`,
      display === 'contents' && tw`contents`,
      display === 'hidden' && tw`hidden`
    ],

    elevation: [
      elevation === 'none' && tw`shadow-none`,
      elevation === 'inner' && tw`shadow-inner`,
      elevation === 'sm' && tw`shadow-sm`,
      elevation === 'md' && tw`shadow-md`,
      elevation === 'lg' && tw`shadow-lg`,
      elevation === 'xl' && tw`shadow-xl`,
      elevation === '2xl' && tw`shadow-2xl`,
      hoverElevation === 'none' && tw`hover:shadow-none`,
      hoverElevation === 'inner' && tw`hover:shadow-inner`,
      hoverElevation === 'sm' && tw`hover:shadow-sm`,
      hoverElevation === 'md' && tw`hover:shadow-md`,
      hoverElevation === 'lg' && tw`hover:shadow-lg`,
      hoverElevation === 'xl' && tw`hover:shadow-xl`,
      hoverElevation === '2xl' && tw`hover:shadow-2xl`
    ]
  }
}

export type BoxProps = CompProps<'div', BoxOptions>

export const Box = forwardRef<BoxProps, 'div'>((props: BoxProps, ref: any) => {
  const { children, isDisabled, isLoading, spinner, spinnerSize, loadingText, ...rest } = props

  const styles = useBoxStyle(rest)

  return (
    <div
      ref={ref}
      css={[
        styles.base,
        styles.display,
        styles.elevation,
        (isLoading || isDisabled) && tw`opacity-40 shadow-none hover:shadow-none`
      ]}
      {...rest}
    >
      {isLoading && (
        <>
          {spinner ? (
            spinner
          ) : (
            <Spinner
              css={[
                spinnerSize &&
                  css`
                    svg {
                      width: ${spinnerSize};
                      height: ${spinnerSize};
                    }
                  `,
                tw`text-gray-800 dark:text-light-100`
              ]}
              delay={50}
              label={loadingText}
              isCentered
            />
          )}
        </>
      )}

      {!isLoading && children}
    </div>
  )
})
