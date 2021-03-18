import { Button, useColorMode } from '@kai/components'
import { MoonIcon, SunIcon } from '@kai/icons'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const getColorModeIcon = () => {
    if (colorMode === 'dark') return <SunIcon />
    return <MoonIcon />
  }

  return (
    <header className="text-dark-300 bg-dark-700 shadow-sm">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a href="/" className="flex font-medium items-center text-gray-100 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Kai UI</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer">
          <a href="/" className="mr-5 hover:text-gray-600">
            Home
          </a>
          <a href="/" className="mr-5 hover:text-gray-600">
            Second Link
          </a>
          <a href="/" className="mr-5 hover:text-gray-600">
            Third Link
          </a>
          <Button
            intent="dark"
            variant="solid"
            icon={getColorModeIcon()}
            onClick={() => toggleColorMode()}
          ></Button>
        </nav>
      </div>
    </header>
  )
}
