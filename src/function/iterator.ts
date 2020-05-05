let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n
    }
  },
}

// for-ofを使って反復可能オブジェクトを反復する
for (let a of numbers) {
  console.log(a)
}

// 反復可能オブジェクトを展開する
let allNumbers = [...numbers]
console.log(allNumbers)

// 反復可能オブジェクトを分割割当する
let [one, two, ...rest] = numbers
