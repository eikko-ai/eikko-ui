import tw from 'twin.macro'
import { Button } from '../../components'

const App = () => (
  <div
    css={[
      tw`flex flex-col items-center justify-center h-screen`,
      tw`bg-gradient-to-b from-primary-500 to-blue-500`
    ]}
  >
    <div tw="flex flex-col justify-center h-full space-y-5">
      <div>Hello World</div>
      <Button>Submit</Button>
    </div>
  </div>
)

export default App
