import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

export const spaceContract = createThemeContract({
  none: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',
  '3xl': '',
})

createGlobalTheme(':root', spaceContract, {
  none: '0',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  '3xl': '3rem',
})
