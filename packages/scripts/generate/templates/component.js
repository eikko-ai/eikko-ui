module.exports = (componentName) => ({
  content: `import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'
import { cx } from '../util'

export interface ${componentName}Options {
  foo: string
}

interface ${componentName}Props extends ${componentName}Options, React.HTMLAttributes<HTMLElement> {
  /** Custom component to be rendered. Defaults to ${`div`}. */
  as?: React.ElementType<any>
}

const baseStyles = ${'tw``'}

const Component = styled.div(({ foo }: ${componentName}Props) => [baseStyles, foo && ${'tw``'}])

export const ${componentName} = React.forwardRef((props: ${componentName}Props, ref: React.Ref<HTMLElement>) => {
  const { children, className, as = 'div', ...rest } = props
  return (
    <Component as={as} className={cx('${componentName}', className)} {...rest}>
      {children}
    </Component>
  )
})
`,
  extension: '.tsx'
})
