// 4.2.5.2 制限付きポリモーフィズムを使って可変長引数をモデル化する

function call<T entends unknown[], R>(f: (...args: T) => R, ...args: T): R {
  return f(...args)
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value)
}

let a = call(fill, 10, 'a')
let b = call(fill, 10)
let c = call(fill, 10, 'a', 'z')