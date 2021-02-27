import React from 'react'
import { theme } from 'twin.macro'
import { Dot, Display, Divider } from '@kai/components'

export const Misc = () => {
  return (
    <div tw="h-screen bg-background dark:bg-background-dark">
      <div tw="p-8 flex space-x-4 flex-wrap">
        <Display shadow caption="Wish I was here!" width="400px">
          <img src="https://unsplash.it/640/425?random" alt="" />
        </Display>
      </div>

      <div tw="p-8 flex space-x-4 flex-wrap">
        <Dot intent="light" />
        <Dot intent="dark" />
        <Dot intent="info" />
        <Dot intent="success" />
        <Dot intent="warning" />
        <Dot intent="danger" />
      </div>

      <Divider />

      <Divider volume={1} tw="my-16" bg="black">
        HTTP
      </Divider>
    </div>
  )
}
