import React from 'react'
import 'twin.macro'

export const Header = () => {
  return (
    <header tw="text-gray-300 bg-trueGray-800">
      <div tw="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a tw="flex font-medium items-center text-gray-100 mb-4 md:mb-0">
          <span tw="ml-3 text-xl">KaiUI</span>
        </a>
        <nav tw="md:ml-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer">
          <a tw="mr-5 hover:text-gray-600">Home</a>
          <a tw="mr-5 hover:text-gray-600">Second Link</a>
          <a tw="mr-5 hover:text-gray-600">Third Link</a>
        </nav>
      </div>
    </header>
  )
}
