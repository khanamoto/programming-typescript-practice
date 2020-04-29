let c: {
  firstName: string
  lastName: string
} = {
  firstName: 'john',
  lastName: 'barrowman',
}
console.log(c.firstName)

class Person {
  constructor(public firstName: string, public lastName: string) {}
}
c = new Person('matt', 'smith')

console.log(c.firstName)

let i: number
let j = i * 3
