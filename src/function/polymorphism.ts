type Filter = {
  // (array: number[], f: (item: number) => boolean): number[]
  // (array: string[], f: (item: string) => boolean): string[]
  // (array: object[], f: (item: object) => boolean): object[]

  // ジェネリック型パラメータを使う
  <T>(array: T[], f: (item: T) => boolean): T[]
}

filter([1, 2, 3], (_) => _ > 2)

filter(['a', 'b', 'c'], (_) => _ !== 'b')

let names = [
  { firstName: 'beth' },
  { firstName: 'caitlyn' },
  { firstName: 'xin' },
]
filter(names, (_) => _.firstName.startsWith('b'))
