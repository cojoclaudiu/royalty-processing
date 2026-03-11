import { cn } from '#/lib'
import { Toast as ToastBase } from '@base-ui/react/toast'
import { styles } from './toast.css'

export const ToastProvider = ToastBase.Provider

export function ToastPortal({ ...props }: ToastBase.Portal.Props) {
  return <ToastBase.Portal {...props} />
}

export function ToastViewport({
  className,
  ...props
}: ToastBase.Viewport.Props) {
  return (
    <ToastBase.Viewport className={cn(styles.viewport, className)} {...props} />
  )
}

export function ToastRoot({ className, ...props }: ToastBase.Root.Props) {
  return <ToastBase.Root className={cn(styles.toast, className)} {...props} />
}

export function ToastContent({ className, ...props }: ToastBase.Content.Props) {
  return (
    <ToastBase.Content className={cn(styles.content, className)} {...props} />
  )
}

export function ToastTitle({ className, ...props }: ToastBase.Title.Props) {
  return <ToastBase.Title className={cn(styles.title, className)} {...props} />
}

export function ToastDescription({
  className,
  ...props
}: ToastBase.Description.Props) {
  return (
    <ToastBase.Description
      className={cn(styles.description, className)}
      {...props}
    />
  )
}

export function ToastAction({ className, ...props }: ToastBase.Action.Props) {
  return <ToastBase.Action {...props} />
}

export function ToastClose({ className, ...props }: ToastBase.Close.Props) {
  return <ToastBase.Close className={cn(styles.close, className)} {...props} />
}

export function ToastPositioner({
  className,
  ...props
}: ToastBase.Positioner.Props) {
  return <ToastBase.Positioner {...props} />
}

export function ToastArrow({ className, ...props }: ToastBase.Arrow.Props) {
  return <ToastBase.Arrow {...props} />
}
