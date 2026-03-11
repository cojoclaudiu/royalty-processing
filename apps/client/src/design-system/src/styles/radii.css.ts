import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

export const radiiContract = createThemeContract({
  none: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  full: '',
})

createGlobalTheme(':root', radiiContract, {
  none: '0',
  xs: '0.25rem',
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
})
