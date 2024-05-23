import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import {
  DsBaseModel,
  emptyDsBaseProps,
} from '@/desing-sytem/models/ds-base.model'

type ReactInputType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export interface DsInputModel
  extends Omit<DsBaseModel, 'children'>,
    ReactInputType {
  //   placeholder
}

export function emptyDsInputModel(): DsInputModel {
  const data = {
    ...emptyDsBaseProps(),
  }

  if ('children' in data) {
    delete data['children']
  }

  return data
}
