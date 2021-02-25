const path = require('path')
const degit = require('degit')

const REPO = 'tailwindlabs/heroicons#1cef5f13f97bddbbdbf04e352099cecca52d754dclear'
const DEST = '.tmp'

const cloner = degit(REPO, {
  cache: true,
  force: true,
  verbose: true
})

cloner.on('info', (info) => {
  console.log(info.message)
})

cloner.clone().then(() => {
  console.log('done')
})
