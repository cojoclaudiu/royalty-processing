import { Tabs as TabsBase } from '@base-ui/react/tabs'
import { styles } from './tabs.css'
import { cn } from '#/lib'

export function TabsRoot({ className, ...props }: TabsBase.Root.Props) {
  return <TabsBase.Root className={cn(styles.tabs, className)} {...props} />
}

export function TabsList({ className, ...props }: TabsBase.List.Props) {
  return <TabsBase.List className={cn(styles.list, className)} {...props} />
}

export function TabsTab({ className, ...props }: TabsBase.Tab.Props) {
  return <TabsBase.Tab className={cn(styles.tab, className)} {...props} />
}

export function TabsIndicator({
  className,
  ...props
}: TabsBase.Indicator.Props) {
  return (
    <TabsBase.Indicator
      className={cn(styles.indicator, className)}
      {...props}
    />
  )
}

export function TabsPanel({ className, ...props }: TabsBase.Panel.Props) {
  return <TabsBase.Panel className={cn(styles.panel, className)} {...props} />
}
