function x(): T | Error1 {}

function y(): U | Error1 | Error2 {
  let a = x()
  if (a instanceof Error) {
    return a
  }
  // aを使ってなにかする
}

function z(): U | Error1 | Error2 | Error3 {
  let a = y()
  if (a instanceof Error) {
    return a
  }
  // aを使ってなにかする
}
