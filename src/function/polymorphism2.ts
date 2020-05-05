// 4.2.2 ジェネリックはどこで宣言できるか

// function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
//   let result = []
//   for (let i = 0; i < array.length; i++) {
//     result[i] = f(array[i])
//   }
//   return result
// }

// 2つのジェネリック型で置き換え
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  return result
}

map(['a', 'b'], (_) => console.log(_ === 'a'))

let promise = new Promise<number>((resolve) => resolve(45))
promise.then((result) => console.log(result * 4))
