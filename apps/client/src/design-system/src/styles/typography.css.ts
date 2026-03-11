import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

export const typographyContract = createThemeContract({
  fontFamily: {
    sans: '',
    mono: '',
  },

  fontSize: {
    xs: '',
    sm: '',
    md: '',
    base: '',
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': '',
    '4xl': '',
    '5xl': '',
    '6xl': '',
    '7xl': '',
  },

  fontWeight: {
    extralight: '',
    light: '',
    normal: '',
    regular: '',
    medium: '',
    semibold: '',
    bold: '',
    black: '',
  },

  lineHeight: {
    tight: '',
    snug: '',
    normal: '',
    relaxed: '',
  },

  textLineHeight: {
    xs: '',
    sm: '',
    base: '',
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': '',
    '4xl': '',
    '5xl': '',
    '6xl': '',
    '7xl': '',
  },

  letterSpacing: {
    tighter: '',
    tight: '',
    normal: '',
    wide: '',
    wider: '',
    widest: '',
  },
})

createGlobalTheme(':root', typographyContract, {
  fontFamily: {
    sans: '"Plus Jakarta Sans", "Avenir Next", "Segoe UI", sans-serif',
    mono: '"JetBrains Mono", "SF Mono", Menlo, monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
  fontWeight: {
    extralight: '200',
    light: '300',
    normal: '400',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },
  lineHeight: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
  },
  textLineHeight: {
    xs: 'calc(1 / 0.75)',
    sm: 'calc(1.25 / 0.875)',
    base: 'calc(1.5 / 1)',
    lg: 'calc(1.75 / 1.125)',
    xl: 'calc(1.75 / 1.25)',
    '2xl': 'calc(2 / 1.5)',
    '3xl': 'calc(2.25 / 1.875)',
    '4xl': 'calc(2.5 / 2.25)',
    '5xl': '1',
    '6xl': '1',
    '7xl': '1',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
})
