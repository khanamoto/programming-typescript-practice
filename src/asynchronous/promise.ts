import { readFile } from 'fs'

// resolve関数は処理の成功を意味し、reject関数は処理の失敗を意味する
type Executor<T> = (
  resolve: (result: T) => void,
  reject: (error: unknown) => void
) => void

class Promise<T> {
  constructor(f: Executor<T>) {}
  then<U>(g: (result: T) => Promise<U> | U): Promise<U> {}
  catch<U>(g: (error: unknown) => Promise<U> | U): Promise<U> {}
}

function appendAndReadPromise(path: string, data: string): Promise<string> {
  return appendPromise(path, data)
    .then(() => readPromise(path))
    .catch(error => console.error(error))
}

function readFilePromise(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

let a: () => Promise<string, TypeError> = //
let b: (s: string) => Promise<number, never> = //
let c: () => Promise<boolean, RangeError> = //

a()
  .then(b)
  .catch(e => c())
  .then(result => console.info('Done', result))
  .catch(e => console.error('Error', e))