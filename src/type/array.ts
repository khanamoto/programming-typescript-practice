let a = [1, 2, 3]
var b = ['a', 'b']
let c: string[] = ['a']

let d = [1, 'a']
// すべての文字を大文字に、すべての数値を3倍に
d.map((_) => {
  if (typeof _ === 'number') {
    return _ * 3
  }
  return _.toUpperCase()
})

const e = [2, 'b']

// let f = ['red']
// f.push('blue')
// f.push(true)

// let g = []
// g.push(1)
// g.push('red')
// console.log(g)

// let h: number[] = []
// h.push(1)
// h.push('red')

function buildArray() {
  let a = []
  a.push(1)
  a.push('x')
  return a
}

let myArray = buildArray()
myArray.push(true)
