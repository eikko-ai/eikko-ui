import React from 'react'
import tw, { styled } from 'twin.macro'
import { Button } from '@kai/components'

const StyledDiv = styled.div`
  color: white;
  ${tw`bg-red-300 p-4 hover:bg-blue-300`}
`

export const Buttons = () => {
  // return (
  //   <div tw="flex flex-col items-center justify-center h-screen bg-black text-white">
  //     <h1>Buttons</h1>
  //     <div tw="flex flex-col items-center justify-center">
  //       <Button>Save</Button>
  //       <a href="/">Back</a>
  //     </div>
  //   </div>
  // )

  return (
    <div>
      <h1>Hello</h1>
      <div css={tw`text-green-600`}>World</div>
      <div tw="text-blue-600">Blue text!</div>
      <Button>Save</Button>
      <StyledDiv>Purple!</StyledDiv>
    </div>
  )
}
