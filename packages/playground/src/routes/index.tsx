import React from 'react'
import { mount, route, lazy } from 'navi'

import { Home } from './Home'
import { Buttons } from './Buttons'

const routes = mount({
  '/': route({
    title: 'Home',
    view: <Home />
  }),
  '/buttons': lazy(() =>
    route({
      title: 'Buttons',
      view: <Buttons />
    })
  )
})

export default routes
