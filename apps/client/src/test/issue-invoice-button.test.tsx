import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { invoicesSlice } from '#/store/invoices.slice'
import { Tooltip } from '#/design-system'
import type { InvoiceRecord } from '@royalty/types'
import { IssueInvoiceButton } from '#/features/table-data-songs/components/issue-invoice-button'

const songId = 1

function makeStore(records: Record<number, InvoiceRecord> = {}) {
  return configureStore({
    reducer: { invoices: invoicesSlice.reducer },
    preloadedState: { invoices: { records } },
  })
}

function renderButton(
  props: { id: number; onClick: VoidFunction },
  records?: Record<number, InvoiceRecord>,
) {
  return render(
    <Provider store={makeStore(records)}>
      <Tooltip.Provider>
        <IssueInvoiceButton {...props} />
      </Tooltip.Provider>
    </Provider>,
  )
}

const issuedRecord: InvoiceRecord = {
  id: songId,
  name: 'Flowers',
  author: 'Miley Cyrus',
  progress: 0.15,
  invoiceId: '1-123456',
  issuedAt: new Date().toISOString(),
  progressAtIssuance: 0.15,
}

describe('IssueInvoiceButton', () => {
  it('calls onClick when not yet issued', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    renderButton({ id: songId, onClick })

    await user.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalledOnce()
  })

  it('does not call onClick when already issued', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    renderButton({ id: songId, onClick }, { [songId]: issuedRecord })

    await user.click(screen.getByRole('button'))

    expect(onClick).not.toHaveBeenCalled()
  })

  it('shows issue label when not issued', () => {
    renderButton({ id: songId, onClick: vi.fn() })

    expect(screen.getByLabelText('Issue invoice')).toBeInTheDocument()
  })

  it('shows already issued label when issued', () => {
    renderButton({ id: songId, onClick: vi.fn() }, { [songId]: issuedRecord })

    expect(screen.getByLabelText('Invoice already issued')).toBeInTheDocument()
  })
})
