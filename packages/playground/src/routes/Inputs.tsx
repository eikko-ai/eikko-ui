import React from 'react'
import 'twin.macro'
import { Button, FormControl, FormLabel, Input, InputGroup } from '@kai/components'
import { PaperAirplaneIcon } from '@kai/icons'

export const Inputs = () => {
  return (
    <div tw="h-screen bg-background dark:bg-background-dark">
      <div tw="p-8">
        <FormControl isRequired>
          <FormLabel>Hello</FormLabel>
          <Input placeholder="you@example.com" />
        </FormControl>

        <div tw="mt-4 flex -space-x-px">
          <div tw="w-1/2 flex-1 min-w-0 mr-2">
            <Input placeholder="you@example.com" />
          </div>
          <div tw="w-1/2 flex-1 min-w-0">
            <Input placeholder="you@example.com" />
          </div>
        </div>

        <Button tw="mt-4" icon={<PaperAirplaneIcon tw="text-primary-400" />} isWide floatIcon>
          Submit
        </Button>
      </div>

      <div tw="mt-8">
        <InputGroup>
          <Input placeholder="you@example.com" />
        </InputGroup>
      </div>
    </div>
  )
}
