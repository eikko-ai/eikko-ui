import React from 'react'
import 'twin.macro'

export const Home = () => {
  return (
    <section tw="text-gray-700 font-sans">
      <div tw="container px-5 py-24 mx-auto">
        <div tw="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 tw="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">Home</h1>
          <p tw="lg:w-1/2 w-full leading-relaxed text-base text-gray-600">Playground for KaiUI</p>
        </div>

        <div tw="md:flex flex-wrap -m-4">
          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <a tw="block border border-gray-600 p-6 rounded-lg bg-gray-50" href="/color">
              <h2 tw="text-lg text-gray-900 font-medium mb-2">Colors</h2>
              <p tw="leading-relaxed text-base text-gray-900">Colors, colors, colors...</p>
            </a>
          </div>

          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <a tw="block border border-red-600 p-6 rounded-lg bg-red-50" href="/typography">
              <h2 tw="text-lg text-red-900 font-medium mb-2">Typography</h2>
              <p tw="leading-relaxed text-base text-red-900">
                Typography, typography, typography...
              </p>
            </a>
          </div>

          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <a tw="block border border-yellow-600 p-6 rounded-lg bg-yellow-50" href="/buttons">
              <h2 tw="text-lg text-yellow-900 font-medium mb-2">Buttons</h2>
              <p tw="leading-relaxed text-base text-yellow-900">Buttons, buttons, buttons...</p>
            </a>
          </div>

          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <a tw="block border border-green-600 p-6 rounded-lg bg-green-50" href="/inputs">
              <h2 tw="text-lg text-green-900 font-medium mb-2">Inputs</h2>
              <p tw="leading-relaxed text-base text-green-900">Inputs, inputs, inputs...</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
