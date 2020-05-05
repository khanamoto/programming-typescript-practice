type WarnUser = {
  (warning: string): void
  wasCalled: boolean
}

function warnUser(warning: string) {
  if (warnUser.wasCalled) {
    return
  }
  warnUser.wasCalled = true
  alert(warning)
}
warnUser.wasCalled = false

const assinedWarnUser: WarnUser = warnUser
