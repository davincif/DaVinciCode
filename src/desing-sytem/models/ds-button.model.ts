import { DsBaseButtonProps, emptyDsBaseButtonProps } from '@/desing-sytem/models/ds-base-button.model'


export interface DsButtonProps extends DsBaseButtonProps {
  nude?: boolean
}


export function emptyDsButtonProps(): DsButtonProps {
  return {
    ...emptyDsBaseButtonProps(),
  }
}
