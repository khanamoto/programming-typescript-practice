// ジェネレーター関数を呼び出すと、ジェネレーターが返される
function* createFibonacciGenerator() {
  let a = 0
  let b = 1
  while (true) {
    yield a
    ;[a, b] = [b, a + b] // prettierのセミコロンの設定で、先頭にセミコロンがつく
  }
}

let fibonacciGenarator = createFibonacciGenerator()
console.log(fibonacciGenarator.next())
console.log(fibonacciGenarator.next())
console.log(fibonacciGenarator.next())
console.log(fibonacciGenarator.next())
console.log(fibonacciGenarator.next())
console.log(fibonacciGenarator.next())

// ジェネレーターを明示的にアノテート
function* createNumbers(): Generator<number> {
  let n = 0
  while (1) {
    yield n++
  }
}

let numbers = createNumbers()
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
