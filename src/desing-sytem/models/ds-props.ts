import { ReactNode } from 'react'

export interface DsProps {
  loading?: boolean
  children?: ReactNode
}

export function emptyDsProps(): DsProps {
  return {}
}
