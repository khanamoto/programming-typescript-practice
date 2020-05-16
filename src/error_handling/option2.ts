interface Option<T> {
  flatMap<U>(f: (value: T) => None): None
  flatMap<U>(f: (value: T) => Option<U>): Option<U>
  getOrElse(value: T): T
}

// 成功した操作
class Some<T> implements Option<T> {
  constructor(private value: T) {}
  flatMap<U>(f: (value: T) => None): None
  flatMap<U>(f: (value: T) => Some<U>): Some<U>
  flatMap<U>(f: (value: T) => Option<U>): Option<U> {
    return f(this.value)
  }
  getOrElse(): T {
    return this.value
  }
}

// 失敗した操作
class None implements Option<never> {
  flatMap<U>(): None<U> {
    return this
  }
  getOrElse<U>(value: U): U {
    return value
  }
}

function Option<T>(value: null | undefined): None
function Option<T>(value: T): Some<T>
function Option<T>(value: T): Option<T> {
  if (value == null) {
    return new None()
  }
  return new Some(value)
}

// 使用例
// let result = Option(6)
//   .flatMap((n) => Option(n * 3))
//   .flatMap((n) => new None())
//   .getOrElse(7)

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

ask()
Option<string>
  .flatMap(parse)
Option<Date>
  .flatMap(date => new Some(date.toISOString()))
Option<string>
  .flatMap(date => new Some('Date is ' + date))
Option<string>
  .getOrElse('Error parsing date for some reason')