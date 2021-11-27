const http = require('http')
const fs = require('fs')
const path = require('path')

http
  .createServer((req, res) => {
    if (req.url === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      const file = fs.readFileSync(path.join(__dirname, 'assets', 'index.html'))
      res.write(file)
      res.end()
    } else {
      const person = {
        name: 'john',
        lastName: 'Doe',
      }
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify(person))
      res.end()
    }
  })
  .listen(3000, () => {
    console.log('listening on port 3000')
  })

// const server = http.createServer()

// server.on('request', (req, res) => {
//   res.write('Hello world')
//   res.end()
// })

// server.on('connection', () => {
//   console.log('client connected')
// })

// const port = 3000
// server.listen(port, () => {
//   console.log(`listening on port ${port}`)
// })
