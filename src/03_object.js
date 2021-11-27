const query = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('query success')
    }, 2000)
  })

const person = {
  name: 'John',
  lastName: 'Doe',
  age: 30,
  async greet() {
    const res = await query()
    console.log('data here', res)
    console.log('this', this)
    console.log(`Hi, my name is ${this.name} ${this.lastName}`)
  },
}

console.log(person.test)

// console.log(person.name)
// console.log(person.lastName)

// const { name, ...rest } = person
// console.log('name', name)
// console.log('rest', rest)

// console.log(person['name'])

// const newPerson = { name: 'new name', lastName: 'new lastname' }

// const newPersonGreet = person.greet.bind(newPerson)

// newPersonGreet()

// const newPerson = { name: 'new name', lastName: 'new lastname' }

const greet = (name, lastName) => console.log(`full name: ${name} ${lastName}`)

const greetFn = greet.bind(null, 'name', 'lastName')
greetFn()
greet.call(null, 'name', 'lastName')
greet.apply(null, ['name', 'lastName'])
