import type * as React from 'react'
import { cn } from '#/lib'
import { styles } from './table.css'

function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div data-slot="table-container" className={styles.container}>
      <table
        data-slot="table"
        className={cn(styles.table, className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn(styles.header, className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(styles.body, className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(styles.footer, className)}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(styles.row, className)}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(styles.head, className)}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(styles.cell, className)}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(styles.caption, className)}
      {...props}
    />
  )
}

function TableCellContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn(styles.cellContent, className)} {...props} />
}

function TableCellText({ className, ...props }: React.ComponentProps<'span'>) {
  return <span className={cn(styles.cellText, className)} {...props} />
}

function TableCellMeta({ className, ...props }: React.ComponentProps<'span'>) {
  return <span className={cn(styles.cellMeta, className)} {...props} />
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableCellContent,
  TableCellText,
  TableCellMeta,
}
