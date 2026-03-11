import { style } from '@vanilla-extract/css'
import { tokens } from '../../styles/tokens'

const panel = style({
  display: 'flex',
  border: `1px solid ${tokens.colors.border}`,
  backgroundColor: tokens.colors.secondary,
  borderRadius: tokens.radii.md,
  padding: '0.125rem',
})

const button = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2rem',
  height: '2rem',
  padding: 0,
  margin: 0,
  outline: 0,
  border: 0,
  borderRadius: tokens.radii.sm,
  backgroundColor: 'transparent',
  color: tokens.colors.foreground,
  userSelect: 'none',
  cursor: 'pointer',

  selectors: {
    '&[data-popup-open]': {
      backgroundColor: tokens.colors.muted,
    },
    '&:focus-visible': {
      backgroundColor: 'transparent',
      outline: `2px solid ${tokens.colors.ring}`,
      outlineOffset: -1,
    },
    '&:active': {
      backgroundColor: tokens.colors.border,
    },
  },

  '@media': {
    '(hover: hover)': {
      selectors: {
        '&:hover': {
          backgroundColor: tokens.colors.muted,
        },
      },
    },
  },
})

const icon = style({
  width: '1rem',
  height: '1rem',
})

const popup = style({
  boxSizing: 'border-box',
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.snug,
  display: 'flex',
  flexDirection: 'column',
  padding: `0.25rem 0.5rem`,
  borderRadius: tokens.radii.md,
  backgroundColor: 'canvas',
  transformOrigin: 'var(--transform-origin)',
  transition: 'transform 150ms, opacity 150ms',

  selectors: {
    '&[data-starting-style], &[data-ending-style]': {
      opacity: 0,
      transform: 'scale(0.9)',
    },
    '&[data-instant]': {
      transition: 'none',
    },
  },

  '@media': {
    '(prefers-color-scheme: light)': {
      outline: `1px solid ${tokens.colors.border}`,
      boxShadow: `0 10px 15px -3px ${tokens.colors.border}, 0 4px 6px -4px ${tokens.colors.border}`,
    },
    '(prefers-color-scheme: dark)': {
      outline: `1px solid ${tokens.colors.border}`,
      outlineOffset: -1,
    },
  },
})

const arrow = style({
  display: 'flex',

  selectors: {
    '&[data-side="top"]': {
      bottom: -8,
      rotate: '180deg',
    },
    '&[data-side="bottom"]': {
      top: -8,
      rotate: '0deg',
    },
    '&[data-side="left"]': {
      right: -13,
      rotate: '90deg',
    },
    '&[data-side="right"]': {
      left: -13,
      rotate: '-90deg',
    },
  },
})

export const styles = {
  panel,
  button,
  icon,
  popup,
  arrow,
}
