import { assignInlineVars } from '@vanilla-extract/dynamic'
import { styles } from './ascii-bar.css'
import { progressColor } from '../../styles/lib/progress-color'

export function AsciiBar({
  progress,
  width = 12,
}: {
  progress: number
  width?: number
}) {
  const filled = Math.round(progress * width)
  const empty = width - filled
  const value = Math.round(progress * 100)

  return (
    <span
      className={styles.asciiBar}
      style={assignInlineVars({
        [styles.vars.progress]: progressColor(value),
      })}
    >
      {'█'.repeat(filled)}
      {'░'.repeat(empty)} <span className={styles.text}>{value}%</span>
    </span>
  )
}
