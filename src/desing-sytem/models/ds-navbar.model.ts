import {
  DsPropsModel,
  emptyDsProps,
} from '@/desing-sytem/models/ds-props.model'

export interface DsNarbarProps extends DsPropsModel {
  nude?: boolean

  /** it stays at the top of the screen once it reachs it */
  fixed?: boolean
}

export function emptyDsNarbarProps(): DsNarbarProps {
  return {
    ...emptyDsProps(),
    fixed: false,
  }
}
