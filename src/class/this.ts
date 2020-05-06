class Set {
  has(value: number): boolean {}

  // add(value: number): Set {}
  add(value: number): this {}
}

class MutableSet extends Set {
  delete(value: number): boolean {}

  // add(value: number): MutableSet {}
}
