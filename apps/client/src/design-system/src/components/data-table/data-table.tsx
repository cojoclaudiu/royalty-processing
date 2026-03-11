import type * as React from 'react'
import { flexRender, type Table as TanstackTable } from '@tanstack/react-table'
import { Table } from '#/design-system'
import { cn } from '#/lib'
import { styles } from './data-table.css'
import { FileTextIcon } from 'lucide-react'

interface DataTableProps<TData> extends React.ComponentProps<'div'> {
  table: TanstackTable<TData>
}

export function DataTable<TData>({
  table,
  className,
  ...props
}: DataTableProps<TData>) {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Table.Root>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Head key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Table.Head>
              ))}
            </Table.Row>
          ))}
        </Table.Header>

        <Table.Body>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <Table.Row key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell
                    key={cell.id}
                    className={cell.column.columnDef.meta?.className}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={table.getAllColumns().length}>
                <div className={styles.emptyState}>
                  <FileTextIcon size={24} />
                  <span className={styles.emptyStateTitle}>
                    No invoices yet
                  </span>
                  <span className={styles.emptyStateDescription}>
                    Issued invoices will appear here
                  </span>
                </div>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
