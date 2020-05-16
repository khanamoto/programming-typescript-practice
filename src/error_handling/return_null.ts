// プロンプトを表示して、ユーザーに誕生日を入力してもらい、
// 解析してDateオブジェクトに変換する

function ask() {
  return prompt('When is your birthday?')
}

function parse(birthday: string): Date | null {
  let date = new Date(birthday)
  if (!isValid(date)) {
    return null
  }
  return date
}

// 与えられた日付が有効かチェック
function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  )
}

let date = parse(ask())
// dateがnullかどうかをチェックする
if (date) {
  console.info('Date is', date.toISOString())
} else {
  console.error('Error parsing date for some reason')
}
