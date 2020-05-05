// 単一パラメーター
function sum(numbers: number[]): number {
  // reduceの使い方: https://qiita.com/chihiro/items/1047e40514a778c08baa
  return numbers.reduce((total, n) => total + n, 0)
}

console.log(sum([1, 2, 3]))

// argumentsで可変長引数を使いたいが…
function sumVariadic(): number {
  return Array.from(arguments).reduce((total, n) => total + n, 0)
}

console.log(sumVariadic(1, 2, 3))

// レストパラメーター
function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

console.log(sumVariadicSafe(1, 2, 3))
