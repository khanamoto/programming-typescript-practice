// 明示的なany型の例
const a: any = 666
const b: any = ['danger']
const c = a + b

// 数値と配列を足しているがエラーにならない
console.log(c)
