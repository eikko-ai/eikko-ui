import React from 'react'
import 'twin.macro'
import { FormControl, FormLabel, Input } from '@kai/components'

export const Inputs = () => {
  return (
    <div tw="h-screen bg-background dark:bg-background-dark">
      <div tw="p-8">
        <FormControl isRequired>
          <FormLabel>Hello</FormLabel>
          <Input placeholder="you@example.com" />
        </FormControl>
      </div>
    </div>
  )
}
