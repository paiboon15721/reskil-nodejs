const path = require('path')
const fs = require('fs')
const zlip = require('zlib')

const htmlUrl = path.join(__dirname, 'assets', 'index.html')
// const writeUrl = path.join(__dirname, 'index_copy_by_stream.html')
const writeGzipUrl = path.join(__dirname, 'index.html.gzip')

const compressed = fs.createWriteStream(writeGzipUrl)
const readable = fs.createReadStream(htmlUrl, {
  encoding: 'utf-8',
  highWaterMark: 1024,
})
// const writeable = fs.createWriteStream(writeUrl)

const gzip = zlip.createGzip()

readable.pipe(gzip).pipe(compressed)
