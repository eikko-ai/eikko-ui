import React, { Suspense } from 'react'
import { Router, View } from 'react-navi'
import { GlobalStyles } from 'twin.macro'
import { Header } from './Header'
import routes from './routes'

const App = () => (
  <Router routes={routes}>
    <Suspense fallback={null}>
      <GlobalStyles />
      <Header />
      <View />
    </Suspense>
  </Router>
)

export default App
