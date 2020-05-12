// function isString(a: unknown): boolean {
//   return typeof a === 'string'
// }

// console.log(isString('a'))
// console.log(isString([7]))

// is演算子でisStringに渡された引数がstringであることｗ、型チェッカーに伝える
function isString(a: unknown): a is string {
  return typeof a === 'string'
}

function parseInput(input: string | number) {
  let formattedInput: string
  if (isString(input)) {
    formattedInput = input.toUpperCase()
  }
}
