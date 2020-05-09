// サーバーから取得した既存のユーザー
type ExistingUser = {
  id: number
  name: string
}

// サーバーにまだ保存されていない新規のユーザー
type NewUser = {
  name: string
}

// ユーザーを削除する
function deleteUser(user: { id?: number; name: string }) {
  delete user.id
}

let existingUser: ExistingUser = {
  id: 12345,
  name: 'Ima User',
}

deleteUser(existingUser)

// 旧来のユーザーのための型
type LegacyUser = {
  id?: number | string
  name: string
}

let legacyUser: LegacyUser = {
  id: '79331',
  name: 'Xin Yang',
}

deleteUser(legacyUser)
