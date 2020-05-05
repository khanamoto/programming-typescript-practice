function fancyDate(this: Date) {
  return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
}

console.log(fancyDate.call(new Date()))

fancyDate()
