import { DsBaseButtonProps, emptyDsBaseButtonProps } from '@/desing-sytem/models/ds-base-button.model'

export interface DsNarbarProps extends DsBaseButtonProps {
  /** it stays at the top of the screen once it reachs it */
  fixed?: boolean
}

export function emptyDsNarbarProps(): DsNarbarProps {
  return {
    ...emptyDsBaseButtonProps(),
    fixed: false,
  }
}
