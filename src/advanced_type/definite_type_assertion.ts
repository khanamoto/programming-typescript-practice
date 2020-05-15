let userId!: string
fetchUser()

userId.toUpperCase()

function fetchUser() {
  userId = globalCache.get('userId')
}
