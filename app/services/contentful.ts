import { useRuntimeConfig } from '#app'
import { createClient as createContentfulClient } from 'contentful'

const createClient = () => {
  const $config = useRuntimeConfig()
  return createContentfulClient({
    space: $config.space,
    accessToken: $config.accessToken,
  })
}

export default createClient
