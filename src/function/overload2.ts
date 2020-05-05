// 旅行を予約するためのAPI

/**
 * from: 出発日
 * to: 帰着日
 * destination: 目的地
 */
type Reserve = {
  // オーバーロードされた2つの関数のシグネチャ
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
}

let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    // 宿泊旅行を予約する
  } else if (typeof toOrDestination === 'string') {
    // 日帰り旅行を予約する
  }
}
