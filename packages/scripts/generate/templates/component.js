module.exports = (componentName) => ({
  content: `import React from 'react'
import tw, { css } from 'twin.macro'
import { cx, forwardRef, CompProps } from '../util'

export interface ${componentName}Options {
  foo: string
}

const use${componentName}Style = () => ({
  base : tw${'``'}
})

type ${componentName}Props = CompProps<'div', ${componentName}Options>

export const ${componentName} = forwardRef<${componentName}Props, 'div'>((props: ${componentName}Props, ref: any) => {
  const { children, className, ...rest } = props
  const styles = use${componentName}Style()

  return (
    <div ref={ref} className={cx('${componentName}', className)} css={[styles.base]} {...rest}>
      {children}
    </div>
  )
})
`,
  extension: '.tsx'
})
