const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(
  path.join(__dirname, 'assets', 'index.html'),
  'utf-8',
)

console.log(file)

const eslint = fs.readFileSync(path.join(__dirname, '..', '.eslintrc'), 'utf-8')

console.log(eslint)
