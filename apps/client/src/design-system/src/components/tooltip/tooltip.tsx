import { cn } from '#/lib'
import { Tooltip as TooltipBase } from '@base-ui/react/tooltip'
import { styles } from './tooltip.css'

export const TooltipProvider = TooltipBase.Provider

export const TooltipRoot = TooltipBase.Root

export function TooltipTrigger({
  className,
  ...props
}: TooltipBase.Trigger.Props) {
  return (
    <TooltipBase.Trigger className={cn(styles.button, className)} {...props} />
  )
}

export function TooltipPortal({
  className,
  ...props
}: TooltipBase.Portal.Props) {
  return <TooltipBase.Portal {...props} />
}

export function TooltipPositioner({
  className,
  ...props
}: TooltipBase.Positioner.Props) {
  return <TooltipBase.Positioner className={cn(className)} {...props} />
}

export function TooltipPopup({ className, ...props }: TooltipBase.Popup.Props) {
  return (
    <TooltipBase.Popup className={cn(styles.popup, className)} {...props} />
  )
}

export function TooltipArrow({ className, ...props }: TooltipBase.Arrow.Props) {
  return (
    <TooltipBase.Arrow className={cn(styles.arrow, className)} {...props} />
  )
}
