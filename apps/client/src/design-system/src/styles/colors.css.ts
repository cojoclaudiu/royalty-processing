import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css'

export const colorsContract = createThemeContract({
  background: '',
  foreground: '',

  card: '',
  cardForeground: '',

  popover: '',
  popoverForeground: '',

  primary: '',
  primaryForeground: '',

  secondary: '',
  secondaryForeground: '',

  accent: '',
  accentForeground: '',

  muted: '',
  mutedForeground: '',

  destructive: '',
  destructiveForeground: '',

  border: '',
  input: '',
  ring: '',

  progress: {
    low: '',
    mid: '',
    high: '',
  },
})

createGlobalTheme(':root', colorsContract, {
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.145 0 0)',

  card: 'oklch(1 0 0)',
  cardForeground: 'oklch(0.145 0 0)',

  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.145 0 0)',

  primary: 'oklch(0.205 0 0)',
  primaryForeground: 'oklch(0.985 0 0)',

  secondary: 'oklch(0.97 0 0)',
  secondaryForeground: 'oklch(0.205 0 0)',

  muted: 'oklch(0.97 0 0)',
  mutedForeground: 'oklch(0.556 0 0)',

  accent: 'oklch(0.97 0 0)',
  accentForeground: 'oklch(0.205 0 0)',

  destructive: 'oklch(0.577 0.245 27.325)',
  destructiveForeground: 'oklch(0.985 0 0)',

  border: 'oklch(0.922 0 0)',
  input: 'oklch(0.922 0 0)',
  ring: 'oklch(0.708 0 0)',

  progress: {
    low: 'oklch(0.60 0.22 25)',
    mid: 'oklch(0.75 0.16 75)',
    high: 'oklch(0.65 0.18 145)',
  },
})
