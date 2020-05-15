// Arrayプロトタイプにzipメソッドを追加する

// .zipについてtypescriptに伝える
interface Array<T> {
  zip<U>(list: U[]): [T, U][]
}

// .zipを実装する
Array.prototype.zip = function (list) {
  return this.map((v, k) => [v, list[k]])
}
