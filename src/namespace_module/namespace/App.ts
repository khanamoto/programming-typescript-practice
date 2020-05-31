// モジュールを使って実際にリクエストを送信する

import { networkInterfaces } from 'os'

// namespace App {
//   Network.get<GitRepo>('https://api.github.com/repos/Microsoft/typescript')
// }

Network.HTTP.get<Dog[]>('http://url.com/dogs')
Network.UDP.send('http://url.com/cats', new Buffer(123))
