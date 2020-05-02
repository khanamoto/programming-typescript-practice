let a: [number] = [1]

// [名前、名字、生まれ年]のタプル
let b: [string, string, number] = ['malcolm', 'gladwell', 1963]

b = ['queen', 'elizabeth', 'il', 1926]

// 鉄道運賃の配列。方向によって異なる場合があります
let trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]]

// 少なくとも1つの要素を持つ文字列のリスト
let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']

// 不均一なリスト
let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']
