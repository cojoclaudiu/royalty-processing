import { describe, it, expect } from 'vitest'
import { invoicesSlice, issueInvoice } from '#/store/invoices.slice'
import type { Song } from '@royalty/types'

const { reducer } = invoicesSlice

const song: Song = {
  id: 1,
  name: 'Flowers',
  author: 'Miley Cyrus',
  progress: 0.15,
}

const emptyState = { records: {} }

describe('invoicesSlice', () => {
  describe('issueInvoice', () => {
    it('adds a record keyed by song id', () => {
      const state = reducer(emptyState, issueInvoice(song))

      expect(state.records[song.id]).toMatchObject({
        id: song.id,
        name: song.name,
        author: song.author,
        progressAtIssuance: song.progress,
      })
    })

    it('sets invoiceId', () => {
      const state = reducer(emptyState, issueInvoice(song))
      expect(state.records[song.id].invoiceId).toBeDefined()
    })

    it('sets issuedAt as a valid ISO string', () => {
      const state = reducer(emptyState, issueInvoice(song))

      expect(new Date(state.records[song.id].issuedAt).toISOString()).toBe(
        state.records[song.id].issuedAt,
      )
    })

    it('overwrites an existing record on re-issue', () => {
      const first = reducer(emptyState, issueInvoice(song))
      const updated = reducer(first, issueInvoice({ ...song, progress: 0.9 }))

      expect(updated.records[song.id].progressAtIssuance).toBe(0.9)
    })

    it('handles multiple songs independently', () => {
      const song2: Song = {
        id: 2,
        name: 'Anti-Hero',
        author: 'Taylor Swift',
        progress: 0.27,
      }

      let state = reducer(emptyState, issueInvoice(song))
      state = reducer(state, issueInvoice(song2))

      expect(Object.keys(state.records)).toHaveLength(2)
      expect(state.records[song.id].name).toBe(song.name)
      expect(state.records[song2.id].name).toBe(song2.name)
    })
  })
})
