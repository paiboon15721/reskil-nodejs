function Person(name) {
  this.name = name
  this.greet1 = function () {
    console.log('greet1')
  }
}

Person.prototype.greet = function () {
  console.log(`hello ${this.name}`)
}

const john = new Person('John')
const jane = new Person('Jane')

jane.greet()
john.greet()

console.log(jane.__proto__ === john.__proto__)
console.log(john.__proto__)

class Employee {
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`greet from employee ${this.name}`)
  }
}

const emp = new Employee('emp1')
emp.greet()
