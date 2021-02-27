import React from 'react'
import tw, { styled } from 'twin.macro'

type CardColors = 'blue' | 'green' | 'red' | 'teal' | 'gray'

interface CardProps {
  header: string
  text: string
  link: string
  icon: React.ReactNode
  color?: CardColors
}

const StyledCard = styled.a(({ color = 'gray' }: Partial<CardProps>) => [
  tw`block border border-dark-700 bg-dark-800 p-6 rounded-lg transition-colors duration-500 ease-in-out`,

  color === 'blue' && tw`hover:bg-blue-700`,
  color === 'green' && tw`hover:bg-green-700`,
  color === 'red' && tw`hover:bg-red-700`,
  color === 'teal' && tw`hover:bg-primary-700`
])

const StyledIcon = styled.div(({ color = 'gray' }: Partial<CardProps>) => [
  tw`w-10 h-10 inline-flex items-center justify-center rounded-full mb-4`,

  color === 'blue' && tw`bg-blue-50 text-blue-500 `,
  color === 'green' && tw`bg-green-50 text-green-500 `,
  color === 'red' && tw`bg-red-50 text-red-500 `,
  color === 'teal' && tw`bg-primary-50 text-primary-500 `
])

export const Card: React.FC<CardProps> = ({ header, text, link, icon, ...rest }) => {
  return (
    <StyledCard href={link} {...rest}>
      <StyledIcon {...rest}>{icon}</StyledIcon>
      <h2 tw="text-lg text-gray-300 font-medium mb-2">{header}</h2>
      <p tw="leading-relaxed text-base text-gray-300">{text}</p>
    </StyledCard>
  )
}
