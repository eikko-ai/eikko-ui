import React, { Suspense } from 'react'
import { Router, View } from 'react-navi'
import { GlobalStyles } from 'twin.macro'
import { Header } from './components/Header'
import routes from './routes'
import { ColorModeProvider } from '@kai/components'

const App = () => {
  return (
    <Router routes={routes}>
      <Suspense fallback={null}>
        {/* <ColorModeProvider defaultValue={'light'} useSystemColorMode={false}> */}
        <div className="App">
          <GlobalStyles />
          <Header />
          <View />
        </div>
        {/* </ColorModeProvider> */}
      </Suspense>
    </Router>
  )
}

export default App
