import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { tokens } from '#/design-system/src/styles/tokens'

const main = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  fontSize: tokens.typography.fontSize.base,
  marginInline: 'auto',
  paddingInline: calc.multiply(tokens.space.md, 4),
  paddingBlock: calc.multiply(tokens.space.md, 8),
})

export const styles = { main }
