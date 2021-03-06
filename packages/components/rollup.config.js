import babel from '@rollup/plugin-babel'
import commonJS from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'
import pkg from './package.json'

const isProduction = process.env.BUILD === 'production'

const config = {
  name: 'kai',
  extensions: ['.ts', '.tsx']
}

const globals = ['react', 'react-dom', 'styled-components']

const external = [...globals, ...Object.keys(pkg.peerDependencies || {})]

const plugins = [
  resolve({ extensions: config.extensions }),
  commonJS(),
  json(),
  babel({
    extensions: config.extensions,
    babelHelpers: 'runtime',
    include: ['src/**/*'],
    exclude: 'node_modules/**'
  }),
  isProduction && terser(),
  analyze({ summaryOnly: true, limit: 10 })
]

export default [
  {
    external,
    plugins,
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        globals
      },
      {
        file: pkg.module,
        format: 'esm',
        globals
      }
    ]
  }
]
