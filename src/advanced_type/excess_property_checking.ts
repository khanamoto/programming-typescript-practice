type Options = {
  baseURL: string
  cacheSize?: number
  tier?: 'prod' | 'dev'
}

class API {
  constructor(private options: Options) {}
}

new API({
  baseURL: 'http://api.mysite.com',
  tier: 'prod',
})

new API({
  baseURL: 'http://api.mysite.com',
  badTier: 'prod',
})

new API({
  baseURL: 'http://api.mysite.com',
  badTier: 'prod',
} as Options)

new API({
  baseURL: 'http://api.mysite.com',
  badTier: 'prod',
})

let badOptions = {
  baseURL: 'http://api.mysite.com',
  badTier: 'prod',
}
new API(badOptions)

let options: Options = {
  baseURL: 'http://api.mysite.com',
  badTier: 'prod',
}
new API(options)
