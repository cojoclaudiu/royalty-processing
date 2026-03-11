import { configureStore } from '@reduxjs/toolkit'
import { invoicesSlice } from './invoices.slice'

export const store = configureStore({
  reducer: {
    invoices: invoicesSlice.reducer,
  },
})
