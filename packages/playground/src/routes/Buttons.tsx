import React from 'react'
import 'twin.macro'
import { Button } from '@kai/components'
import { Archive } from '@kai/icons'

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

        <div tw="p-8 flex space-x-4">
          <Button variant="solid" intent="dark" size="xs">
            Solid Primary
          </Button>
          <Button variant="solid" intent="dark" size="sm">
            Solid Primary
          </Button>
          <Button variant="solid" intent="dark" size="md">
            Solid Primary
          </Button>
          <Button variant="solid" intent="dark" size="lg">
            Solid Primary
          </Button>
          <Button variant="solid" intent="dark" size="xl">
            Solid Primary
          </Button>
        </div>

        <div tw="p-8 flex space-x-4">
          <Button variant="solid" intent="dark" size="xs" iconLeft={<Archive />}>
            Left Icon
          </Button>
          <Button variant="solid" intent="dark" size="sm" iconLeft={<Archive />}>
            Left Icon
          </Button>
          <Button variant="solid" intent="dark" size="md" iconLeft={<Archive />}>
            Left Icon
          </Button>
          <Button variant="solid" intent="dark" size="lg" iconLeft={<Archive />}>
            Left Icon
          </Button>
          <Button variant="solid" intent="dark" size="xl" iconLeft={<Archive />}>
            Left Icon
          </Button>
        </div>

        <div tw="p-8 flex space-x-4">
          <Button variant="solid" intent="dark" size="xs" iconRight={<Archive />}>
            Right Icon
          </Button>
          <Button variant="solid" intent="dark" size="sm" iconRight={<Archive />}>
            Right Icon
          </Button>
          <Button variant="solid" intent="dark" size="md" iconRight={<Archive />}>
            Right Icon
          </Button>
          <Button variant="solid" intent="dark" size="lg" iconRight={<Archive />}>
            Right Icon
          </Button>
          <Button variant="solid" intent="dark" size="xl" iconRight={<Archive />}>
            Right Icon
          </Button>
        </div>
      </div>
    </div>
  )
}
