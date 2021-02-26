import React from 'react'
import 'twin.macro'
import { Dot } from '@kai/components'

export const Misc = () => {
  return (
    <div tw="h-screen bg-white">
      <div tw="container">
        <div tw="p-8 flex space-x-4 flex-wrap">
          <Dot intent="light" />
          <Dot intent="dark" />
          <Dot intent="info" />
          <Dot intent="success" />
          <Dot intent="warning" />
          <Dot intent="danger" />
        </div>
        <div tw="p-8 flex space-x-4 flex-wrap">
          <Dot>Default</Dot>
          <Dot intent="primary">Primary</Dot>
          <Dot intent="secondary">Secondary</Dot>
        </div>

        <div tw="p-8 flex space-x-4 flex-wrap">
          <Dot size="xs" />
          <Dot size="sm" />
          <Dot size="md" />
          <Dot size="lg" />
          <Dot size="xl" />

          <Dot size="xs">Text</Dot>
          <Dot size="sm">Text</Dot>
          <Dot size="md">Text</Dot>
          <Dot size="lg">Text</Dot>
          <Dot size="xl">Text</Dot>
        </div>
      </div>
    </div>
  )
}
