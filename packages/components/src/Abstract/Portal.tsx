import React from 'react'
import ReactDOM from 'react-dom'
import { isBrowser } from '../util'

export interface PortalProps {
  /** The element to be rendered in the portal. */
  children: React.ReactNode
}

let container: Element | null = null

export const Portal: React.FC<PortalProps> = ({ children }) => {
  const [target] = React.useState<HTMLDivElement | null>(() => {
    if (!isBrowser) {
      return null
    }

    if (!container) {
      container = document.createElement('div')
      document.body.appendChild(container)
    }

    const div = document.createElement('div')
    div.className = 'ui-portal'
    container.appendChild(div)
    return div
  })

  React.useEffect(() => {
    return () => {
      if (target) {
        container!.removeChild(target)
      }
    }
  }, [target])

  return target ? (
    ReactDOM.createPortal(children, target)
  ) : (
    <React.Fragment>{children}</React.Fragment>
  )
}
