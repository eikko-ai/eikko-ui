import Head from 'next/head'
import tw from 'twin.macro'
import { Button } from '@kai/ui'

const Home = () => (
  <div
    css={[
      tw`flex flex-col items-center justify-center h-screen`,
      tw`bg-gradient-to-b from-primary-600 to-yellow-200`
    ]}
  >
    {/* <Button>Click Me!</Button> */}
    <div tw="flex flex-col justify-center h-full space-y-5 text-8xl text-white underline">Home</div>
  </div>
)

export default Home
