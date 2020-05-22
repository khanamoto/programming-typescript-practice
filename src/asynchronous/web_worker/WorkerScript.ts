// type Commnad =
//   | { type: 'sendMessageToThread'; data: [ThreadID, Message] }
//   | { type: 'createThread'; data: [Participants] }
//   | { type: 'addUserToThread'; data: [ThreadID, UserID] }
//   | { type: 'removeUserFromThread'; data: [ThreadID, UserID] }

import { EventEmitter } from 'events'

// onmessage = e => processCommandFromMainThread(e.data)

// function processCommandFromMainThread(command: Command) {
//   switch (command.type) {
//     case 'sendMessageToThread':
//       let [threadID, message] = command.data
//       console.log(message)
//   }
// }

type Commands = {
  sendMessageToThread: [ThreadID, Message]
  createThread: [Participants]
  addUserToThread: [ThreadID, UserID]
  removeUserFromThread: [ThreadID, UserID]
}

type Events = {
  receivedMessage: [ThreadID, UserID, Massage]
  createdThread: [ThreadID, Participants]
  addedUserToThread: [ThreadID, UserID]
  removedUserFromThread: [ThreadID, UserID]
}

// メインスレッドから送られてくるイベントをリッスンする
let commandEmitter: SafeEmitter<Commands> = new EventEmitter()

// メインスレッドに対してイベントを発行する
let eventEmitter: SafeEmitter<Events> = new EventEmitter()

// 型安全なイベントエミッターを使って、
// メインスレッドからの入力コマンドをラップする
onmessage = command =>
  commandEmitter.emit(command.data.type, ...command.data.data)

// Workerによって発行されたイベントをリッスンし、それらをメインスレッドに送信する
eventEmitter.on('receivedMessage', data =>
  postMessage({ type: 'receivedMessage', data })
)
eventEmitter.on('createdThread', data =>
  postMessage({ type: 'createdThread', data })
)

// メインスレッドからのsendMessageToThreadコマンドに応答する
commandEmitter.on('sendMessageToThread', (threadID, message) =>
  console.log(`OK, I will send a message to threadID ${threadID}`)
)

// メインスレッドにイベントを送り返す
eventEmitter.emit('createdThread', 123, [456, 789])
