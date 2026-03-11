import { style } from '@vanilla-extract/css'
import { tokens } from '../../styles/tokens'

const tabs = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.md,
  width: '100%',
})

const list = style({
  display: 'flex',
  position: 'relative',
  zIndex: 0,
  paddingInline: tokens.space.xs,
  gap: tokens.space.xs,
})

const tab = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  margin: 0,
  outline: 0,
  background: 'none',
  appearance: 'none',
  color: tokens.colors.mutedForeground,
  fontFamily: 'inherit',
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  fontWeight: tokens.typography.fontWeight.medium,
  userSelect: 'none',
  whiteSpace: 'nowrap',
  wordBreak: 'keep-all',
  paddingInline: tokens.space.lg,
  paddingBlock: 0,
  height: '2rem',
  cursor: 'pointer',
  textDecoration: 'none',

  selectors: {
    '&[data-active]': {
      color: tokens.colors.foreground,
    },

    '&:focus-visible': {
      position: 'relative',
      outline: `2px solid ${tokens.colors.ring}`,
      borderRadius: tokens.radii.full,
    },
  },

  '@media': {
    '(hover: hover)': {
      selectors: {
        '&:hover': {
          color: tokens.colors.foreground,
        },
      },
    },
  },
})

const indicator = style({
  position: 'absolute',
  zIndex: -1,
  left: 0,
  top: '50%',
  translate: 'var(--active-tab-left) -50%',
  width: 'var(--active-tab-width)',
  height: '2.375rem',
  borderRadius: tokens.radii.full,
  backgroundColor: tokens.colors.muted,
  transitionProperty: 'translate, width',
  transitionDuration: '200ms',
  transitionTimingFunction: 'ease-in-out',
})

const panel = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  outline: 0,

  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${tokens.colors.ring}`,
      outlineOffset: -1,
      borderRadius: tokens.radii.lg,
    },
    '&[hidden]': {
      display: 'none',
    },
  },
})

export const styles = {
  tabs,
  list,
  tab,
  indicator,
  panel,
}
