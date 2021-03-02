import React, { Suspense } from 'react'
import { Router, View } from 'react-navi'
import { GlobalStyles } from 'twin.macro'
import { Header } from './components/Header'
import routes from './routes'
import { ThemeProvider } from '@kai/components'

const App = () => {
  return (
    <Router routes={routes}>
      <Suspense fallback={null}>
        <ThemeProvider>
          <div className="App">
            <GlobalStyles />
            <Header />
            <View />
          </div>
        </ThemeProvider>
      </Suspense>
    </Router>
  )
}

export default App
