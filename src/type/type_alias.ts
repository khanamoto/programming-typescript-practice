type Age = number

type Person = {
  name: string
  age: Age
}

// 型エイリアスは推論されないため明示的に指定する
// let age: Age = 55
// let driver: Person = {
//   name: 'James May',
//   age: age,
// }

let age = 55
let driver: Person = {
  name: 'James May',
  age: age,
}
