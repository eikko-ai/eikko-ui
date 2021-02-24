import React from 'react'
import 'twin.macro'
import { Button, Spinner } from '@kai/components'
import { Archive, Book } from '@kai/icons'

export const Buttons = () => {
  return (
    <div tw="h-screen bg-white">
      <div tw="container">
        <div tw="p-8 flex space-x-4 flex-wrap">
          <Button as="button" variant="solid" intent="primary">
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

        <div tw="p-8 flex space-x-4 flex-wrap">
          <Button variant="secondary" intent="primary">
            Secondary
          </Button>
          <Button variant="secondary" intent="secondary">
            Secondary
          </Button>
          <Button variant="secondary" intent="light">
            Secondary
          </Button>
          <Button variant="secondary" intent="dark">
            Secondary
          </Button>
          <Button variant="secondary" intent="info">
            Secondary
          </Button>
          <Button variant="secondary" intent="success">
            Secondary
          </Button>
          <Button variant="secondary" intent="warning">
            Secondary
          </Button>
          <Button variant="secondary" intent="danger">
            Secondary
          </Button>
        </div>

        <div tw="p-8 flex space-x-4 flex-wrap">
          <Button variant="outline" intent="primary">
            Outline
          </Button>
          <Button variant="outline" intent="secondary">
            Outline
          </Button>
          <Button variant="outline" intent="light">
            Outline
          </Button>
          <Button variant="outline" intent="dark">
            Outline
          </Button>
          <Button variant="outline" intent="info">
            Outline
          </Button>
          <Button variant="outline" intent="success">
            Outline
          </Button>
          <Button variant="outline" intent="warning">
            Outline
          </Button>
          <Button variant="outline" intent="danger">
            Outline
          </Button>
        </div>

        <div tw="p-8 flex space-x-4 flex-wrap">
          <Button variant="ghost" intent="primary">
            Ghost
          </Button>
          <Button variant="ghost" intent="secondary">
            Ghost
          </Button>
          <Button variant="ghost" intent="light">
            Ghost
          </Button>
          <Button variant="ghost" intent="dark">
            Ghost
          </Button>
          <Button variant="ghost" intent="info">
            Ghost
          </Button>
          <Button variant="ghost" intent="success">
            Ghost
          </Button>
          <Button variant="ghost" intent="warning">
            Ghost
          </Button>
          <Button variant="ghost" intent="danger">
            Ghost
          </Button>
        </div>

        <div tw="p-8 flex space-x-4 flex-wrap">
          <Button variant="link" intent="primary">
            Link
          </Button>
          <Button variant="link" intent="secondary">
            Link
          </Button>
          <Button variant="link" intent="light">
            Link
          </Button>
          <Button variant="link" intent="dark">
            Link
          </Button>
          <Button variant="link" intent="info">
            Link
          </Button>
          <Button variant="link" intent="success">
            Link
          </Button>
          <Button variant="link" intent="warning">
            Link
          </Button>
          <Button variant="link" intent="danger">
            Link
          </Button>
        </div>

        <div tw="p-8 flex space-x-4 flex-wrap">
          <Button variant="unstyled" intent="primary">
            Unstyled
          </Button>
          <Button variant="unstyled" intent="secondary">
            Unstyled
          </Button>
          <Button variant="unstyled" intent="light">
            Unstyled
          </Button>
          <Button variant="unstyled" intent="dark">
            Unstyled
          </Button>
          <Button variant="unstyled" intent="info">
            Unstyled
          </Button>
          <Button variant="unstyled" intent="success">
            Unstyled
          </Button>
          <Button variant="unstyled" intent="warning">
            Unstyled
          </Button>
          <Button variant="unstyled" intent="danger">
            Unstyled
          </Button>
        </div>

        <div tw="p-8 flex space-x-4 flex-wrap">
          <Button variant="solid" size="xs">
            Solid
          </Button>
          <Button variant="solid" size="sm">
            Solid
          </Button>
          <Button variant="solid" size="md">
            Solid
          </Button>
          <Button variant="solid" size="lg">
            Solid
          </Button>
          <Button variant="solid" size="xl">
            Solid
          </Button>
        </div>

        <div tw="p-8 flex space-x-4 flex-wrap">
          <Button variant="solid" size="xs" iconLeft={<Archive />}>
            Left Icon
          </Button>
          <Button variant="solid" size="sm" iconLeft={<Archive />}>
            Left Icon
          </Button>
          <Button variant="solid" size="md" iconLeft={<Archive />}>
            Left Icon
          </Button>
          <Button variant="solid" size="md" iconRight={<Archive />}>
            Right Icon
          </Button>
          <Button variant="solid" size="lg" iconLeft={<Archive />}>
            Left Icon
          </Button>
          <Button variant="solid" size="xl" iconLeft={<Archive />}>
            Left Icon
          </Button>
        </div>

        <div tw="p-8 flex space-x-4 flex-wrap">
          <Button variant="solid" intent="primary" isDisabled>
            Disabled
          </Button>

          <Button variant="secondary" intent="primary" isDisabled>
            Disabled
          </Button>

          <Button variant="secondary" intent="danger" isDisabled>
            Disabled
          </Button>

          <Button variant="ghost" intent="info" isDisabled>
            Disabled
          </Button>

          <Button variant="solid" intent="light" isDisabled>
            Disabled
          </Button>
        </div>

        <div tw="p-8 flex space-x-4 flex-wrap">
          <Button variant="solid" intent="primary" size="xl" isLoading loadingText="Loading...">
            Upload
          </Button>

          <Button variant="secondary" intent="info" size="xl" isLoading>
            Upload
          </Button>
        </div>

        <div tw="p-8">
          <Spinner size="xl" speed="fast" label="Loading" isCentered tw="text-red-700" />
        </div>

        <div tw="p-8 flex space-x-4">
          <Button variant="solid" intent="primary" isWide iconLeft={<Archive />}>
            Wide
          </Button>
          <Button variant="solid" intent="primary" isWide iconLeft={<Book />} floatIcon>
            Wide Float Icon
          </Button>
          <Button variant="solid" intent="danger" isWide iconRight={<Book />} floatIcon>
            Wide Float Icon
          </Button>
        </div>
      </div>
    </div>
  )
}
