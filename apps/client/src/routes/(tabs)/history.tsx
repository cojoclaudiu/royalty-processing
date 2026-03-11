import { createFileRoute } from '@tanstack/react-router'
import { Tabs } from '#/design-system'
import { TABS_VALUES } from './-constants'
import { InvoiceHistory } from '#/features/invoice-history'

export const Route = createFileRoute('/(tabs)/history')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Tabs.Panel value={TABS_VALUES.HISTORY}>
      <InvoiceHistory />
    </Tabs.Panel>
  )
}
