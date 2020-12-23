module.exports = (componentName) => ({
  content: `
import { h } from 'preact'
import ${componentName} from "./${componentName}";

export default {
  title: "${componentName}"
};

export const WithBar = () => <${componentName} foo="bar" />;
export const WithBaz = () => <${componentName} foo="baz" />;
`,
  extension: `.stories.tsx`
})
