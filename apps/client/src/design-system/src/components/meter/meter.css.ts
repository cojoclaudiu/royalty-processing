import { createVar, fallbackVar, style } from '@vanilla-extract/css'
import { tokens } from '../../styles/tokens'

const progressColorVar = createVar()
const progressColorVarFallback = fallbackVar(
  progressColorVar,
  tokens.colors.primary,
)

const root = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: tokens.space.xs,
  rowGap: tokens.space.sm,
  width: '8rem',
})

const label = style({
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  fontWeight: tokens.typography.fontWeight.medium,
  color: tokens.colors.foreground,
})

const value = style({
  gridColumnStart: 2,
  margin: 0,
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.foreground,
  textAlign: 'right',
  fontVariantNumeric: 'tabular-nums',
})

const track = style({
  gridColumn: '1 / 3',
  overflow: 'hidden',
  backgroundColor: tokens.colors.border,
  boxShadow: `inset 0 0 0 1px ${tokens.colors.border}`,
  height: '0.25rem',
  borderRadius: tokens.radii.sm,
})

const indicator = style({
  display: 'block',
  backgroundColor: progressColorVarFallback,
  transition: 'width 500ms',
})

export const styles = {
  root,
  label,
  value,
  track,
  indicator,
  vars: {
    progressColor: progressColorVar,
  },
}
