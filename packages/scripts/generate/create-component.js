const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const templates = require('./templates')

const componentName = process.argv[2]

if (!componentName) {
  console.error(chalk.red('Please supply a valid component name'))
  process.exit(1)
}

console.log(chalk.cyan('Creating Component Template: '), componentName)

const componentDirectory = `../components/src/${componentName}`

if (fs.existsSync(componentDirectory)) {
  console.error(chalk.red(`Component ${componentName} already exists.`))
  process.exit(1)
}

fs.mkdirSync(componentDirectory)

const generatedTemplates = templates.map((template) => template(componentName))

generatedTemplates.forEach((template) => {
  fs.writeFileSync(`${componentDirectory}/${componentName}${template.extension}`, template.content)
})

console.log(
  chalk.green(
    'Successfully created component under: ' + path.relative('../../', componentDirectory)
  )
)
