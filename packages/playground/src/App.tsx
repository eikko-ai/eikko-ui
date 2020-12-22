import React, { Suspense } from 'react'
import { Router, View } from 'react-navi'
import { GlobalStyles } from 'twin.macro'
import { Header } from './components/Header'
import routes from './routes'

const App = () => (
  <Router routes={routes}>
    <Suspense fallback={null}>
      <div className="App">
        <GlobalStyles />
        <Header />
        <View />
      </div>
    </Suspense>
  </Router>
)

export default App
