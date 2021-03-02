import React from 'react'
import { ColorModeProvider } from './colorMode'
import { CSSReset } from './reset'

export interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props

  return (
    <>
      <ColorModeProvider defaultValue={'dark'} useSystemColorMode={true}>
        <CSSReset />
        {children}
      </ColorModeProvider>
    </>
  )
}
