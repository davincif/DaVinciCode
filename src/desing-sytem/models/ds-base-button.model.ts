import {
  DsBaseModel,
  emptyDsBaseProps,
} from '@/desing-sytem/models/ds-base.model'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type ReactButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export interface DsBaseButtonProps extends DsBaseModel, ReactButtonType {
  //   placeholder
}

export function emptyDsBaseButtonProps(): DsBaseButtonProps {
  return {
    ...emptyDsBaseProps(),
  }
}
