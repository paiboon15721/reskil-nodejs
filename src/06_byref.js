const changePerson = person => {
  person.name = 'new name'
}

const john = Object.freeze({
  name: 'john',
})

changePerson(john)

console.log(john)

const changeVal = n => {
  n = 5
}

let n = 3

changeVal(n)
console.log(n)

const arr = [1, 2, 3]

const updateArray = arr => {
  arr.push(5)
}

console.log('old array', arr)
updateArray(arr)
console.log('new array', arr)
