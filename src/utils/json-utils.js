import { writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path)

export const writeJSON = (path, data) => writeFileSync(path, JSON.stringify(data))
