import { Tabs } from '#/design-system'
import {
  createFileRoute,
  Link,
  Outlet,
  useMatches,
} from '@tanstack/react-router'
import { TABS_VALUES } from './-constants'
import { styles } from './-layout.css'

export const Route = createFileRoute('/(tabs)')({
  component: RouteComponent,
})

function RouteComponent() {
  const matches = useMatches()

  const isHistoryRoute = matches.some((match) =>
    match.routeId.includes('/history'),
  )
  const tabValue = isHistoryRoute ? TABS_VALUES.HISTORY : TABS_VALUES.SONGS

  return (
    <main className={styles.main}>
      <Tabs.Root value={tabValue}>
        <Tabs.List>
          <Tabs.Tab
            nativeButton={false}
            value={TABS_VALUES.SONGS}
            render={<Link to="/">Songs</Link>}
          />
          <Tabs.Tab
            nativeButton={false}
            value={TABS_VALUES.HISTORY}
            render={<Link to="/history">History</Link>}
          />
          <Tabs.Indicator />
        </Tabs.List>

        <Outlet />
      </Tabs.Root>
    </main>
  )
}
