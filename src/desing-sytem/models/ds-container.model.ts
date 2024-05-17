import {
  DsBaseModel,
  emptyDsBaseProps,
} from '@/desing-sytem/models/ds-base.model'

export interface DsContainerProps extends DsBaseModel {}

export function emptyDsContainerProps(): DsContainerProps {
  return {
    ...emptyDsBaseProps(),
  }
}
