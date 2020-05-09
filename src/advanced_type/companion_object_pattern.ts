type Unit = 'EUR' | 'GBP' | 'JPY' | 'USD'

type Currency = {
  unit: Unit
  value: number
}

let Currency = {
  from(value: number, unit: Unit): Currency {
    return {
      unit: unit,
      value,
    }
  },
}
