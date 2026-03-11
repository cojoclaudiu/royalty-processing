import { tokens } from '#/design-system/src/styles/tokens'
import { style } from '@vanilla-extract/css'

const button = style({
  border: `1px solid ${tokens.colors.border}`,

  selectors: {
    '&:hover': {
      background: tokens.colors.background,
    },
  },
})

export const styles = {
  button,
}
