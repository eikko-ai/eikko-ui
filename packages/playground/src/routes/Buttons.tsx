import React from 'react'
import 'twin.macro'
import { Button } from '@kai/components'

export const Buttons = () => {
  return (
    <div tw="h-screen bg-white">
      <div tw="container">
        <div tw="p-8 flex space-x-4">
          <Button variant="solid" intent="primary">
            Solid Primary
          </Button>
          <Button variant="solid" intent="secondary">
            Solid Secondary
          </Button>
          <Button variant="solid" intent="light">
            Solid Light
          </Button>
          <Button variant="solid" intent="dark">
            Solid Dark
          </Button>
          <Button variant="solid" intent="info">
            Solid Info
          </Button>
          <Button variant="solid" intent="success">
            Solid Success
          </Button>
          <Button variant="solid" intent="warning">
            Solid Warning
          </Button>
          <Button variant="solid" intent="danger">
            Solid Danger
          </Button>
        </div>
      </div>
    </div>
  )
}
