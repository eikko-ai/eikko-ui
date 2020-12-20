import React from 'react'
import tw, { GlobalStyles } from 'twin.macro'
import { Button } from '@kai/components'

const App = () => (
  <div>
    <GlobalStyles />
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`,
        tw`bg-gradient-to-b from-primary-500 to-blue-100`
      ]}
    >
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Button>Save</Button>
      </div>
    </div>
  </div>
)

export default App
