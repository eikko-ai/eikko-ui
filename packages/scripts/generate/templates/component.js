module.exports = (componentName) => ({
  content: `
import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'

interface ${componentName}Props {
  foo: string
}

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
  <div className="foo-bar">{foo}</div>
);

export {${componentName}};
  `,
  extension: '.tsx'
})
