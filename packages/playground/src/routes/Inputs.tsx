import React from 'react'
import 'twin.macro'
import { FormControl, Input } from '@kai/components'

export const Inputs = () => {
  return (
    <div tw="h-screen bg-background">
      <div tw="p-8 flex space-x-4 flex-wrap">
        <FormControl isInvalid>
          <Input />
        </FormControl>
      </div>
    </div>
  )
}
