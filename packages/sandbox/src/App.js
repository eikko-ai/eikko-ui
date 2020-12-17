import React from 'react'
import tw, { GlobalStyles } from 'twin.macro'
import { Button } from '@kai/ui'

const App = () => (
  <div>
    <GlobalStyles />
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`,
        tw`bg-gradient-to-b from-primary-400 to-red-200`
      ]}
    >
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Button>Click</Button>
      </div>
    </div>
  </div>
)

export default App
