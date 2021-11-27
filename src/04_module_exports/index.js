const { greet, greet1 } = require('./greet') // module.exports
const { order, payment } = require('./product')
const persons = require('./data.json')
const config = require('./config')

greet()
greet1()

order()
payment()

console.log(persons.map(x => ({ ...x, name: `mapped ${x.name}` })))

console.log(config)
config.baseUrl = 'updated baseUrl'

console.log(require('./config'))
