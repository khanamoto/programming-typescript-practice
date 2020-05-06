// 値
let a = 1999

function b() {}

// 型
type a = number

interface b {
  (): void
}

// クラスと列挙型は特別
class C {}
let c: C = new C()

enum E {
  F,
  G,
}
let e: E = E.F
