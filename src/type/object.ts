// 明示的
// let a: object = {
//   b: 'x',
// }
// console.log(a.b)

// 暗黙的
// オブジェクトリテラル表記
let c = {
  d: 'x',
}
console.log(c.d)

let e = {
  f: {
    g: 'f',
  },
}
console.log(e.f)

const a: { b: number } = {
  b: 12,
}
console.log(a)
