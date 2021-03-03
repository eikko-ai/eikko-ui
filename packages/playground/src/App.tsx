import React, { Suspense } from 'react'
import 'twin.macro'
import { Router, View } from 'react-navi'
import { Header } from './components/Header'
import routes from './routes'
import { ThemeProvider } from '@kai/components'

const App = () => {
  return (
    <Router routes={routes}>
      <Suspense fallback={null}>
        <ThemeProvider>
          <div
            className="App"
            tw="h-screen overflow-auto bg-background dark:bg-background-dark text-white font-sans"
          >
            <Header />
            <View />
          </div>
        </ThemeProvider>
      </Suspense>
    </Router>
  )
}

export default App
