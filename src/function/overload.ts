// 呼び出しシグネチャの省略記法
type Log = (message: string, userId?: string) => void

// 完全な呼び出しシグネチャ
type Log2 = {
  (message: string, userId?: string): void
}
