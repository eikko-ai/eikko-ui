import { Link } from 'wouter-preact'

type CardColors = 'blue' | 'green' | 'red' | 'teal' | 'gray'

interface CardProps {
  header: string
  text: string
  link: string
  icon: React.ReactNode
  color?: CardColors
}

export const Card: React.FC<CardProps> = ({ header, text, link, icon, color }) => {
  return (
    <Link
      href={link}
      className={`block border border-dark-600 bg-dark-700 p-6 rounded-lg transition-colors duration-500 ease-in-out
        ${color === 'blue' && 'hover:bg-blue-700'}
        ${color === 'green' && 'hover:bg-green-700'}
        ${color === 'red' && 'hover:bg-red-700'}
        ${color === 'teal' && 'hover:bg-primary-700'}`}
    >
      <div
        className={`w-10 h-10 inline-flex items-center justify-center rounded-full mb-4
        ${color === 'blue' && 'bg-blue-50 text-blue-500'}
        ${color === 'green' && 'bg-green-50 text-green-500'}
        ${color === 'red' && 'bg-red-50 text-red-500'}
        ${color === 'teal' && 'bg-primary-50 text-primary-500'}`}
      >
        {icon}
      </div>
      <h2 className="text-lg text-gray-300 font-medium mb-2">{header}</h2>
      <p className="leading-relaxed text-base text-gray-300">{text}</p>
    </Link>
  )
}
