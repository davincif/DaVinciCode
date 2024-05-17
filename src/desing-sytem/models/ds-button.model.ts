import { DsProps, emptyDsProps } from '@/desing-sytem/models/ds-props'

export interface DsButtonProps extends DsProps {
  nude?: boolean
}

export function emptyDsButtonProps(): DsButtonProps {
  return {
    ...emptyDsProps(),
  }
}
