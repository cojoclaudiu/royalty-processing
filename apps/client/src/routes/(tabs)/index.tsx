import { createFileRoute } from '@tanstack/react-router'
import { songsQueryOptions } from '#/server/songs'
import { TableDataSongs } from '#/features/table-data-songs'
import { Tabs } from '#/design-system'
import { TABS_VALUES } from './-constants'

export const Route = createFileRoute('/(tabs)/')({
  component: RouteComponent,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(songsQueryOptions())
  },
})

function RouteComponent() {
  return (
    <Tabs.Panel value={TABS_VALUES.SONGS}>
      <TableDataSongs />
    </Tabs.Panel>
  )
}
