const http = require('http')

http
  .createServer((req, res) => {
    if (req.url === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write('<h1>Hello world</h1>')
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
