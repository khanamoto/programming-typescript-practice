function ask() {
  let result = prompt('When is your birthday?')
  if (result === null) {
    return []
  }
  return [result]
}

function parse(birthday: string): Date[] {
  let date = new Date(birthday)
  if (!isValid(date)) {
    return []
  }
  return [date]
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  )
}

flatten(ask())
  .map(parse)
  .map((date) => date.toISOString())
  .forEach((date) => console.info('Date is', date))

// 配列の配列を、配列に平坦化する
function flatten<T>(array: T[][]): T[] {
  return Array.prototype.concat.apply([], array)
}
