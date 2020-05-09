type APIResponse = {
  user: {
    userId: string
    friendList: {
      count: number
      friends: {
        firstName: string
        lastName: string
      }[]
    }
  }
}

type ResponseKeys = keyof APIResponse
type UserKeys = keyof APIResponse['user']
type FriendListKeys = keyof APIResponse['user']['friendList']
