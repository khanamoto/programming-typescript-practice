type Account = {
  id: number
  isEmployee: boolean
  notes: string[]
}

// すべてのフィールドを省略可能にする
type OptiononalAccount = {
  [K in keyof Account]?: Account[K]
}

// すべてのフィールドをnull許容にする
type NullableAccount = {
  [K in keyof Account]: Account[K] | null
}

// すべてのフィールドを読み取り専用にする
type ReadonlyAccount = {
  readonly [K in keyof Account]: Account[K]
}

// すべてのフィールドを再び書き込み可能にする
type Account2 = {
  -readonly [K in keyof ReadonlyAccount]: Account[K]
}

// すべてのフィールドを再び必須にする
type Account3 = {
  [K in keyof OptiononalAccount]-?: Account[K]
}
