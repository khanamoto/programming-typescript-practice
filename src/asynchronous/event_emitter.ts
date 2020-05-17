import redis from 'redis'

type Events = {
  ready: void
  error: Error
  reconnecting: { attempt: number; delay: number }
}

type RedisClient = {
  on<E extends keyof Events>(event: E, f: (arg: Events[E]) => void): void
  emit<E extends keyof Events>(event: E, atg: Events[E]): void
}

let client = redis.createClient()

client.on('ready', () => console.info('Client is ready'))
client.on('error', e => console.error('An error occuerd!', e))
client.on('reconnecting', params => console.info('Reconnecting...', params))
