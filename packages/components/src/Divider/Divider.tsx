import React, { useMemo } from 'react'
import tw, { css, theme } from 'twin.macro'
import { cx, forwardRef, CompProps } from '../util'
import { Intent, Alignment } from '../theme'

export type DividerIntent = Intent
export type DividerAlign = Alignment

export interface DividerOptions {
  /** Controls the colour of the divider. */
  intent?: DividerIntent
  /** The color of the content background. Defaults to the theme background color. */
  bg?: string
  /** Alignment of the divider's text. */
  align?: DividerAlign
  /** The Divider height */
  volume?: number
}

const getTextColor = function (intent: Intent) {
  const colors: { [key in Intent]?: string } = {
    primary: theme`colors.primary.500`,
    secondary: theme`colors.secondary.500`,
    light: theme`colors.light.500`,
    dark: theme`colors.dark.500`,
    info: theme`colors.info.500`,
    success: theme`colors.success.500`,
    warning: theme`colors.warning.500`,
    danger: theme`colors.danger.500`
  }
  return colors[intent] || colors['dark']
}

const getBorderColor = function (intent: Intent) {
  const colors: { [key in Intent]?: string } = {
    primary: theme`colors.primary.300`,
    secondary: theme`colors.secondary.300`,
    light: theme`colors.light.300`,
    dark: theme`colors.dark.300`,
    info: theme`colors.info.300`,
    success: theme`colors.success.300`,
    warning: theme`colors.warning.300`,
    danger: theme`colors.danger.300`
  }
  return colors[intent] || colors['dark']
}

type DividerProps = CompProps<'div', DividerOptions>

export const Divider = forwardRef<DividerProps, 'div'>(
  ({ children, className, intent = 'dark', bg, ...rest }: DividerProps, ref: any) => {
    const textColor = useMemo(() => getTextColor(intent), [intent])
    const borderColor = useMemo(() => getBorderColor(intent), [intent])

    const childrenIsText = typeof children === 'string'

    return (
      <div
        ref={ref}
        className={cx('Divider', className)}
        role="separator"
        tw="w-auto max-w-full relative"
        {...rest}
      >
        <div tw="absolute inset-0 flex items-center" aria-hidden="true">
          <div
            tw="w-full border-t"
            css={css`
              border-color: ${borderColor};
            `}
          ></div>
        </div>

        {children && (
          <div className="Divider__content" tw="relative flex justify-center">
            <span
              tw="px-2 text-sm"
              css={[
                bg
                  ? css`
                      background-color: ${bg};
                    `
                  : childrenIsText && tw`bg-background dark:bg-background-dark`,
                textColor
                  ? css`
                      color: ${textColor};
                    `
                  : tw`text-gray-500`
              ]}
            >
              {children}
            </span>
          </div>
        )}
      </div>
    )
  }
)
