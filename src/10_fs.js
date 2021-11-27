const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

// const file = fs.readFileSync(
//   path.join(__dirname, 'assets', 'index.html'),
//   'utf-8',
// )

// console.log(file)

// const eslint = fs.readFileSync(path.join(__dirname, '..', '.eslintrc'), 'utf-8')

// console.log(eslint)
const readFile = url => promisify(fs.readFile.bind(null, url, 'utf-8'))()

// readFile(path.join(__dirname, 'assets', 'index.html'))
//   .then(data => {
//     console.log(data)
//     console.log('from promise')
//     return readFile(path.join(__dirname, '..', '.eslintrc'))
//   })
//   .then(eslint => {
//     console.log(eslint)
//     console.log('eslint file')
//   })

const app = async () => {
  const [html, eslint] = await Promise.all([
    readFile(path.join(__dirname, 'assets', 'index.html')),
    readFile(path.join(__dirname, '..', '.eslintrc')),
  ])
  console.log(html)
  console.log(eslint)
}

app()

// fs.readFile(
//   path.join(__dirname, 'assets', 'index.html'),
//   'utf-8',
//   (err, data) => {
//     if (err) {
//       console.log('Throw error here')
//       return
//     }
//     fs.readFile(
//       path.join(__dirname, '..', '.eslintrc'),
//       'utf-8',
//       (err, eslint) => {
//         console.log(eslint)
//       },
//     )
//     console.log(data)
//     console.log('file from readFile')
//   },
// )
