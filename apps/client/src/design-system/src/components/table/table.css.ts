import { style, globalStyle } from '@vanilla-extract/css'
import { tokens } from '../../styles/tokens'

const container = style({
  position: 'relative',
  width: '100%',
  overflowX: 'auto',
  border: `1px solid ${tokens.colors.border}`,
  borderRadius: tokens.radii.lg,
})

const table = style({
  width: '100%',
  tableLayout: 'auto',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  fontSize: tokens.typography.fontSize.sm,
  captionSide: 'bottom',
})

const header = style({})

globalStyle(`${header} tr`, {
  borderBottom: `1px solid ${tokens.colors.border}`,
})

const body = style({})

globalStyle(`${body} tr:last-child`, {
  borderBottom: 0,
})

const footer = style({
  borderTop: `1px solid ${tokens.colors.border}`,
  backgroundColor: `color-mix(in oklab, ${tokens.colors.muted} 50%, transparent)`,
  fontWeight: tokens.typography.fontWeight.medium,
})

globalStyle(`${footer} > tr:last-child`, {
  borderBottom: 0,
})

const row = style({
  borderBottom: `1px solid ${tokens.colors.border}`,
  transition: 'background-color 150ms ease',
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      selectors: {
        [`${body} &:hover`]: {
          backgroundColor: `color-mix(in oklab, ${tokens.colors.muted} 50%, transparent)`,
        },
      },
    },
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
})

const head = style({
  height: '2.75rem',
  whiteSpace: 'nowrap',
  paddingInline: tokens.space.sm,
  paddingBlock: tokens.space.sm,
  textAlign: 'left',
  verticalAlign: 'middle',
  fontWeight: tokens.typography.fontWeight.medium,
  color: tokens.colors.foreground,
})

globalStyle(`${head} > [role="checkbox"]`, {
  transform: 'translateY(2px)',
})

const cell = style({
  height: '3rem',
  whiteSpace: 'nowrap',
  paddingInline: tokens.space.sm,
  paddingBlock: tokens.space.sm,
  verticalAlign: 'middle',
  selectors: {
    '&:has([role="checkbox"])': {
      paddingRight: 0,
    },
  },
})

const caption = style({
  marginTop: tokens.space.md,
  color: tokens.colors.mutedForeground,
  fontSize: tokens.typography.fontSize.sm,
})

const cellContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: tokens.space.sm,
  minWidth: 0,
})

const cellText = style({
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

const cellMeta = style({
  color: tokens.colors.mutedForeground,
  fontSize: tokens.typography.fontSize.xs,
  lineHeight: tokens.typography.textLineHeight.xs,
})

export const styles = {
  container,
  table,
  header,
  body,
  footer,
  row,
  head,
  cell,
  caption,
  cellContent,
  cellText,
  cellMeta,
}
