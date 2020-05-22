let worker = new Worker('WorkerScript.ts')
worker.onmessage = e => {
  console.log(e.data)
}
worker.postMessage('some data')
