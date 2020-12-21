import React from 'react'
import 'twin.macro'

export const Home = () => {
  return (
    <section tw="h-screen bg-black text-white font-sans">
      <div tw="container px-5 py-24 mx-auto">
        <div tw="md:flex flex-wrap -m-4">
          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <a
              tw="block border border-trueGray-800 bg-trueGray-900 p-6 rounded-lg hover:bg-red-700 transition-colors duration-500 ease-in-out"
              href="/color"
            >
              <div tw="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-50 text-red-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  tw="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 tw="text-lg text-gray-300 font-medium mb-2">Colors</h2>
              <p tw="leading-relaxed text-base text-gray-300">Colors, colors, colors...</p>
            </a>
          </div>

          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <a
              tw="block border border-trueGray-800 bg-trueGray-900 p-6 rounded-lg hover:bg-yellow-700 transition-colors duration-500 ease-in-out"
              href="/typography"
            >
              <div tw="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-50 text-yellow-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  tw="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 tw="text-lg text-gray-300 font-medium mb-2">Typography</h2>
              <p tw="leading-relaxed text-base text-gray-300">
                Typography, typography, typography...
              </p>
            </a>
          </div>

          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <a
              tw="block border border-trueGray-800 bg-trueGray-900 p-6 rounded-lg hover:bg-blue-700 transition-colors duration-500 ease-in-out"
              href="/buttons"
            >
              <div tw="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  tw="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 tw="text-lg text-gray-300 font-medium mb-2">Buttons</h2>
              <p tw="leading-relaxed text-base text-gray-300">Buttons, buttons, buttons...</p>
            </a>
          </div>

          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <a
              tw="block border border-trueGray-800 bg-trueGray-900 p-6 rounded-lg hover:bg-teal-700 transition-colors duration-500 ease-in-out"
              href="/inputs"
            >
              <div tw="w-10 h-10 inline-flex items-center justify-center rounded-full bg-teal-50 text-teal-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  tw="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 tw="text-lg text-gray-300 font-medium mb-2">Inputs</h2>
              <p tw="leading-relaxed text-base text-gray-300">Inputs, inputs, inputs...</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
