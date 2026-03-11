import { useAppSelector } from '#/store/hooks'
import { styles } from './issue-invoice-cell.css'

export function IssueInfoCell({ id }: { id: number }) {
  const info = useAppSelector((state) => state.invoices.records[id])
  return (
    <div className={styles.issuanceInfo}>
      {info ? (
        <code className={styles.issuanceCode}>
          {new Date(info.issuedAt).toISOString().slice(0, 16).replace('T', ' ')}{' '}
          @ {Math.round(info.progressAtIssuance * 100)}%
        </code>
      ) : (
        <code className={styles.emptyCode}>
          {'░'.repeat(16)}
          {' @ ░░'}%
        </code>
      )}
    </div>
  )
}
