import React, { useContext } from 'react'
import { ThemeContext, Theme } from '../theme'

export function useTheme<T extends {} = Theme>() {
  const theme = useContext((ThemeContext as unknown) as React.Context<T | undefined>)
  if (!theme) {
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ThemeProvider />`'
    )
  }

  return theme
}
