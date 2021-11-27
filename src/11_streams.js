const path = require('path')
const fs = require('fs')

const htmlUrl = path.join(__dirname, 'assets', 'index.html')
const writeUrl = path.join(__dirname, 'index_copy.html')

const readable = fs.createReadStream(htmlUrl, {
  encoding: 'utf-8',
  highWaterMark: 1024,
})
const writeable = fs.createWriteStream(writeUrl)

readable.on('data', chunk => {
  writeable.write(chunk)
})

readable.on('close', () => {
  console.log('close')
})

readable.on('end', () => {
  console.log('end')
})
