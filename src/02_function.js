function greet1() {
  return 'greet1'
}

const greet2 = function () {
  console.log('greet2')
}

const greet3 = function () {
  console.log('greet3')
}

const funcs = []

funcs.push(greet2)
funcs.push(greet3)

funcs.forEach(fn => fn())

// const res = greet1()
// console.log(res)

const queryData = function (sql, cb) {
  console.log(`query.... ${sql}`)
  const data = `data of ${sql}`
  const err = new Error('error')
  cb(err, data)
}

queryData('select * from employee', function (err, data) {
  if (err) {
    console.log('handle error')
    return
  }
  console.log('return to client', data)
})

function Person() {
  this.name = 'test'
  this.lastName = 'lastName'
}

const data = new Person()

console.log(data)
;(function () {
  console.log('implementation here')
})()

const person = {
  name: 'name',
  lastName: 'lastName',
  age: 30,
  nationality: 'thai',
}

const render = ({ name, lastName = 'lname', age = 30, nationality }) => {
  console.log(name)
  console.log(lastName)
  console.log(age)
  console.log(nationality)
}

render({
  name: 'myname',
})
