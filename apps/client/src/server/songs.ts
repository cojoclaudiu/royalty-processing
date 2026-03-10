import { createServerFn } from '@tanstack/react-start'
import { queryOptions } from '@tanstack/react-query'
import type { Song } from '@royalty/types'

export const fetchSongs = createServerFn({ method: 'GET' }).handler(
  async () => {
    console.log(process.env.BASE_API)
    const response = await fetch(`${process.env.BASE_API}/songs`)

    if (!response.ok)
      throw new Error(`Failed to fetch songs: ${response.status}`)

    return response.json() as Promise<Song[]>
  },
)

export const songsQueryOptions = () =>
  queryOptions({
    queryKey: ['songs'],
    queryFn: () => fetchSongs(),
  })
