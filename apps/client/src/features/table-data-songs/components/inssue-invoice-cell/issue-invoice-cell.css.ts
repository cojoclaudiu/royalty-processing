import { tokens } from '#/design-system/src/styles/tokens'
import { style } from '@vanilla-extract/css'

const issuanceInfo = style({
  fontSize: tokens.typography.fontSize.xs,
  fontFamily: tokens.typography.fontFamily.mono,
  color: tokens.colors.mutedForeground,
})

const issuanceCode = style({
  backgroundColor: tokens.colors.muted,
  borderRadius: tokens.radii.sm,
  paddingInline: '0.375rem',
  paddingBlock: '0.125rem',
  border: `1px solid ${tokens.colors.border}`,
})

export const emptyCode = style({
  fontFamily: tokens.typography.fontFamily.mono,
  fontSize: tokens.typography.fontSize.xs,
  color: tokens.colors.ring,
})

export const styles = {
  issuanceInfo,
  issuanceCode,
  emptyCode,
}
