module.exports = (componentName: string) => ({
  content: `
import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'

interface ${componentName}Props {
  children: React.ReactNode
}

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
  <div className="foo-bar">{foo}</div>
);

export {${componentName}};
  `,
  extension: '.tsx'
})
