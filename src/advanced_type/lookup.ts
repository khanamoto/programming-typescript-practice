// ソーシャルメディアAPIから返されたGraphQL APIの応答をモデル化するための、ネストされた複雑な型
// type FriendList = {
//   count: number
//   friends: {
//     firstName: string
//     lastName: string
//   }[]
// }

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

// ルックアップ型
type FriendList = APIResponse['user']['friendList']

// この応答をAPIから取得
function getAPIResponse(): Promise<APIResponse> {}

// それを表示
function renderFriendlist(friendList: FriendList) {}

let response = await getAPIResponse()
renderFriendlist(response.user.friendList)
