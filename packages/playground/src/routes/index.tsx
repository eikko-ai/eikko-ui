import React from 'react'
import { mount, route, lazy } from 'navi'

import { Home } from './Home'
import { Buttons } from './Buttons'
import { Inputs } from './Inputs'

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
  ),
  '/inputs': lazy(() =>
    route({
      title: 'Inputs',
      view: <Inputs />
    })
  )
})

export default routes
