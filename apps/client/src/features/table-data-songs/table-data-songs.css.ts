import { tokens } from '#/design-system/src/styles/tokens'
import { style } from '@vanilla-extract/css'

const progressTrigger = style({
  width: 'max-content',
  paddingInline: tokens.space.xs,
})

const invoiceButton = style({
  paddingInline: tokens.space['2xl'],
})

const issuanceInfoColumn = style({
  minWidth: '14rem',
  width: '14rem',
})

export const styles = { progressTrigger, issuanceInfoColumn, invoiceButton }
