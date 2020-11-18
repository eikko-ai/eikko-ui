# eikko UI

eikko UI is a set of reusable React components built on top of Styled System. It leverages code from Styled Systems, Theme UI, Sancho UI and Chakra UI, the later being its biggest inspiration / source for the API as it uses its custom Styled System.

## Installation

To use eikko UI you need to install it from npm along with its peer dependencies:

```sh
$ npm i @eikko-ai/ui react react-dom
```

## Usage

In order for eikko UI to work correctly, you need to wrap the root of your application with the global provider.

```js
import React from 'react'
import { ThemeUIProvider, theme } from '@eikko-ai/ui'

// Use at the root of your app
function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <App />
    </ThemeUIProvider>
  )
}
```
