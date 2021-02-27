module.exports = (componentName) => ({
  content: `import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'
import { cx, forwardRef, PropsOf, StyledComponent } from '../util'

export interface ${componentName}Options {
  foo: string
}

const Component: StyledComponent<'div', ${componentName}Options> = styled.div(({foo}: ${componentName}Props) => [
  ${'tw`block`'}
])

type ${componentName}Props = PropsOf<typeof Component>

export const ${componentName} = forwardRef<${componentName}Props, 'div'>((props: ${componentName}Props, ref: any) => {
  const { children, className, ...rest } = props

  return (
    <Component ref={ref} className={cx('${componentName}', className)} {...rest}>
      {children}
    </Component>
  )
})
`,
  extension: '.tsx'
})
