import { useSuspenseQuery } from '@tanstack/react-query'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  type Row,
} from '@tanstack/react-table'
import { songsQueryOptions } from '#/server/songs'
import type { Song } from '@royalty/types'
import { DataTable, Tooltip } from '#/design-system'
import { Toast as ToastBase } from '@base-ui/react/toast'
import { Meter, Toast } from '#/design-system'
import { XIcon } from 'lucide-react'
import { useAppDispatch } from '#/store/hooks'
import { issueInvoice } from '#/store/invoices.slice'
import { IssueInvoiceButton } from './components/issue-invoice-button'

import { styles } from './table-data-songs.css'
import { IssueInfoCell } from './components/inssue-invoice-cell'

export const toastManager = ToastBase.createToastManager()

const columnHelper = createColumnHelper<Song>()

const staticColumns = [
  columnHelper.accessor('id', {
    header: () => <span>ID</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: () => <span>Song name</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('author', {
    header: () => <span>Author</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('progress', {
    header: () => <span>Progress</span>,
    cell: (info) => {
      const value = Math.round(info.getValue() * 100)
      return (
        <Tooltip.Root>
          <Tooltip.Trigger
            delay={0}
            closeDelay={0}
            render={<div className={styles.progressTrigger} />}
          >
            <Meter.Root value={value}>
              <Meter.Track>
                <Meter.Indicator />
              </Meter.Track>
            </Meter.Root>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner side="right" sideOffset={4}>
              <Tooltip.Popup>{value}% complete</Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      )
    },
  }),
]

export function TableDataSongs() {
  const { data } = useSuspenseQuery(songsQueryOptions())
  const dispatch = useAppDispatch()

  const handleInvoice = (row: Row<Song>) => {
    dispatch(issueInvoice(row.original))
    toastManager.add({
      title: 'Invoice issued',
      description: `${row.original.name} — ${Math.round(row.original.progress * 100)}%`,
    })
  }

  const columns = [
    ...staticColumns,
    columnHelper.display({
      id: 'actions',
       meta: { className: styles.invoiceButton },
      header: () => <span>Issue Invoice</span>,
      cell: ({ row }) => (
        <IssueInvoiceButton
          id={row.original.id}
          onClick={() => handleInvoice(row)}
        />
      ),
    }),

    columnHelper.display({
      id: 'issuance-info',
      meta: { className: styles.issuanceInfoColumn },
      header: () => <span>Last Issued</span>,
      cell: ({ row }) => <IssueInfoCell id={row.original.id} />,
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Tooltip.Provider>
      <Toast.Provider toastManager={toastManager}>
        <DataTable table={table} />

        <Toast.Portal>
          <Toast.Viewport>
            <ToastList />
          </Toast.Viewport>
        </Toast.Portal>
      </Toast.Provider>
    </Tooltip.Provider>
  )
}

function ToastList() {
  const { toasts } = ToastBase.useToastManager()
  return toasts.map((toast) => (
    <Toast.Root key={toast.id} toast={toast}>
      <Toast.Content>
        <Toast.Title />
        <Toast.Description />
        <Toast.Close aria-label="Close">
          <XIcon size={16} />
        </Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ))
}
