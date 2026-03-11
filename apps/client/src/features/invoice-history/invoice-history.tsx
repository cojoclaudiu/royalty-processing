import { useAppSelector } from '#/store/hooks'
import { AsciiBar, DataTable } from '#/design-system'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import type { InvoiceRecord } from '@royalty/types'

const columnHelper = createColumnHelper<InvoiceRecord>()

const columns = [
  columnHelper.accessor('issuedAt', {
    header: () => <span>Date</span>,
    cell: (info) => new Date(info.getValue()).toLocaleString(),
  }),
  columnHelper.accessor('author', {
    header: () => <span>Author</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: () => <span>Song</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('progressAtIssuance', {
    header: () => <span>Progress</span>,
    cell: (info) => <AsciiBar progress={info.getValue()} />,
  }),
]

export function InvoiceHistory() {
  const records = useAppSelector((state) =>
    Object.values(state.invoices.records),
  )

  const table = useReactTable({
    data: records,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return <DataTable table={table} />
}
