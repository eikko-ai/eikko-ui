import React from 'react'
import 'twin.macro'

interface CardProps {
  header: string
  text: string
  link: string
  color: string
  icon: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ header, text, link, color, icon }) => {
  return (
    // <div tw="xl:w-1/3 md:w-1/2 p-4">
    //   <a
    //     tw="block border border-trueGray-800 bg-trueGray-900 p-6 rounded-lg hover:bg-blue-700 transition-colors duration-500 ease-in-out"
    //     href={link}
    //   >
    //     <div tw="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-4">
    //       <svg
    //         fill="none"
    //         stroke="currentColor"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         tw="w-6 h-6"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    //       </svg>
    //     </div>
    //     <h2 tw="text-lg text-gray-300 font-medium mb-2">{header}</h2>
    //     <p tw="leading-relaxed text-base text-gray-300">{text}</p>
    //   </a>
    // </div>

    <div>Card</div>
  )
}
