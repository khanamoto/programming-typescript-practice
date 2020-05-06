interface User {
  name: string
}
interface User {
  age: number
}
let a: User = {
  name: 'Ashley',
  age: 30,
}
console.log(a)

interface User2<Age extends number> {
  age: Age
}
interface User2<Age extends string> {
  age: Age
}
