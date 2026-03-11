import { useAppSelector } from '#/store/hooks'
import { FileCheck, FileTextIcon } from 'lucide-react'
import { Tooltip } from '#/design-system'
import { styles } from './issue-invoice-button.css'

interface IssueInvoiceButtonProps {
  id: number
  onClick: VoidFunction
}

const ICON_SIZE = 16

export function IssueInvoiceButton({ id, onClick }: IssueInvoiceButtonProps) {
  const issued = useAppSelector((state) => Boolean(state.invoices.records[id]))
  const label = issued ? 'Invoice already issued' : 'Issue invoice'

  return (
    <Tooltip.Root>
      <Tooltip.Trigger
        className={styles.button}
        delay={0}
        closeDelay={0}
        onClick={issued ? undefined : onClick}
        aria-label={label}
      >
        {issued ? (
          <FileCheck size={ICON_SIZE} />
        ) : (
          <FileTextIcon size={ICON_SIZE} />
        )}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner side="right" sideOffset={4}>
          <Tooltip.Popup>{label}</Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}
