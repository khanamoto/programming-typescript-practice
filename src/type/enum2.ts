const enum Language {
  English,
  Spanish,
  Russian,
}

// 有効なenumキーにアクセス
let a = Language.English

// 無効なenumキーにアクセス
// let b = Language.Tagalog

// 有効なenum値にアクセス
let c = Language[0]

// 無効なenum値にアクセス
let d = Language[6]
