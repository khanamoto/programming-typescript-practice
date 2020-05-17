function appendAndReadPromise(path: string, data: string): Promise<string> {
  return appendAndReadPromise(path, data)
    .then(() => appendAndReadPromise(path))
    .catch(error => console.error(error))
}
