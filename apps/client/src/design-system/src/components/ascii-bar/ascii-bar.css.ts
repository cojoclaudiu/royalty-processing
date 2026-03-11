import { createVar, fallbackVar, style } from '@vanilla-extract/css'
import { tokens } from '../../styles/tokens'

const asciiColor = createVar()
const asciiColorFallback = fallbackVar(
  asciiColor,
  tokens.colors.mutedForeground,
)

const asciiBar = style({
  fontFamily: tokens.typography.fontFamily.mono,
  fontSize: tokens.typography.fontSize.xs,
  color: asciiColorFallback,
})

const text = style({
  color: tokens.colors.mutedForeground,
})

export const styles = {
  asciiBar,
  text,
  vars: {
    progress: asciiColor,
  },
}
