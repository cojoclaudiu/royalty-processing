import { style, createVar } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { tokens } from '../../styles/tokens'

const gap = createVar()
const peek = createVar()
const scale = createVar()
const shrink = createVar()
const height = createVar()
const offsetY = createVar()

const button = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.5rem',
  padding: '0 0.875rem',
  margin: 0,
  outline: 0,
  border: `1px solid ${tokens.colors.border}`,
  borderRadius: tokens.radii.md,
  backgroundColor: tokens.colors.secondary,
  fontFamily: 'inherit',
  fontSize: tokens.typography.fontSize.base,
  fontWeight: tokens.typography.fontWeight.medium,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.foreground,
  userSelect: 'none',
  cursor: 'pointer',

  '@media': {
    '(hover: hover)': {
      selectors: {
        '&:hover': {
          backgroundColor: tokens.colors.muted,
        },
      },
    },
  },

  selectors: {
    '&:active': {
      backgroundColor: tokens.colors.muted,
    },
    '&:focus-visible': {
      outline: `2px solid ${tokens.colors.ring}`,
      outlineOffset: -1,
    },
  },
})

const viewport = style({
  position: 'fixed',
  zIndex: 1,
  width: '250px',
  margin: '0 auto',
  bottom: '1rem',
  right: '1rem',
  left: 'auto',
  top: 'auto',

  '@media': {
    '(min-width: 500px)': {
      bottom: '2rem',
      right: '2rem',
      width: '300px',
    },
  },
})

const toast = style({
  vars: {
    [gap]: '0.75rem',
    [peek]: '0.75rem',
    [scale]: 'calc(max(0, 1 - (var(--toast-index) * 0.1)))',
    [shrink]: calc.subtract('1', scale),
    [height]: 'var(--toast-frontmost-height, var(--toast-height))',
    [offsetY]: `calc(var(--toast-offset-y) * -1 + (var(--toast-index) * ${gap} * -1) + var(--toast-swipe-movement-y))`,
  },
  position: 'absolute',
  right: 0,
  margin: '0 auto',
  boxSizing: 'border-box',
  background: tokens.colors.card,
  color: tokens.colors.cardForeground,
  border: `1px solid ${tokens.colors.border}`,
  padding: '1rem',
  width: '100%',
  boxShadow: '0 2px 10px rgb(0 0 0 / 0.1)',
  backgroundClip: 'padding-box',
  borderRadius: tokens.radii.lg,
  transformOrigin: 'bottom center',
  bottom: 0,
  left: 'auto',
  marginRight: 0,
  userSelect: 'none',
  transition:
    'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s, height 0.15s',
  cursor: 'default',
  zIndex: `calc(1000 - var(--toast-index))`,
  height,
  transform: `translateX(var(--toast-swipe-movement-x)) translateY(${calc.subtract(calc.subtract('var(--toast-swipe-movement-y)', `calc(var(--toast-index) * ${peek})`), `calc(${shrink} * ${height})`)}) scale(${scale})`,

  selectors: {
    '&[data-expanded]': {
      transform: `translateX(var(--toast-swipe-movement-x)) translateY(${offsetY})`,
      height: 'var(--toast-height)',
    },
    '&[data-starting-style], &[data-ending-style]': {
      transform: 'translateY(150%)',
    },
    '&[data-limited]': {
      opacity: 0,
    },
    '&[data-ending-style]': {
      opacity: 0,
    },
    '&[data-ending-style][data-swipe-direction="up"]': {
      transform: `translateY(${calc.subtract('var(--toast-swipe-movement-y)', '150%')})`,
    },
    '&[data-ending-style][data-swipe-direction="left"]': {
      transform: `translateX(${calc.subtract('var(--toast-swipe-movement-x)', '150%')}) translateY(${offsetY})`,
    },
    '&[data-ending-style][data-swipe-direction="right"]': {
      transform: `translateX(${calc.add('var(--toast-swipe-movement-x)', '150%')}) translateY(${offsetY})`,
    },
    '&[data-ending-style][data-swipe-direction="down"]': {
      transform: `translateY(${calc.add('var(--toast-swipe-movement-y)', '150%')})`,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      width: '100%',
      left: 0,
      height: calc.add(gap, '1px'),
    },
  },
})

const content = style({
  overflow: 'hidden',
  transition: 'opacity 0.25s',

  selectors: {
    '&[data-behind]': {
      opacity: 0,
    },
    '&[data-expanded]': {
      opacity: 1,
    },
  },
})

const title = style({
  fontWeight: tokens.typography.fontWeight.medium,
  fontSize: tokens.typography.fontSize.base,
  lineHeight: tokens.typography.lineHeight.snug,
  margin: 0,
})

const description = style({
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.snug,
  margin: 0,
})

const close = style({
  position: 'absolute',
  top: tokens.space.sm,
  right: tokens.space.sm,
  padding: 0,
  border: 'none',
  background: 'transparent',
  width: '1.25rem',
  height: '1.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: tokens.radii.sm,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: tokens.colors.muted,
    },
  },
})

export const styles = {
  button,
  viewport,
  toast,
  content,
  title,
  description,
  close,
}
