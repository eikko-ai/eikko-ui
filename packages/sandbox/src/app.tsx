import { Route } from 'wouter-preact'
import { ThemeProvider } from '@kai/components'
import { Home, Buttons, Inputs, Typography, Misc } from './pages'
import { Header } from './components'

export function App() {
  return (
    <ThemeProvider>
      <div className="h-screen overflow-auto bg-background dark:bg-background-dark font-sans">
        <Header />

        <Route path="/">
          <Home />
        </Route>

        <Route path="/buttons">
          <Buttons />
        </Route>

        <Route path="/inputs">
          <Inputs />
        </Route>

        <Route path="/typography">
          <Typography />
        </Route>

        <Route path="/misc">
          <Misc />
        </Route>
      </div>
    </ThemeProvider>
  )
}
