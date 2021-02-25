import React from 'react'
import 'twin.macro'
import { Button, Spinner } from '@kai/components'
import { ArchiveIcon, BookOpenIcon, StarSolidIcon, PlusSolidIcon } from '@kai/icons'

export const Buttons = () => {
  const [isDisabled, setDisabled] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)

  return (
    <div tw="h-screen bg-white">
      <div tw="px-4 py-8 bg-white">
        <div tw="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
          <Button
            as="button"
            variant="solid"
            intent="primary"
            onClick={() => {
              setLoading(!isLoading)
              console.log(isLoading)
            }}
          >
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
        </div>
      </div>

      <div tw="px-4 py-8 bg-white">
        <div tw="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
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

      <div tw="p-8 flex space-x-2 flex-wrap">
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

      <div tw="px-4 py-8 bg-white">
        <div tw="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
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
      </div>

      <div tw="px-4 py-8 bg-white">
        <div tw="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
          <Button variant="solid" size="xs" iconLeft={<ArchiveIcon />}>
            Left Icon
          </Button>
          <Button variant="solid" size="sm" iconLeft={<ArchiveIcon />}>
            Left Icon
          </Button>
          <Button variant="solid" size="md" iconRight={<ArchiveIcon />}>
            Right Icon
          </Button>
          <Button variant="solid" size="lg" iconLeft={<ArchiveIcon />}>
            Left Icon
          </Button>
          <Button variant="solid" size="xl" iconLeft={<ArchiveIcon />}>
            Left Icon
          </Button>
        </div>
      </div>

      <div tw="p-8 flex space-x-2 flex-wrap">
        <Button variant="solid" intent="primary" isDisabled>
          Disabled
        </Button>

        <Button
          variant="secondary"
          intent="primary"
          isDisabled={isDisabled}
          onClick={() => {
            setDisabled(!isDisabled)
          }}
        >
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

      <div tw="p-8 flex space-x-2 flex-wrap">
        <Button
          variant="solid"
          intent="primary"
          size="xl"
          isLoading={isLoading}
          loadingText="Loading..."
          isWide
          isRounded
          onClick={() => {
            setLoading(!isLoading)
            console.log(isLoading)
          }}
        >
          Upload
        </Button>
      </div>

      <div tw="p-8">
        <Spinner size="xl" speed="fast" label="Loading" isCentered tw="text-red-700" />
      </div>

      <div tw="p-8 flex space-x-2">
        <Button variant="solid" intent="primary" isWide icon={<ArchiveIcon />}>
          Wide
        </Button>
        <Button variant="solid" intent="primary" isWide icon={<BookOpenIcon />} floatIcon>
          Wide Float Icon
        </Button>
        <Button variant="solid" intent="danger" isWide iconRight={<BookOpenIcon />} floatIcon>
          Wide Float Icon
        </Button>
      </div>

      <div tw="px-4 py-8 bg-white">
        <div tw="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
          <Button icon={<StarSolidIcon />} size="xs" />
          <Button icon={<StarSolidIcon />} size="sm" />
          <Button icon={<StarSolidIcon />} size="md" />
          <Button icon={<StarSolidIcon />} size="lg" />
          <Button icon={<StarSolidIcon />} size="xl" />
          <Button icon={<StarSolidIcon />} size="xl">
            Star
          </Button>
          <Button size="xl">Star</Button>
          <Button icon={<StarSolidIcon />} size="md" />
          <Button icon={<StarSolidIcon />} size="md">
            Star
          </Button>
        </div>
      </div>

      <div tw="px-4 py-8 bg-white">
        <div tw="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
          <Button icon={<StarSolidIcon />} size="xs" isRounded />
          <Button icon={<StarSolidIcon />} size="sm" isRounded />
          <Button icon={<StarSolidIcon />} size="md" isRounded />
          <Button icon={<StarSolidIcon />} size="lg" isRounded />
          <Button
            icon={<PlusSolidIcon />}
            size="xl"
            isRounded
            tw="bg-green-600 text-green-100 shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
