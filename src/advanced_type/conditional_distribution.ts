type ToArray<T> = T[]
type A = ToArray<number>
type B = ToArray<number | string>

// 条件型を追加
type ToArray2<T> = T extends unknown ? T[] : T[]
type C = ToArray2<number>
type D = ToArray2<number | string>
