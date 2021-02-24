import React from 'react'
import 'twin.macro'
import { Button } from '@kai/components'

export const Inputs = () => {
  return (
    <div tw="h-screen bg-white">
      <div tw="container">
        <div tw="p-8 flex space-x-4 flex-wrap">
          <Button intent="success">Hello</Button>
          {/* <FormLabel>Hello Inputs</FormLabel> */}
        </div>
      </div>
    </div>
  )
}
