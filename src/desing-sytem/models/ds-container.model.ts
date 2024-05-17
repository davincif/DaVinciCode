import {
  DsPropsModel,
  emptyDsProps,
} from '@/desing-sytem/models/ds-props.model'

export interface DsContainerProps extends DsPropsModel {}

export function emptyDsContainerProps(): DsContainerProps {
  return {
    ...emptyDsProps(),
  }
}
