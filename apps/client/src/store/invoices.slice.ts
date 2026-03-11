import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { InvoiceRecord, Song } from '@royalty/types'

interface InvoicesState {
  records: Record<number, InvoiceRecord>
}

const initialState: InvoicesState = {
  records: {},
}

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    issueInvoice: (state, action: PayloadAction<Song>) => {
      const songId = action.payload.id

      state.records[songId] = {
        ...action.payload,
        invoiceId: `${songId}-${Date.now()}`,
        issuedAt: new Date().toISOString(),
        progressAtIssuance: action.payload.progress,
      }
    },
  },
})

export const { issueInvoice } = invoicesSlice.actions
