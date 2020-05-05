// userIdにオプションパラメーター（省略可能なパラメーター）を使う
function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId || 'Not signed in')
}

log('Page loaded')
log('User signed in', 'da763de')

// userIdをデフォルトパラメーターで書き直す
function log2(message: string, userId = 'Not signed in') {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId)
}

log2('Page loaded')
log2('User signed in', 'dfj6tsdc')

// デフォルトパラメーターに明示的な型アノテーションを加える
type Context = {
  appId?: string
  userId?: string
}

function log3(message: string, context: Context = {}) {
  let time = new Date().toISOString()
  console.log(time, message, context.userId)
}

log3('Page loaded')
log3('User signed in', { appId: '0000000000', userId: 'ak7yyf8v' })
