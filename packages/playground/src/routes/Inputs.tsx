import React from 'react'
import 'twin.macro'
import { FormControl, Input } from '@kai/components'

export const Inputs = () => {
  return (
    <div tw="h-screen bg-background">
      <div tw="p-8">
        <FormControl>
          <Input />
        </FormControl>
      </div>
    </div>
  )
}
