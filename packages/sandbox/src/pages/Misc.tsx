import { Dot, Display, Divider, Button, Box } from '@kai/components'
import { PlusIcon } from '@kai/icons'

export const Misc = () => {
  return (
    <div>
      <div className="p-8 flex space-x-4 flex-wrap">
        <Display shadow caption="Wish I was here!" width="400px">
          <img src="https://unsplash.it/640/425?random" alt="" />
        </Display>
      </div>

      <div className="p-8 flex space-x-4 flex-wrap">
        <Dot intent="light" />
        <Dot intent="dark" />
        <Dot intent="info" />
        <Dot intent="success" />
        <Dot intent="warning" />
        <Dot intent="danger" />
      </div>

      <Divider />

      <Divider volume={1} className="my-16">
        HTTP
      </Divider>

      <Divider volume={1} className="my-16" intent="light">
        <Button size="xs" intent="light">
          Hello
        </Button>
      </Divider>

      <Divider volume={1} className="my-16 font-medium">
        Bold Text
      </Divider>

      <Divider volume={1} className="my-16" intent="light">
        <Button intent="light" icon={<PlusIcon />} isRounded />
      </Divider>

      <Box className="p-8" elevation="sm" hoverElevation="lg" isLoading spinnerSize="32px">
        Jello World
      </Box>
    </div>
  )
}
