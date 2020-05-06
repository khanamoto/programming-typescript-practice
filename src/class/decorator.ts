@serializable
class APIPayload {
  getValue(): Payload {}
}

type ClassConstractor<T> = new (...args: any[]) => T

function serializable<
  T extends ClassConstractor<{
    getValue(): payload
  }>
>(Constructor: T) {
  return class extends Constructor {
    serialize() {
      return this.getValue().toString()
    }
  }
}
