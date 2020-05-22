import { Eventemitter } from 'events'

interface SafeEmitter<Events extends Record<PropertyKey, unknown[]>> {
  emit<K extends keyof Events>(channel: K, ...data: Events[K]): boolean
  on<K extends keyof Events>(
    channel: K,
    listener: (...data: Events[K]) => void
  ): this
  on(channel: never, listener: (...data: unknown[]) => void): this
}
