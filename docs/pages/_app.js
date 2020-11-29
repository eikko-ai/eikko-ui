import React from 'react'
import { ThemeProvider, theme } from '@eikko-ui/lib'

export default function CustomApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} key={router.route} />
    </ThemeProvider>
  )
}
