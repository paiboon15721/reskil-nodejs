const Koa = require('koa')
const Router = require('@koa/router')

const app = new Koa()
const r = new Router()

r.get('/', ctx => {
  ctx.body = 'hello world'
})

r.get('/todos', ctx => {
  ctx.body = [{ name: 'task1' }, { name: 'task2' }]
})

r.get('/todos/:id', ctx => {
  ctx.body = `<h1>todo id: ${ctx.params.id}</h1>`
})

app.use(r.routes())

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
