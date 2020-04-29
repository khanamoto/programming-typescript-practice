type Color = 'red'

let x = Math.random() < 0.5

if (x) {
  type Color = 'blue'
  let b: Color = 'blue'
} else {
  let c: Color = 'red'
}
