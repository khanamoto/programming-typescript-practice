type Unit = 'cm' | 'px' | '%'

let units: Unit[] = ['cm', 'px', '%']

// 各単位をチェックし、一致するものがなければnullを返す
function parseUnit(value: string): Unit | null {
  for (let i = 0; i < units.length; i++) {
    if (value.endsWith(units[i])) {
      return units[i]
    }
  }
  return null
}

type Width = {
  unit: Unit
  value: number
}

function parseWidth(width: number | string | null | undefined): Width | null {
  // widthがnullまたはundefinedであればすぐ戻る
  if (width == null) {
    return null
  }

  // numberであればピクセルをデフォルトにする
  if (typeof width === 'number') {
    return { unit: 'px', value: width }
  }

  // widthから単位を解析する
  let unit = parseUnit(width)
  if (unit) {
    return { unit, value: parseFloat(width) }
  }

  // どれでもなければnullを返す
  return null
}
