import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { invoicesSlice } from '#/store/invoices.slice'
import type { InvoiceRecord } from '@royalty/types'
import { InvoiceHistory } from '#/features/invoice-history'

function makeStore(records: Record<number, InvoiceRecord> = {}) {
  return configureStore({
    reducer: { invoices: invoicesSlice.reducer },
    preloadedState: { invoices: { records } },
  })
}

function renderHistory(records?: Record<number, InvoiceRecord>) {
  return render(
    <Provider store={makeStore(records)}>
      <InvoiceHistory />
    </Provider>,
  )
}

const record1: InvoiceRecord = {
  id: 1,
  name: 'Flowers',
  author: 'Miley Cyrus',
  progress: 0.15,
  invoiceId: '1-111',
  issuedAt: '2025-01-15T14:32:00.000Z',
  progressAtIssuance: 0.15,
}

const record2: InvoiceRecord = {
  id: 2,
  name: 'Anti-Hero',
  author: 'Taylor Swift',
  progress: 0.27,
  invoiceId: '2-222',
  issuedAt: '2025-01-15T15:00:00.000Z',
  progressAtIssuance: 0.27,
}

describe('InvoiceHistory', () => {
  it('shows empty state when no invoices', () => {
    renderHistory()

    expect(screen.getByText('No invoices yet')).toBeInTheDocument()
    expect(
      screen.getByText('Issued invoices will appear here'),
    ).toBeInTheDocument()
  })

  it('renders a row for each invoice', () => {
    renderHistory({ [record1.id]: record1, [record2.id]: record2 })

    expect(screen.getByText(record1.name)).toBeInTheDocument()
    expect(screen.getByText(record2.name)).toBeInTheDocument()
  })

  it('displays author name', () => {
    renderHistory({ [record1.id]: record1 })

    expect(screen.getByText(record1.author)).toBeInTheDocument()
  })

  it('displays progress at issuance as percentage', () => {
    renderHistory({ [record1.id]: record1 })

    expect(screen.getByText(/15%/)).toBeInTheDocument()
  })

  it('does not show empty state when records exist', () => {
    renderHistory({ [record1.id]: record1 })

    expect(screen.queryByText('No invoices yet')).not.toBeInTheDocument()
  })
})
