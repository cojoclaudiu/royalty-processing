import { tokens } from '../tokens'

export function progressColor(value: number | null) {
  if (value === null) return undefined

  if (value < 20) return tokens.colors.progress.low
  if (value < 50) return tokens.colors.progress.mid
  return tokens.colors.progress.high
}
