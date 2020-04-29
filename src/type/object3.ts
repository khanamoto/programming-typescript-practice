let a: {
  b: number
  c?: string
  [key: number]: boolean // 複数可（インデックスシグネチャ）
}

a = { b: 1 }
a = { b: 1, c: undefined }
a = { b: 1, c: 'd' }
a = { b: 1, 10: true }
a = { b: 1, 10: true, 20: false }
a = { 10: true }
a = { b: 1, 33: 'red' }
