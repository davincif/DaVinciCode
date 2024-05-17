import {
  DsBaseModel,
  emptyDsBaseProps,
} from '@/desing-sytem/models/ds-base.model'

export interface DsBurgerMenuProps extends DsBaseModel {
  nude?: boolean
}

export function emptyDsBurgerMenuProps(): DsBurgerMenuProps {
  return {
    ...emptyDsBaseProps(),
  }
}
