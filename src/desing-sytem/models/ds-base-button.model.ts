import { DsBaseModel, emptyDsBaseProps } from '@/desing-sytem/models/ds-base.model'
import { MouseEventHandler } from 'react'

export interface DsBaseButtonProps extends DsBaseModel {
  onClick?: MouseEventHandler<unknown>
}

export function emptyDsBaseButtonProps(): DsBaseButtonProps {
  return {
    ...emptyDsBaseProps(),
  }
}
