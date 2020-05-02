type Cat = { name: string; purrs: boolean }
type Dog = { name: string; barks: boolean; wags: boolean }
// 合併型
type CatOrDogOrBoth = Cat | Dog
// 交差型
type CatAndDog = Cat & Dog

// Cat
let a: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true,
}

// Dog
a = {
  name: 'Domino',
  barks: true,
  wags: true,
}

// 両方
a = {
  name: 'Donkers',
  barks: true,
  purrs: true,
  wags: true,
}

let b: CatAndDog = {
  name: 'Domino',
  barks: true,
  purrs: true,
  wags: true,
}
