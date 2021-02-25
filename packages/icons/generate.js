const fs = require('fs').promises
const path = require('path')
const degit = require('degit')
const camelcase = require('camelcase')
const svgr = require('@svgr/core').default

const REPO = 'tailwindlabs/heroicons/optimized'
const ICONS_DIR = '.tmp/icons'
const OUTPUT_DIR = './src/icons'
const OUTLINE_DIR = path.join(ICONS_DIR, './outline')
const SOLID_DIR = path.join(ICONS_DIR, './solid')

const iconComponentTemplate = ({ template }, opts, { imports, componentName, jsx }) =>
  template.smart({ plugins: ['typescript'] }).ast`
        ${imports}
        export const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    `

function svgToReact(svg, componentName) {
  return svgr(svg, { template: iconComponentTemplate }, { componentName })
}

function buildIcons() {
  return Promise.all([
    fs.readdir(OUTLINE_DIR).then((files) => {
      return Promise.all(
        files.map((file) => {
          const componentName = `${camelcase(file.replace(/\.svg$/, ''), { pascalCase: true })}`
          return fs
            .readFile(`${OUTLINE_DIR}/${file}`, 'utf8')
            .then((content) => {
              return svgToReact(content, `${componentName}Icon`)
            })
            .then((component) => {
              const fileName = `${componentName}.tsx`
              const content = component
              return fs.writeFile(`${OUTPUT_DIR}/outline/${fileName}`, content).then(() => fileName)
            })
        })
      ).then((fileNames) => {
        const exportStatements = fileNames
          .map((fileName) => {
            const componentName = `${camelcase(fileName.replace(/\.tsx$/, ''), {
              pascalCase: true
            })}`
            return `export { ${componentName}Icon } from './${componentName}'`
          })
          .join('\n')

        return fs.writeFile(`${OUTPUT_DIR}/outline/index.ts`, exportStatements)
      })
    }),
    fs.readdir(SOLID_DIR).then((files) => {
      return Promise.all(
        files.map((file) => {
          const componentName = `${camelcase(file.replace(/\.svg$/, ''), {
            pascalCase: true
          })}Solid`
          return fs
            .readFile(`${SOLID_DIR}/${file}`, 'utf8')
            .then((content) => {
              return svgToReact(content, `${componentName}Icon`)
            })
            .then((component) => {
              const fileName = `${componentName}.tsx`
              const content = component
              return fs.writeFile(`${OUTPUT_DIR}/solid/${fileName}`, content).then(() => fileName)
            })
        })
      ).then((fileNames) => {
        const exportStatements = fileNames
          .map((fileName) => {
            const componentName = `${camelcase(fileName.replace(/\.tsx$/, ''), {
              pascalCase: true
            })}`
            return `export { ${componentName}Icon } from './${componentName}'`
          })
          .join('\n')

        return fs.writeFile(`${OUTPUT_DIR}/solid/index.ts`, exportStatements)
      })
    }),
    fs.writeFile(
      './src/index.ts',
      ["export * from './icons/outline'", "export * from './icons/solid'"].join('\n')
    )
  ])
}

// --

const cloner = degit(REPO, {
  cache: true,
  force: true,
  verbose: true
})

cloner.on('info', (info) => {
  console.log(info.message)
})

cloner.clone(path.resolve(ICONS_DIR)).then(() => {
  console.log('1. HeroIcons repository cloned!')
  console.log('2. Building React components...')
  buildIcons().then(() => console.log('3. Finished building React components.'))
})
