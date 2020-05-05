let x = {
  a() {
    return this
  },
}

console.log(x.a())

let a = x.a

console.log(a())
