import { style } from '@vanilla-extract/css'
import { tokens } from '../../styles/tokens'

const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

const emptyState = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: tokens.space.sm,
  padding: `${tokens.space.xl} 0`,
  color: tokens.colors.mutedForeground,
  textAlign: 'center',
})

const emptyStateTitle = style({
  fontSize: tokens.typography.fontSize.sm,
  fontWeight: tokens.typography.fontWeight.medium,
  color: tokens.colors.foreground,
})

const emptyStateDescription = style({
  fontSize: tokens.typography.fontSize.sm,
})

export const styles = {
  wrapper,
  emptyState,
  emptyStateTitle,
  emptyStateDescription,
}
