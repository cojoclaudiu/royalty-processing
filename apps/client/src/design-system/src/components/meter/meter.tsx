import { Meter as MeterBase } from '@base-ui/react/meter'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { cn } from '#/lib'
import { styles } from './meter.css'
import { progressColor } from '../../styles/lib/progress-color'

export function MeterRoot({
  className,
  value,
  style,
  ...props
}: MeterBase.Root.Props) {
  return (
    <MeterBase.Root
      value={value}
      className={cn(styles.root, className)}
      style={{
        ...style,
        ...assignInlineVars({
          [styles.vars.progressColor]: progressColor(value),
        }),
      }}
      {...props}
    />
  )
}

export function MeterLabel({ className, ...props }: MeterBase.Label.Props) {
  return <MeterBase.Label className={cn(styles.label, className)} {...props} />
}

export function MeterTrack({ className, ...props }: MeterBase.Track.Props) {
  return <MeterBase.Track className={cn(styles.track, className)} {...props} />
}

export function MeterIndicator({
  className,
  ...props
}: MeterBase.Indicator.Props) {
  return (
    <MeterBase.Indicator
      className={cn(styles.indicator, className)}
      {...props}
    />
  )
}

export function MeterValue({ className, ...props }: MeterBase.Value.Props) {
  return <MeterBase.Value className={cn(styles.value, className)} {...props} />
}
